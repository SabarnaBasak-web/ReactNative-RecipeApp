export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';

export const toggleFav = mealId => {
  return {
    type: TOGGLE_FAVOURITE,
    payload: mealId,
  };
};
