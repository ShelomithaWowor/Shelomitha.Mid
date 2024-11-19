import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Main from './component/Main';
import Contact from './component/Contact';

const App= () => {
  return (
    <div>
      <About />
      <Main />
  <footer id="contact">
    <Contact />
  </footer>
</div>


  );
}

export default App;
