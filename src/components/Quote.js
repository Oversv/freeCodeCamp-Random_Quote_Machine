import React from 'react'

class Quote extends React.Component{

    render(){
        return(           
            <div>            
                <p className="lead quote-tex" id="text">"{this.props.quote}"</p>
                <p id="author">- {this.props.author} -</p>                
            </div>    
        )
    }
}

export default Quote;       