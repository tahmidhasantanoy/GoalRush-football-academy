import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const Authcontext = createContext();
  const [user, setUser] = useState(null);


//   TODO 
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user };

  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
