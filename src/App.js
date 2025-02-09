import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Head from './common/Head';
import Down from './common/Down';
import { useState , useEffect } from 'react';

function App(props) {
  
  const[data, setdata] =useState(10)
  console.log(data);

  const[name,setname]=useState("hello")
  console.log(name);
  
  const handle_Increment = () => {
    setdata(data + 1)
  }

  const handle_Decrement = () =>{
    setdata(data - 1)
  }

  const[input1,setinput1] = useState('');
  const[input2,setinput2] = useState('');

  

  const handledata = () =>{
    if(input1 === ''){
      toast.error("Please enter your email")
    }
    else if(input2 === ''){
      toast.error("please enter your password")
    }
    else if(input2.length<=7){
      toast.warning("pasword must have min 7 letters")
    }
    else{
      toast.success("successfully data saved")
      console.log(input1,input2);
      localStorage.setItem("email",input1)
      localStorage.setItem("password",input2)
      window.location.href='/dashboard'
    }
    
  }
  
  return (
    <div className="App">
      <ToastContainer />
      <Head/>
      <div className='row'>
      <div className='col-6'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      </div>
      <div className='col-6'>
        <h1>{name}{data}
          <button onClick={handle_Increment}>ADD</button>
          <button onClick={handle_Decrement}>Sub</button>
        </h1>
        <button>Go to home</button><br/><br/><br/>
        <label>Email</label>
        <input 
        type='text'
        placeholder='email'
        value={input1} 
        onChange={(e)=>setinput1(e.target.value)}/>
        <label>Password</label>
        <input 
        type='Password' 
        placeholder='password'
        value={input2}
        onChange={(e)=>setinput2(e.target.value)}
         /><br/><br/>
         <button onClick={handledata}>SUBMIT</button><br/><br/>
         <label>{input1}</label>
        <Link to="/home">
        </Link>
      </div>
      </div>
      <Down/>
    </div>
  );
}

export default App;