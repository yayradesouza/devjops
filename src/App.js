// import logo from './logo.svg';
// import './App.css';
import JobComp from './components/JobComp.js';
import './components/Styling.css';
import {Jobs} from './data/data.js';
import { Menu } from 'react-feather';

function App() {
  return (
    <div className="App">
      <header className="Banner">
        <div className='devjobs'>devjobs</div>
        <div className="Banner_img"><Menu color='white'/></div>
      </header>
      <div className='Job'>
        {/* Jobs.map(Job => (<Jobs key={Job.id} {...Job}/>)) */}
        {Jobs.map((job) => (<JobComp key={job.id} {...job}/>))}
      </div>
    </div>
  );
}

export default App;
