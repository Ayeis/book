import express from 'express'

import BooksRoutes from './routes/book.routes.js'

const app = express()

// settings
app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome!!' })
})

app.use('/api/books', BooksRoutes)

export default app;