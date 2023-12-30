import React from "react";
import * as C from "./style";
import SidebarHeader from "../SideBarHeader";
import SidebarChats from "../SideBarChats";

const SideBar = ({ setUserChat, userChat }) => {
    return (
        <C.Container>
            <SidebarHeader setUserChat={setUserChat} />
            <SidebarChats setUserChat={setUserChat} userChat={userChat} />
        </C.Container>
    );
};

export default SideBar;
