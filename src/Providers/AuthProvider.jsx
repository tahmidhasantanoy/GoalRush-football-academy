import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import axios from "axios";

const auth = getAuth(app);
export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   TODO : ??
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  //   On auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      //TODO : jwt start
      //get & set the token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", { email: currentUser.email })
          .then((data) => {
            console.log(data.data.token);

            localStorage.setItem("jwt-access-token", data.data.token);
          });
      } else {
        localStorage.removeItem("jwt-access-token");
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
  };

  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
