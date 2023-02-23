import './App.css';
import imgDisplay from './assets/image1.png';

function App() {
  return (
    <div className="App">
      <h1 className="title">Content</h1>
      <h4>Only this line is being upadated for git-hub purpose</h4>
        <ul className="un_list">
          <li>JSX?</li>
          <li>Components</li>
          <li>Props</li>
          <li>State</li>
          <li>Lifecycle Methods</li>
          <li>Event Handling</li>
          <li>Rendering</li>
          <li>Lists</li>
          <li>Forms</li>
          <li>Todo Management Application</li>
        </ul>
        <a className='ank'><img src= {imgDisplay} className="dispImage"></img></a>
    </div>
  );
}
export default App;
