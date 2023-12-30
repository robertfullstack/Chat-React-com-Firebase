import React, { useState, useEffect } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
// Aqui usei o react-firebas-hook por que ele nos dá um resultado se estamos logado ou não.
import { auth, db } from "./services/firebase";
import Login from "./components/Login";
import Loading from "./components/Loading";
import SideBar from './components/SideBar';
import * as C from './styles/app';

import Chat from './components/Chat';

const App = () => {
    const [user, loading] = useAuthState(auth);
    const [userChat, setUserChat] = useState(null);

    useEffect(() => {
        if (user) {
            db.collection("users").doc(user.uid).set({
                // Usei o user.uid para não duplicar o email, para que não crie um novo registro.
                email: user.email,
                photoURL: user.photoURL,
            });
        }
    }, [user]);

    if (loading) return <Loading />;

    if (!user) return <Login />;

    return (
        <C.Container>
            <SideBar setUserChat={setUserChat} userChat={userChat} />
            <Chat userChat={userChat} />
        </C.Container>
    )
}

export default App;