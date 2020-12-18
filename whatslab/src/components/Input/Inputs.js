import React from 'react'
import styled from'styled-components'

const DivInput = styled.div`
    display: flex;
    justify-content:center;
    padding: 5px;
`
const InputUserName = styled.input`
    margin-right:8px;
    width:35%;
`
const InputMessage = styled.input`
    margin-right:10px;
    width: 100%;
`


export class Inputs extends React.Component {
    state = {
        valueUser: '',
        valueMessage: ''
    }


onChangeUser = (event) => {
    this.setState ({valueUser: event.target.value})
}

onChangeMessage = (event) => {
    this.setState ({valueMessage: event.target.value})
}

render () {
    return (
        <DivInput>
            <InputUserName placeholder='Usuário' value={this.state.valueUser} onChange={this.onChangeUser}></InputUserName>
            <InputMessage placeholder='Mensagem' value={this.state.valueMessage} onChange={this.onChangeMessage}></InputMessage>
            <button>Enviar</button>
        </DivInput>
    )
}
}

export default Inputs