import React from 'react'

class BarQuotes extends React.Component{

    render(){
        return(           
            <div className="row">
                <div className="col-6">
                    <a href="twitter.com/intent/tweet" target="_blank" onClick={this.props.tweet} id="tweet-quote">
                        <i className="fab fa-twitter fa-2x text-primary cursor"></i>
                    </a>
                </div>
                <div className="col-6">
                    <button type="button" className="btn btn-primary" onClick={this.props.newQuote} id="new-quote">New Quote</button>
                </div>           
            </div>    
        )
    }
}

export default BarQuotes;