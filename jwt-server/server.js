const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'johnwenthishomemanytimesinthisyear';

app.use(cors());
app.use(bodyParser.json());

// Dummy users array for demo purposes
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Login route - generates JWT token
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const authData = req.headers['authorization'];
    let token = authData.split(' ')[1]
    console.log(token)
    if (!token) {
        return res.status(403).json({ message: 'Token required' });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = decoded;
        next();
    });
};

// Protected route
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected content', user: req.user });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
