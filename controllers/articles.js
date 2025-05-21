const articles = require('../models/articles')

exports.getAllArticles = (req, res) => {
    res.json(articles.getAllArticles())
}

exports.getArticleById = (req, res) => {
    const id = req.params.id
    res.json(articles.getArticleById(id))
}

exports.createArticle = (req, res) => {
    const { title, content } = req.body
    if (!title || !content) 
        return res.status(400).json({ error: 'Title and content are required' })
    

    const newArticle = articles.createArticle({ title, content })
    res.status(201).location(`/api/articles/${newArticle.id}`).end()
}

exports.updateArticle = (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    const updatedArticle = articles.updateArticle(id, updates);

    if (updatedArticle.error) {
        return res.status(404).json(updatedArticle);
    }

    res.json(updatedArticle);
};

exports.deleteArticle = (req, res) => {
    const id = req.params.id;

    const result = articles.deleteArticle(id);
    if (result && result.error) { 
        return res.status(404).json(result);
    } else {
        res.status(204).end();
    }
};