import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const UserContext = createContext(null);

const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const googleSingIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const disConnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => disConnect();
  }, []);

  const userInfo = {
    user,
    loading,
    createAccount,
    updateNameAndPhoto,
    emailVerification,
    login,
    googleSingIn,
    logout,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
