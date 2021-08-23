import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=> {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoURL: userAuth.profile,
        }));
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      {!user ? (<Login /> ):(

    <div className="app__body">
      <Sidebar />
      {/* App Body */}
      <Feed />
      <Widgets />
    </div>
    )}
    </div>
  );
}

export default App;
