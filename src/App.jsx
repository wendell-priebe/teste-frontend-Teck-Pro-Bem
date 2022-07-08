import Modal from 'react-modal'
import { useState } from 'react';

import ShareImagemProvider from './hooks/useShareImagem'

import Card from './components/Card/index';
import ModalShare from './components/ModalShare';

import GlobalStyles from '../src/styles/global.js';
import {Container} from '../src/styles/styles.js';

Modal.setAppElement('#root');

function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  function openShareModal(){
    setIsShareModalOpen(true)
  }
  function closeShareModal(){
    setIsShareModalOpen(false)
  }

  return (
    <div className="App">
      <ShareImagemProvider>
        <GlobalStyles />
        
        <Container>

          <img src="https://techprobem.com.br/wp-content/uploads/2021/10/tpb2logo-8-1024x511.png" />

          <Card name={"cat"} url={`http://placekitten.com/200/300`} openShareModal={openShareModal} />
          <Card name={'dog'} url={`https://place.dog/200/300`} openShareModal={openShareModal} />
          
          <ModalShare isOpen={ isShareModalOpen } onRequestClose={ closeShareModal } />

        </Container>
      </ShareImagemProvider>
    </div>
  )
}

export default App;
