const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretKey';
/*
const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'products_db',
    password: 'root',
    port: 5432
});

const getProducts = (request, response) => {
    pool.query('SELECT * from products').then(result => response.status(200).json(result.rows), error => {
        response.send(error)
    })
};

const getProductById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createProduct = (request, response, next) => {
    const { category, model, brand, price } = request.body

    pool.query('INSERT INTO products (category,model,brand,price) VALUES ($1,$2,$3,$4)', [
        category, model, brand, price
    ], (error, results) => {
        if (error) {
            // throw error
            next(error);
        } else {
            response.status(201).send(`Product added with ID: ${results}`)
        }
    })
}

const updateProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const { category, model, brand, price } = request.body

    pool.query('UPDATE products SET category=$1,model = $2, brand = $3,price=$4 WHERE id = $5', [
        category,
        model,
        brand,
        price,
        id
    ], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Product modified with ID: ${id}`)
    })
}

const deleteProduct = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Product deleted with ID: ${id}`)
    })
}
*/
// login and register
const loginHandler = (request, response) => {
    const { email, password } = request.body;
   pool.query("SELECT * FROM users where email=$1", [email], (error, result) => {
        if (result.rows.length < 1) {
            return response.status(401).send("invalid email");

        } else {
            console.log(result.rows)
            let user = result.rows[0];
            let dbpassword = user.password;
            if (password === dbpassword) {
                let token = jwt.sign({
                    email: user.email
                }, SECRET_KEY);
                response.status(200).send({ token });
            } else {
                response.status(401).send("Invalid Password")
            }
        }
    });
}

const handleRegistration = (request, response) => {
    const { email, password } = request.body;
    pool.query("INSERT INTO users(email,password) values ($1,$2)", [
        email, password
    ], (error, result) => {
        if (error) {
            response.status(500).json({ "message": error });
        } else {
            response.status(200).send({ "message": "User registered" })
        }
    });
}

const tokenVerifier = (request, response, next) => {
    if (!request.headers.authorization) {
        return response.status(401).send('Unauthorized request')
    }
    let token = request.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return response.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return response.status(401).send('Unauthorized request')
    }
    request.email = payload.email;
    next()
}
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    loginHandler,
    handleRegistration,
    tokenVerifier
}
