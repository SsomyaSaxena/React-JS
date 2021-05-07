import React, {Component} from "react";
import Card from './Card.js';
import './Deck.css';
import axios from "axios";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {deck:null , drawn: []}
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}new/shuffle`);
        this.setState({deck : deck.data});
    }
    async getCard(){
        let deck_id = this.state.deck.deck_id;
        try
        {
        let cardURL = `${API_BASE_URL}${deck_id}/draw/`;
        let cardRes = await axios.get(cardURL);
        if(!cardRes.data.success) //Success can be false for invalid deck_id or something too but chances are very low.
        {
            throw new Error("No Card Remaining");
        }
        console.log(cardRes);
        let card = cardRes.data.cards[0];
        this.setState(st => ({
            drawn: [
                ...st.drawn , {
                    id: card.code , 
                    img: card.image , 
                    name: `${card.value} of ${card.suit}`
                }
            ]
        }));
    } catch(err) {
        alert(err)
    }
    }
render() {
    const cards = this.state.drawn.map(c => (
        <Card key={c.id} name={c.name} image={c.img} />
    ))
    return (
     <div>
         <h1 className="Deck-title">CARD DEALER</h1>
         <h2 className="Deck-Subtitle">A Basic React Demo</h2>
         <button className="Deck-btn" onClick={this.getCard}>Get A Card!</button>
         <div className="Deck-cardarea">{cards}</div>
     </div>
    )
}
}

export default Deck;