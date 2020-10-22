import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import projectReducer from './slices/projectSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer } from 'redux-persist';

const persistConfig = {
	key: 'root',
	version: 1,
	storage
};

const rootReducer = combineReducers({
	projects: projectReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
		}
	})
});
