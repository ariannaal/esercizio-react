import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import MainComponent from './components/ImageComponent';
import ArticleComponent from './components/ArticleComponent';
import PicturesComponents from './components/PicturesComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <MainComponent />
        <ButtonComponent text="Click here" reason="to find out more about Persian cats" />
        <ArticleComponent info="Persian cats are a long-haired breed known for their elegant appearance and gentle temperament. They have a distinctive round face with a short muzzle, large expressive eyes, and a plush, luxurious coat that comes in various colors and patterns. Originating from Persia (modern-day Iran), these cats have been cherished as pets for centuries. Persians are typically calm and affectionate, preferring a serene environment and bonding closely with their owners. Due to their long fur, they require regular grooming to prevent matting and maintain their coat's beauty. Their docile and sweet nature makes them excellent companions.
" breed="About the breed"/>
        <PicturesComponents/>
      </header>
      
      
    </div>
    
  );
}

export default App;
