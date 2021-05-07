import React, {Component} from "react";
import axios from 'axios';
import "./ZenQoute.css";

class ZenQuote extends Component {
    constructor(props)
    {
        super(props);
        this.state = { quote : "" , isLoaded: false};
    }
 componentDidMount() {
     axios.get("https://api.github.com/zen").then(response => {
        setTimeout (
            function()
            {
            this.setState({ quote : response.data , isLoaded : true});
            console.log(response.data);
            }.bind(this),3000);   
        });
   }
 render() {
     return(
         <div>
             {this.state.isLoaded ? (
             <div>
                <h1>Always Remember...</h1>
                <p>{this.state.quote}</p>
             </div> ) : (
                <div className="loader"></div>)
             }  
         </div>
   );
   }
}

export default ZenQuote;