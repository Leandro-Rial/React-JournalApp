import Swal from 'sweetalert2'
import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { FinishLoading, StartLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(StartLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(FinishLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(FinishLoading());
        Swal.fire('Fail', err.message, 'error')
      });
    };
  };
  
  export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
    dispatch(StartLoading());
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
        dispatch(FinishLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(FinishLoading());
        Swal.fire('Fail', err.message, 'error')
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});