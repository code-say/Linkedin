import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from "./firebase";
import './Login.css';

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [profile,setProfile] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileURL:userAuth.user.photoURL,
            })
            );
        }).catch(error => alert(error));

    };

    const register = () => {
        if (!name) {
            return alert("please enter a full name!");
        }


        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profile,
            })
            .then(() => {
                dispatch(
                    login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profile,
                })
                );
            })
        }).catch(error => alert(error));
    };

    return (
        <div className="login">
            <img src="http://www.mahesh-europe.com/wp-content/uploads/2020/07/Linkedin-Logo-2011%E2%80%932019.png"
             alt="" 
            />

            <form >
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />

                <input value={profile} onchange={e => setProfile(e.target.value)} placeholder="Pofile Pic URL(Optional) " type="text" />

                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" />

                <button type="submit" onclick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? {" "}
                <span className="login__register" onclick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
