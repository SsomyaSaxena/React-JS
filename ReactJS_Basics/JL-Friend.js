class Friend extends React.Component {
  render() {
    const {name,hobbies} = this.props;
    // const li = {hobbies.map(h => <li>{h}</li>)}; 'h' indicates each hobby or an array item. Lopping mechanism for react.
    // <ul> {lis} </ul>
    return (
      <div>
       <h1>{name}</h1>
       <ul>
        {hobbies.map(h => <li>{h}</li>)}
       </ul>
      </div>
    )
  }
}