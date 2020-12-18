import React from "react";
import styled from "styled-components";

const DivMainInput = styled.div`
  width: 100%;
  background: #fff;
`;

const DivInput = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
`;
const InputUserName = styled.input`
  margin-right: 8px;
  width: 15%;
  margin-right: 5px;
  padding: 15px 20px;
`;
const InputMessage = styled.input`
  margin-right: 10px;
  width: 60%;
  padding: 15px 20px;
`;
const Button = styled.button`
  width: 20%;
  font-size: large;
  color: #fff;
  background: #00bfa5;
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.275);
  outline: none;
`;

export class Inputs extends React.Component {
  render() {
    return (
      <DivMainInput>
          
        <DivInput>

          <InputUserName
            placeholder="Usuário"
            value={this.props.UserInput}
            onChange={this.props.onChangeUser}
          ></InputUserName>

          <InputMessage
            placeholder="Mensagem"
            value={this.props.MessageInput}
            onChange={this.props.onChangeMessage}
            onKeyDown={this.props.pressEnter}
          ></InputMessage>

          <Button onClick={this.props.sendMessage}>
            <strong>Enviar</strong>
          </Button>

        </DivInput>

      </DivMainInput>
    );
  }
}

export default Inputs;
