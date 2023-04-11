import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/Home';
import Header from './component/Header'
import ContactMe from './component/contact-me/ContactMe';
import Others from './component/others/Others';
import MyProjects from './component/my-projects/MyProjects';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact-me" element={<ContactMe />} />
          <Route path="others" element={<Others />} />
          <Route path="my-projects" element={<MyProjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
