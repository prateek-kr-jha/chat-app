import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">

      {/* <Button colorScheme='blue'>Button</Button> */}
      <Route path="/" component={Homepage} exact/>
      <Route path="/chats" component={ChatPage} /> 
    </div>
  );
}

export default App;
