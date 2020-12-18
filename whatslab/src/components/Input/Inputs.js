import React from 'react'
import styled from'styled-components'

const DivInput = styled.div`
    display: flex;
    justify-content:center;
    width: 90%;
    margin-right: 3%;
    margin-bottom: 2%;
    margin-left: 5%;
`
const InputUserName = styled.input`
    margin-right:8px;
    width:15%;
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
    background-color: #EFEFEF;
    font-size: large;    
`

export class Inputs extends React.Component {

render () {
    return (
        <DivInput>
            <InputUserName placeholder='Usuário' value={this.props.UserInput} onChange={this.props.onChangeUser}></InputUserName>
            <InputMessage placeholder='Mensagem' value={this.props.MessageInput} onChange={this.props.onChangeMessage}></InputMessage>
            <Button onClick={this.props.sendMessage}><strong>Enviar</strong></Button>
        </DivInput>
    )
}
}

export default Inputs