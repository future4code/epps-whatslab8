import React from 'react'
import styled from 'styled-components'
import Inputs from '../Input/Inputs'

const ContainerMessage = styled.div`
    height: 90vh;
    display:flex;
`

const MessagesP = styled.p``

export class Messages extends React.Component {
    state = {
        messages: [],

    }

    sendMessage = () => {
        const newMessage = {
            user: '',
            message: ''
        }

        const newMessageList = [...this.state.messages, newMessage]

        this.setState ({
            messages: newMessageList
        })
    }

    render (){
        const messageList = this.state.messages.map((message) => {
            return (
                <MessagesP>{message.user} - {message.message}</MessagesP>
            )            
        })

        return (
            <ContainerMessage>
                {messageList}
            </ContainerMessage>
        )

    }
}   

export default Messages