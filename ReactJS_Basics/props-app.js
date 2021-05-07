class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Harry" />
        <Hello to="Camilla" from="Shawn" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))