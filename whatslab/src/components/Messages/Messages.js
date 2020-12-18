import React from 'react'
import styled from 'styled-components'
import Inputs from '../Input/Inputs'

const ContainerMessage = styled.div`
    height: 90vh;
    display:flex;
    width: 800px;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    border: 1px solid #000;
    margin: 2% auto 0 auto;
`

const MessagesP = styled.p`
    display: flex;
    text-align: left;
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
                <MessagesP>{message.user}: {message.message}</MessagesP>
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