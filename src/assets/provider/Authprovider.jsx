
import { createContext, useEffect, useState } from "react";

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { GithubAuthProvider } from "firebase/auth";
// import { updateProfile } from "firebase/auth";
import auth from "../../Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";
import axios from "axios";

export const authContest = createContext()
const Authprovider = ({ children }) => {
    const [user, setuser] = useState('')
    const [loading, setloading] = useState(true)
    const [reload, setreload] = useState(false)

    const provider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const creatregistation = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const creatUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setloading(false)
        return signOut(auth)
    }

    const googleSignin = () => {
        setloading(false)
        return signInWithPopup(auth, provider)
    }
    const githubSignin = () => {
        setloading(true)
        return signInWithPopup(auth, GithubProvider)
    }

    const updateProfilePicture = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }




    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
    //         setuser(currentuser)
    //         setloading(false)
    //     })
    //     return () => {
    //         unsubscribe()
    //     }


    // }, [reload])


    // / save user
    const saveUser = async user => {
        const currentUser = {
            email: user?.email,
            role: 'guest',
            status: 'Verified',
        }
        const { data } = await axios.put(
            'http://localhost:5001/user',
            currentUser
        )
        return data
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            if (currentUser) {
                saveUser(currentUser)
            }
            setloading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])



    const authinfo = { creatUser, creatregistation, user, logout, googleSignin, githubSignin, updateProfilePicture, loading, setreload }


    return (
        <div>
            <authContest.Provider value={authinfo}>
                {children}
            </authContest.Provider>
        </div>
    );
};

export default Authprovider;