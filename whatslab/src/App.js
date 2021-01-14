import './App.css';
import React from 'react';
import Messages from './components/Messages/Messages'
import Inputs from './components/Input/Inputs'
import styled from 'styled-components'

      const MainBackground = styled.section`
        width: 100%;
        height: 100vh;
      `

      const DivSection = styled.div`
        background-color: #00bfa5;
        height: 150px;
      `

      const WppWindowMain = styled.div`
        display: flex;
        justify-content: center;
        position: relative;
        top: -50px;
        max-width: max;
        height: 80vh;
      `
      const MainMessage = styled.div`
        background-color: #ededed;
        width: 800px;
      `


function App() {
  return (
      <MainBackground>
        <DivSection>
        </DivSection>
        <WppWindowMain>
          <Messages />
        </WppWindowMain>
      </MainBackground>
  );
}

export default App;
