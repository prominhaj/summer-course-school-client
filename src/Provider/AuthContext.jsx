import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const UserContext = createContext(null);

const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateNameAndPhoto = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    createAccount,
    updateNameAndPhoto,
    emailVerification,
    login,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
