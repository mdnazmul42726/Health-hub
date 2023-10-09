import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    // sign up with email pass
    const signUpWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update a user's profile
    const updateUserProfile = (name, imgUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: name, photoURL: imgUrl });
    };

    // Sign in a user with an email address and password
    const logInWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Authenticate Using Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    // sign out a user
    const LogOut = () => signOut(auth);

    // Get the currently signed-in user
    useEffect(() => {
        const logedInUser = onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false);
        });
        return logedInUser;
    });

    const authentication = { signUpWithEmailAndPassword, user, updateUserProfile, logInWithEmailAndPassword, LogOut, loading, signInWithGoogle };

    return <AuthContext.Provider value={authentication}>{children}</AuthContext.Provider>

};

export default AuthProvider;