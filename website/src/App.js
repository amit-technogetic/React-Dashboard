
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactComp from './components/ReactComp';
import NodeComp from './components/NodeComp';
import TypescriptComp from './components/TypescriptComp';
import JavascriptComp from './components/JavascriptComp';
import MaterialComp from './components/MaterialComp';
import NestComp from './components/NestComp';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path="/" element={<h1>In Home Component</h1>} />
      <Route path="/react" element={<ReactComp/>} />
      <Route path="/nodejs" element={<NodeComp/>} />
      <Route path="/typescript" element={<TypescriptComp/>} />
      <Route path="/javascript" element={<JavascriptComp/>} />
      <Route path="/materialui" element={<MaterialComp/>} />
      <Route path="/nestjs" element={<NestComp/>} />
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
