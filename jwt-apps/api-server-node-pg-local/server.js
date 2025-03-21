const express=require('express');
const cors=require('cors');
const db=require('./model')

const PORT=3000;

const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    return res.status(200).send('Server is available on '+PORT)
})

app.get('/products',db.tokenVerifier ,db.getProducts);
app.get('/products/:id',db.getProductById);
app.post('/products',db.createProduct);
app.delete('/products/:id',db.deleteProduct);
app.put('/products/:id',db.updateProduct);

app.post('/login',db.loginHandler);
app.post('/register',db.handleRegistration);

//error handling middleware
app.use(function(err, req, res, next) {
    res.status(500);
    return res.send("Oops, something went wrong.")
 });
 
app.listen(PORT,()=>console.log('Server running on port '+PORT))