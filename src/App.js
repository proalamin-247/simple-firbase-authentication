import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';


const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handaleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log('error khaichow', error);
      })
  }

  const handaleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        console.log('successful sign out')
      }).catch((error) => {
        setUser({});
        console.log('sign out failed')
      });

  }

  const handleGithubSignIn=()=>{
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // const credential = GithubAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        console.log(user);
      })
    .catch(error=>{
      setUser({});
      console.log('error', error)
    })
  }

  return (
    <div className="App">
      {/* {condition ? true : flase} */}
      {
        user.uid ? <button onClick={handaleGoogleSignOut}>Sign out</button>
        :
        <>
            <button onClick={handaleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
      }
      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
