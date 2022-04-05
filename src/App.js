import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';


const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();

  const handaleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log('error khaichow', error);
      })
  }

  return (
    <div className="App">
      <button onClick={handaleGoogleSignIn}>Google Sign In</button>
      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
