
import "bootstrap/dist/css/bootstrap.css";
import {useState, useEffect} from 'react';

function App() {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");

  //get quotes on mount
  //let rand = 

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[Math.floor(Math.random() * quotes.length)]);
      });

      //console.log(quote?.author);
  }, []); //empty means on mount

  //set new random quote
  const setNewQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  //return
  return (
     <div className='bg-info'>
       <h1 className='text-light bg-dark text-center py-2'>Random Quotes Generator</h1>

       <button onClick={setNewQuote}
       className="btn btn-danger border border-light">
       New Quote
       </button>

       <article className='text-light border border-light p-3 rounded bg-secondary'>
       <p><q>{quote?.text}</q></p>
       <p><cite>- {quote.author? quote.author: "Unknown"}</cite></p>
       </article>

      <footer 
      className="text-center h4 border-top border-light py-2 bg-dark text-light">
      Developed By Yamin
      </footer>

    </div>
  );
   
}

export default App
