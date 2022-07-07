import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  /* persistReducer, */
  /* FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, */
} from 'redux-persist';

////////Store///////////////////
const store = configureStore({
  reducer: { auth: 'persistReducer(authPersistConfig, authReducer)' },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false /* {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      } */,
    }),
});
//console.log(store.getState());

const persistor = persistStore(store);

export { store, persistor };
