import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import MainComponent from './components/ImageComponent';
import ArticleComponent from './components/ArticleComponent';
import PicturesComponents from './components/PicturesComponents';
import ProsComponent from './components/ProsComponent';


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
        <PicturesComponents />
        <ProsComponent adoption="Adopting a Persian cat can be a wonderful decision for many reasons. Here are four to five compelling reasons why someone might choose to adopt a Persian cat:" first="Affectionate and Gentle Nature:" firstReason="Persian cats are known for their calm and gentle temperament. They are affectionate and love to be around their owners, making them great companions. Their sweet and loving disposition makes them perfect for families and individuals seeking a loyal and cuddly pet.
" second="Beautiful Appearance:" secondReason="Persian cats are renowned for their luxurious, long, and silky fur, as well as their distinctive flat faces and large, expressive eyes. Their striking appearance can be very appealing to cat enthusiasts who appreciate the aesthetic beauty of their pets." third="Low Energy Level:" thirdReason="Persian cats are generally less active compared to other breeds. They enjoy lounging around and are content with a more sedentary lifestyle. This makes them ideal for people living in apartments or those who prefer a quieter, more relaxed pet.
" fourth="Good with Children and Other Pets:" fourthReason="Due to their calm and patient nature, Persian cats typically get along well with children and other pets. They are tolerant and gentle, making them suitable for households with multiple animals or young kids."/>
      </header>
      
      
    </div>
    
  );
}

export default App;
