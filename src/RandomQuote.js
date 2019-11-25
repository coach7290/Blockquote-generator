import React from 'react';
import './App.css';

// i've been using axios to handle easily the get requests
const axios = require("axios");



// Single component builted with the class system
class RandomQuote extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        quote: '', //for quote
        author: '' //for author
     }
// binding of the method to the constructor
     this.getQuote = this.getQuote.bind(this);
     this.getNewQuote = this.getNewQuote.bind(this)
     
  }

  componentDidMount() {
    this.getQuote()
  }

  getQuote() {

    // get the url from this api call to an array of famous quotess
    
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

    axios.get(url)
       .then(res => {
         //store the data
         let data = res.data.quotes;
         let quoteNumber = Math.floor(Math.random()*data.length);
         let randomQuote = data[quoteNumber];
         console.log(randomQuote);
         
         this.setState( {
           quote : randomQuote['quote'],
           author: randomQuote['author']
         })
         
       }
       
       )}

       getNewQuote() {
         this.getQuote();
         
       }

       changeBackColo() {
        let colors = ["red", "yellow", "blue", "green"]
        let randNumber= Math.floor(Math.random()*colors.length);
                 let backColor = {
                  backgroundColor: colors[randNumber]
                }
       }

  render() {
    // backGround colors are changing according to the click function
    let colors = ["red", "yellow", "blue", "green"]
let randNumber= Math.floor(Math.random()*colors.length);
         let backColor = {
          backgroundColor: colors[randNumber]
        }
    
     return (
        <div id='wrapper'>
          <div id="quotebox">
           <blockquote className='quote'>"{this.state.quote}"</blockquote>
           <p>{this.state.author}</p>
           <button onClick={this.getNewQuote} >Get my daily quote</button>
           <a></a>
           </div>
        </div>
     )
  }
}

export default RandomQuote


