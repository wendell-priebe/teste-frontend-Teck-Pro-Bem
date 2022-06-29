import CatGenerator from './components/CatGenerator/index';
import DogGenerator from './components/DogGenerator/index';

import GlobalStyles from '../src/styles/global.js';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      
      <CatGenerator />
      <DogGenerator />
    </div>
  )
}

export default App;
