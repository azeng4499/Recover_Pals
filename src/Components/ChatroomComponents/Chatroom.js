import React, { useEffect, useState } from "react";
import { db, auth } from "../../Firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { AiOutlineSend } from "react-icons/ai";
import {
  CRContainer,
  CRUsersContainer,
  ChatLabel,
  LabelText,
  CRMessages,
  TypeBar,
  MessagesContainer,
  MessagesContainer2,
  InputBox,
  BigText,
} from "./ChatroomComponents";
import User  from "./User/User";
import Message from "./Message/Message";

const Chatroom = () => {
  const [users, setUsers] = useState([]);
  const [targetedUser, setTargetedUser] = useState();
  const [chat, setChat] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const loggedInUser = auth.currentUser.uid;

  useEffect(async () => {
    const docRef = doc(db, "recoveree", loggedInUser);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const matchedUIDs = data.matched;

    setUsers(matchedUIDs);
  }, []);

  const selectUser = (info) => {
    setTargetedUser(info.firstName + " " + info.lastName);
    setChat(info);

    const sendToUser = info.uid;
    const id =
      loggedInUser > sendToUser
        ? `${loggedInUser + sendToUser}`
        : `${sendToUser + loggedInUser}`;

    const msgRef = collection(db, "messages", id, "chat");
    const q = query(msgRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessages(msgs);
    });
  };

  const handleSubmit = async () => {
    const sendToUser = chat.uid;

    const id =
      loggedInUser > sendToUser
        ? `${loggedInUser + sendToUser}`
        : `${sendToUser + loggedInUser}`;

    await addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: loggedInUser,
      to: sendToUser,
      createdAt: Timestamp.fromDate(new Date()),
    });
    setText("");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <>
      <CRContainer>
        <CRUsersContainer>
          <ChatLabel>
            <LabelText>Active Chats</LabelText>
          </ChatLabel>
          {users.map((uid) => (
            <User key={uid} uid={uid} selectUser={selectUser} />
          ))}
        </CRUsersContainer>
        <CRMessages>
          <ChatLabel>
            <LabelText>
              {targetedUser ? "Chatting with " + targetedUser : null}
            </LabelText>
          </ChatLabel>
          {chat ? (
            <>
              <MessagesContainer>
                {messages.length
                  ? messages.map(({ text, createdAt, from }) => (
                      <Message
                        key={createdAt}
                        text={text}
                        createdAt={createdAt}
                        from={from}
                      />
                    ))
                  : null}
              </MessagesContainer>
              <TypeBar>
                <InputBox
                  onChange={onChange}
                  value={text}
                  onKeyDown={handleKeyPress}
                />
                <AiOutlineSend
                  size="2em"
                  color="black"
                  onClick={handleSubmit}
                />
              </TypeBar>
            </>
          ) : (
            <MessagesContainer2>
              <BigText>Select a Mentor to Start Chatting</BigText>
            </MessagesContainer2>
          )}
        </CRMessages>
      </CRContainer>
    </>
  );
};

export default Chatroom;
