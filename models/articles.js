let idCounter = 0
const articles = []

const getAllArticles = () => articles

const getArticleById = (id) => {
    if (articles.find(article => article.id == id) == undefined)
        return { error: 'Article not found' }
    return articles.find(article => article.id == id)

}

const createArticle = ({ title, content }) => {
    const newArticle = { id: ++idCounter, title, content }
    articles.push(newArticle)
    return newArticle
}

const updateArticle = (id, updates) => {
    const articleIndex = articles.findIndex(article => article.id == Number(id));

    if (articleIndex === -1) {
        return { error: 'Article not found' };
    }

    const existingArticle = articles[articleIndex];
    const updatedArticle = { ...existingArticle, ...updates };

    articles[articleIndex] = updatedArticle;
    return updatedArticle;
};

const deleteArticle = (id) => {
    const articleIndex = articles.findIndex(article => article.id == Number(id));

    if (articleIndex === -1) {
        return { error: 'Article not found' };
    }

    articles.splice(articleIndex, 1);
};

module.exports = { 
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}