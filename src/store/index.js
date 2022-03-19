/*
Redux (hard)
vs
ContextAPI (easy)
*/

import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig,reducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)
export {
  store,
  persistor
}

/*
  1. npm i redux react-redux
  2. create store/index.js, store/reducers/index.js, store/actions/index.js
  3. create basic functions in reducers and actions
  and export them
  4. write configuration code for store/index.js
  5. Import Provider and store in App.js and wrap the code with that.
*/