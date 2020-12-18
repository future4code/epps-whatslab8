import React from 'react'
import styled from 'styled-components'
import Inputs from '../Input/Inputs'

const ContainerMessage = styled.div`
    display:flex;
    width: 600px;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    background: #ededed;
    border-radius: 3px;
    box-shadow: 0 17px 50px 0 rgba(0,0,0,.19), 0 12px 15px 0 rgba(0,0,0,.24);

`

const MessagesP = styled.p`
    display: flex;
    text-align: left;
    margin-left: 5%;
    margin-bottom: 5%;
`

export class Messages extends React.Component {
    state = {
        messages: [],
        UserInput: '',
        MessageInput: ''
    }

    onChangeUser = (event) => {
        this.setState ({UserInput: event.target.value})
    }
    
    onChangeMessage = (event) => {
        this.setState ({MessageInput: event.target.value})
    }

    sendMessage = () => {
        const newMessage = {
            user: this.state.UserInput,
            message: this.state.MessageInput
        }

        const newMessageList = [...this.state.messages, newMessage]

        this.setState ({
            messages: newMessageList,
            MessageInput: ''
        })
    }

    render (){
        const messageList = this.state.messages.map((message) => {
            return (
                <MessagesP><strong>{message.user}:</strong> {message.message}</MessagesP>
            )            
        })

        return (
            <ContainerMessage>
                {messageList}
                <Inputs
                    UserInput={this.state.UserInput}
                    onChangeUser={this.onChangeUser}

                    MessageInput={this.state.MessageInput}
                    onChangeMessage={this.onChangeMessage}

                    sendMessage = {this.sendMessage}
                />
            </ContainerMessage>
        )

    }
}   

export default Messages