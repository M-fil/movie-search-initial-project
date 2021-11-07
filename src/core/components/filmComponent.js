import { Routes } from '../constants/routes';

const Text = {
  AddFavoriteButtonText: 'Add to Favorites',
  RemoveFavoriteButtonText: 'Remove from Favorites',
};

export const updateIsFavoriteActionButton = (
  actionButtonHTML,
  isFavorite,
) => {
  if (isFavorite) {
    actionButtonHTML.textContent = Text.RemoveFavoriteButtonText;
  } else {
    actionButtonHTML.textContent = Text.AddFavoriteButtonText;
  }
};

export const renderFilmComponent = (
  filmDto,
  isTitleLink = true,
  handleFavoriteButtonClick = null,
  fixButtonWidth = false,
) => {
  const container = document.createElement('div');
  container.className = 'film-card';

  let titleHTML = null;
  if (isTitleLink) {
    titleHTML = document.createElement('a');
    titleHTML.href = `#${Routes.Film}/${filmDto.getImdbID()}`;
  } else {
    titleHTML = document.createElement('h2');
  }
  titleHTML.textContent = filmDto.getTitle();
  titleHTML.className = 'film-card__title';

  const imageHTML = document.createElement('img');
  imageHTML.className = 'film-card__poster';
  imageHTML.src = filmDto.getPoster();
  imageHTML.alt = filmDto.getTitle();

  const yearHTML = document.createElement('span');
  yearHTML.textContent = filmDto.getYear();
  yearHTML.className = 'film-card__year';

  const actionButton = document.createElement('button');
  actionButton.className = 'film-card__button';
  if (fixButtonWidth) {
    actionButton.classList.add('film-card__button_fix-width');
  }
  updateIsFavoriteActionButton(actionButton, filmDto.getIsFavorite());
  actionButton.addEventListener('click', () => {
    if (handleFavoriteButtonClick) {
      handleFavoriteButtonClick(filmDto.getImdbID(), filmDto.getIsFavorite());
    }
  });

  container.append(titleHTML, imageHTML, yearHTML, actionButton);

  return container;
};
