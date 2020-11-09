import { createSelector } from 'reselect';

const selectArticles = state => state.articlesSection;

export const selectArticlesSelector = createSelector(
    [selectArticles],
    articlesSection => articlesSection.articles
);
