import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../services/firebase";
import * as C from "./style";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarChatsItem from "../SidebarChatsItem";

const SidebarChats = ({ setUserChat, userChat }) => {
    const [user] = useAuthState(auth);

    const refChat = db
        .collection("chats")
        .where("users", "array-contains", user.email);
    // Usado para criar um filto criando uma array das pessoas que eu adicionei.

    const [chatsSnapshot] = useCollection(refChat);

    return (
        <C.Container>
            {chatsSnapshot?.docs.map((item, index) => (
                // Usado para verificar se exite algum usuário, e se sim listar todos.
                <C.Content key={index}>
                    <SidebarChatsItem
                        id={item.id}
                        users={item.data().users}
                        user={user}
                        setUserChat={setUserChat}
                        active={userChat?.chatId === item.id ? "active" : ""}
                    />
                    <C.Divider />
                </C.Content>
            ))}
        </C.Container>
    );
};

export default SidebarChats;
