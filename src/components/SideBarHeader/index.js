import React from 'react';
import * as C from "./style";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
// Alguns ícones do react-icons;
import * as EmailValidator from "email-validator";
// Validador de email, usado para verificar se o email existe.
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";


const SidebarHeader = ({ setUserChat }) => {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  // Função para criar um novo chat.
  const handleCreateChat = () => {
    const emailInput = prompt("Escreva o e-mail desejado");

    if (!emailInput) return;
    // Usado para quando não digitar nada no prompt do email não acontecer nada.

    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
      // Usado para verificar se o email existe ou não.
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
      // Usado para verificar se o email é diferente do seu.
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe!");
      // Usado para verificar se o email que você inseriu não já foi colocado antes.
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailChat) => {
    // Função usada para verificar se o email quando digitado no prompt já existe ou não.
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  return (
    <C.Container>
      <C.Avatar
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />
      <C.Options>
        <MdDonutLarge />
        <MdChat onClick={handleCreateChat} />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
};

export default SidebarHeader;
