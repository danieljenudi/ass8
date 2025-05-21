const express = require('express');
const app = express()
const articleRouter = require('./routes/articles')

app.use(express.json())
app.use('/api/articles', articleRouter)

app.listen(8080)