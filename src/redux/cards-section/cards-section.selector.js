import { createSelector } from 'reselect';

const selectCardsSection = state => state.cardsSection;

export const selectCardsSectionSelector = createSelector(
    [selectCardsSection],
    cardsSection => cardsSection.cardContent
);
