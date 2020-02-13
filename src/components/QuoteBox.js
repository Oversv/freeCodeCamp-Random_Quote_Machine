import React from 'react'
import Quote from './Quote'
import listQuotes from '../listQuotes'
import BarQuote from './BarQuote'

class QuoteBox extends React.Component{ 

    state={
        quote: '',
        author: ''
    }
    
    handleQuote = ()=>{
        const arrQuotes = listQuotes;           
        const rdn = Math.floor(Math.random() * (arrQuotes.length - 0)) + 0;

        this.setState({
            quote: arrQuotes[rdn].quote,
            author: arrQuotes[rdn].author,
        })            
    }

    handleTweet = ()=>{
        window.open(`https://twitter.com/intent/tweet?&text="${this.state.quote}. ${this.state.author}`);      
    }

    componentDidMount(){
        this.handleQuote()
    }

    render(){       
        return(
            <div className="center">                
                   
                <div className="jumbotron quote-box" id="quote-box">
                    <Quote quote={this.state.quote} author={this.state.author}/>  
                    <BarQuote newQuote={this.handleQuote} tweet={this.handleTweet}/>
                </div>                     
               
                <div>
                    <p className="m-2">by AMDV</p>
                </div> 

            </div>            
        )
    }
}

export default QuoteBox;