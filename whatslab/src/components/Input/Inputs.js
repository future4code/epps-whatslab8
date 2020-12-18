import React from 'react'
import styled from'styled-components'

const DivInput = styled.div`
    display: flex;
    justify-content:center;
    padding: 5px;
    width: 90%;
`
const InputUserName = styled.input`
    margin-right:8px;
    width:25%;
    margin-right: 5px;
    padding: 15px 20px;
`
const InputMessage = styled.input`
    margin-right:10px;
    width: 60%;
    padding: 15px 20px;
`
const Button = styled.button `
    width: 20%;
    
`


export class Inputs extends React.Component {

render () {
    return (
        <DivInput>
            <InputUserName placeholder='Usuário' value={this.props.UserInput} onChange={this.props.onChangeUser}></InputUserName>
            <InputMessage placeholder='Mensagem' value={this.props.MessageInput} onChange={this.props.onChangeMessage}></InputMessage>
            <Button onClick={this.props.sendMessage} >Enviar Mensagem</Button>
        </DivInput>
    )
}
}

export default Inputs