import React from 'react';
import './articles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectArticlesSelector } from '../../redux/articles/articles.selector';

const Articles = ({ articles }) => {
    return (
        <div className="articles-container">
            <div className="site-container">
                <div className="article-wrapper">
                    {
                        articles.map((article) => {
                            return (
                                <article className="article-card" key={article.id}>
                                    <figure className="article-image">
                                        <img src={`${article.imageUrl}`} alt={article.label} />
                                    </figure>
                                    <div className="article-content">
                                        <Link to="/" className="card-category">{article.label}</Link>
                                        <h3 className="card-title">{article.title}</h3>
                                        <p className="card-except">{article.short}</p>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    articles: selectArticlesSelector
});

export default connect(mapStateToProps)(Articles);

