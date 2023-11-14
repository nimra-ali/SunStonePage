// import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar'
import ContentBox from './Component/ContentBox';



function App() {
  return (
    <div className="App">
 <Navbar/>
 <div style={{display: 'flex'}}>
  <div >
    <Sidebar/>

  </div>
  <div>
    <ContentBox/>
  </div>
 </div>
   
    </div>  
  );
}

export default App;
