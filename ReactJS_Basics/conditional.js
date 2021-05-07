function getnum()
{
  return Math.floor(Math.random()*10)+1;
}

class Number extends React.Component {
  render() {
   const num = getnum();
      let msg;
      if (num === 7) {
        msg =
          <div>
            <h2>CONGRATS YOU WIN!</h2>
            <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
          </div>
      } else {
        msg = <p>Sorry You Lose!</p>
      }
      return (
        <div>
          <h1>Your number is: {num} </h1>
          {msg}
        </div>
      );
  }
}

ReactDOM.render(<Number /> , document.getElementById('root'));

