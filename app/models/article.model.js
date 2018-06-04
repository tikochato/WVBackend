const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    title: String,
    content: String,
    author: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);
