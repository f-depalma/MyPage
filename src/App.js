import './App.css';
import Header from './component/Header';
import Content from './component/Content';

function App() {
  return (
    <div className='text-gray-200'>
      <Header />
      <Content />
      <div className='w-screen fixed bottom-0 left-0 h-16  sm:h-24 flex justify-center' style={{backgroundColor: "#F4D546"}}>
        <img src="work-in-progress.jpeg" className='w-96 object-cover'/>
      </div>
    </div>
  );
}

export default App;
