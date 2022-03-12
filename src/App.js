import logo from './logo.svg';
import './App.css';
import Signup from "../src/views/Signup"
import {store,persistor} from './store'
import { Provider } from 'react-redux'
import Navigation from '../src/config/router';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div className="App">
      <Navigation />
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;

// hamara standerd yeh ha k hum apis ka kaam alag file ma karte ha or realtime k
// jab bhi hum realtime listner seprete file ma lagate ha tau us ko listen karne 
// ma issue hoga or realtime ma hum callbacks use karte ha na k async await.
//aarzi masley ka hal yeh ha k listners hum usi componenet ma lagaye 
//actions k ander asynchronous kaam karwana ho tau hum log redux-thunk ko istemaal kiya jaye.
//agar action k ander api call karni ha tau redux-thunk istemaal kia jata ha.
//alag alag modules yani j se (addAds ka module or user ka module)tau har module k liye hum alag alag actions or reducers banaye ge.
//react antive k implementation k 2 tareeqay ha ek expo or dosra cli.
//App power mirror
//react native basic ui componenet react native ki web se
// react native apis for example (camera,webview,gallery,pushnotification,vontact)iss k liye expo k docs ma jana parey ga.