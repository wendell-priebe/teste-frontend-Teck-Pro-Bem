import Card from './components/Card/index';

import GlobalStyles from '../src/styles/global.js';
import {Container} from '../src/styles/styles.js';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      
      <Container>
        <img src="https://techprobem.com.br/wp-content/uploads/2021/10/tpb2logo-8-1024x511.png" />
        {/* <img src="https://techprobem.com.br/wp-content/uploads/2021/10/logo-tpb.jpg" /> */}
        <Card name={"cat"} url={`http://placekitten.com/200/300`}/>
        <Card name={'dog'} url={`https://place.dog/200/300`}/>
      </Container>
      
    </div>
  )
}

export default App;
