import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from '../Firebase/firebse.init';
import { useState } from 'react';

const Login = () => {
  const auth = getAuth(app);
  const probider = new GoogleAuthProvider();
  const gitHubPrs = new GithubAuthProvider();
  const [users, setUsers] = useState(null);
  const handlileClickProbide = () => {
    signInWithPopup(auth, probider)
      .then(res => {
        const user = res.user;
        setUsers(user);
      })
      .catch(error => {
        console.log('error', error.message);
      });
  };

  const handlileGithub = () => {
    signInWithPopup(auth, gitHubPrs)
      .then(ress => {
        const logUser = ress.user;
        console.log(logUser);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handileSinOut = () => {
    signOut(auth)
      .then(res => {
        console.log(res);
        setUsers(null);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className=" justify-center items-center ">
      {users ? (
        <button onClick={handileSinOut} className=" text-xl">
          Log out
        </button>
      ) : (
        <div className="flex gap-5">
          <button onClick={handlileClickProbide} className="btn text-xl">
            Google Log in
          </button>

          <button onClick={handlileGithub} className="btn text-xl">
            gitHub Log in
          </button>
        </div>
      )}
      <div>
        <h2>user:{users?.displayName}</h2>
        <h2>email:{users?.email}</h2>
        <h2></h2>
      </div>
    </div>
  );
};

export default Login;
