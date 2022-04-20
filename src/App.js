import logo from './logo.svg';
// import './App.css';
// untuk menghubungkan redux nya 
import {Provider} from "react-redux"
import store from "./store"
import Todos from './components/Todos';
import Form from './components/Form';


function App() {
  return (
    <Provider store={store}>
      <div className="App" style={body}>
        
          <img src={logo} className="" alt="logo" style={img} />
          <p>
            Todos redux
          </p>
          <Todos />
          <div className='form-input'>
            <Form/>
          </div>

       
      </div>
    </Provider>
  );
}

export default App;

const img = {
  width: "90px"
}

const body = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  
}
