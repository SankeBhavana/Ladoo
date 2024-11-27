import React, { createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,  
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Create Auth Context
export const AuthContext = createContext();

// Initialize Firebase Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const [loading, setLoading] = useState(true); // Loading state

  // Function to create a new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to sign up with Google
  const signUpWithGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Function to log in
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user; // Access user object
        if (user) {
          console.log("User logged in:", user);
        }
        setLoading(false);
        return user;
      })
      .catch((error) => {
        console.log("Login Error:", error.message);
        setLoading(false);
        throw error; // Propagate error if needed
      });
  };

  // Function to log out
  const logout = () => {
    localStorage.removeItem("login-token"); // Optional: Remove token from localStorage
    return signOut(auth);
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Context value to be provided to consumers
  const authInfo = {
    user,
    loading,
    login,
    logout,
    createUser,
    signUpWithGmail,
  };

  // Optionally, display a loading indicator while auth state is being determined
  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};
