/* export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user?.name;

export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser; */

export const getIsReducerSpinner = state => state.calc.isReducerSpinner;

/* export const getUserDataCalories = state => state.auth.userData.calories; */

const calcSelectors = {
  /*  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrent, */
  getIsReducerSpinner,
  /* getUserDataCalories, */
};

export default calcSelectors;
