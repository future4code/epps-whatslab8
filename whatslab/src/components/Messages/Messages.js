import React from "react";
import styled from "styled-components";
import Inputs from "../Input/Inputs";

const ContainerMessage = styled.div`
  display: flex;
  width: 600px;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  background: #ededed;
  border-radius: 3px;
  box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0.19),
    0 12px 15px 0 rgba(0, 0, 0, 0.24);
`;

const MessagesP = styled.p`
  display: flex;
  text-align: left;
`;
const DivMessages = styled.div`
  display: flex;
  margin-left: 5%;
  margin-bottom: 5%;
  width: 100%;
`;

const DivMessagesEu = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
const MessagesEu = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3%;
`;

export class Messages extends React.Component {
  state = {
    messages: [],
    UserInput: "",
    MessageInput: "",
  };

  onChangeUser = (event) => {
    this.setState({ UserInput: event.target.value });
  };

  onChangeMessage = (event) => {
    this.setState({ MessageInput: event.target.value });
  };

  sendMessage = () => {
    const newMessage = {
      user: this.state.UserInput,
      message: this.state.MessageInput,
    };

    const newMessageList = [...this.state.messages, newMessage];

    this.setState({
      messages: newMessageList,
      MessageInput: "",
    });
  };

  removeMessage = (messageIndex) => {
    if (window.confirm("Tem certeza que deseja deletar essa mensagem?")) {
      const messageRemoved = this.state.messages;
      messageRemoved.splice(messageIndex, 1);

      this.setState({
        messages: messageRemoved
      });
    }
  };

  pressEnter = (event) => {
      if (event.key === "Enter") {
        this.sendMessage()
      }
  }

  render() {
    const messageList = this.state.messages.map((message) => {
      if (message.user === "eu") {
        return (
          <DivMessagesEu>
            <MessagesEu onDoubleClick= {this.removeMessage}>{message.message}</MessagesEu>
          </DivMessagesEu>
        );
      }
      return (
        <DivMessages>
          <MessagesP onDoubleClick= {this.removeMessage}>
            <strong>{message.user}:</strong> {message.message}
          </MessagesP>
        </DivMessages>
      );
    });

    return (
      <ContainerMessage>
        {messageList}
        <Inputs
          UserInput={this.state.UserInput}
          onChangeUser={this.onChangeUser}
          MessageInput={this.state.MessageInput}
          onChangeMessage={this.onChangeMessage}
          sendMessage={this.sendMessage}
          pressEnter={this.pressEnter}
        />
      </ContainerMessage>
    );
  }
}

export default Messages;
