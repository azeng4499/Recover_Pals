import React from "react";
import Moment from "react-moment";
import { auth } from "../../../Firebase";
import {
    MessageContainer, MessageText, MessageWrapper
} from './MessageComponents'

const Message = ({ text, createdAt, from}) => {
  return (
    <>
      <MessageContainer from={from === auth.currentUser.uid}>
        <MessageWrapper from={from === auth.currentUser.uid}>
          <MessageText>{text}</MessageText>
          <br />
          <small>
            <Moment fromNow>{createdAt.toDate()}</Moment>
          </small>
        </MessageWrapper>
      </MessageContainer>
    </>
  );
};

export default Message;
