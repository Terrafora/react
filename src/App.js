import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('dev')
  const showEmployess = true;
  return (
    <div className="App ">
      {showEmployess ?  
        <div>
          <input type="text" onChange={e => {
            console.log(e.target.value)
            setRole(e.target.value)
          }}/>
          <div className="flex flex-wrap">
            <Employee name ="Charlotte" role="intern"/>
            <Employee name ="Abby" role={role}/>
            <Employee name="Jenny"/>
          </div>
        </div>
        :
          <p>You cannot see the employees</p>
          }
        <header className="App-header">
        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
      </header>
    </div>
  );
}

export default App;
