import './App.css';
// import Friends from './Components/Friends/Friends';
// import Test from './Components/Test/Test';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar 
        title="Text Utils" />
      {/* <Navbar /> */}
        <div className="container">
          <TextForm 
            heading="Enter Text To convert to needed Format"/>
        </div>
    </>
  );
}

export default App;
