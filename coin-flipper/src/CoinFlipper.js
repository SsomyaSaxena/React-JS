import React , {Component} from 'react';
import Coin from './Coin.js';
import './Coin.css'
import {choice} from './helpers.js';

class CoinFlipper extends Component {
  static defaultProps = {
    coins : [
      { side: "heads" , imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"
      },
      { side:"tails" , imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=3667e7e8d058e3b51bebf14a3b878e847c7ed56a-1597683099-0-AfzW83ox1uWariX8-GmoA0FKnhgfudZlMhPQHelIG5On1km-RrFWTjOFyHH3EdE33m0byL8JuL9ePs52qrCH_0JMcMrloz7QcfGbq9omeQ9B9uctE5kh2K8dQdtvARp-vmA3GDp9gbA_bvmxsDzVHVha9Tai9bAgXqJWpQ4ie3flESFGlBYqL9J0oLAKDB3ABL5RTzRs8avvvfhVOGlDbOz40Xvy36RYR-f9YXRUV5IE2w939iOqN7AAg5kPHRCeuMMPRarjDs7KctKf7g4-SMKkruMm_F8dYQ_Ysspgu2rgg3zzFCV-PE2SDhfUiCxRzw"
      }
    ]
  }
  constructor(props)
  {
    super(props);
    this.state = {
      curCoin : null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0 
    }
    this.handleClick = this.handleClick.bind(this);
  }
  flipcoin(){
    let newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        curCoin : newCoin,
        nFlips : st.nFlips + 1,
        nHeads : st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails : st.nTails + (newCoin.side === 'tails' ? 1 : 0)
      }
    })
  }
  handleClick(){
    this.flipcoin();
  }
  render() {
    return (
      <div>
       <h1>LET'S FLIP A COIN!</h1>
       {this.state.curCoin && <Coin info={this.state.curCoin} />}
       <div><button className="Button" onClick={this.handleClick}> Flip Coin </button></div>
       <p>Out of <strong>{this.state.nFlips} flips</strong> , there have been <strong>{this.state.nHeads}  heads</strong> and <strong>{this.state.nTails} tails</strong></p>
      </div>
    )
  }
}

export default CoinFlipper;