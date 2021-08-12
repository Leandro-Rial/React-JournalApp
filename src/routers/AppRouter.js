import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { login } from "../actions/auth";
import JournalScreen from "../components/journal/JournalScreen";
import { firebase } from "../firebase/firebaseConfig";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Espere...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRouter
            exact
            path="/"
            component={JournalScreen}
            isAuthenticated={isLoggedIn}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
