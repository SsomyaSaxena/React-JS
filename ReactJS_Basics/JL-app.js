class App extends React.Component {
  render() {
    return (
      <div>
       <Friend name="Harry" hobbies={["Sing" , "Dance" , "Perform"]} />
       <Friend name="Louis" hobbies={["Sing" , "Care" , "Love"]} />
      </div>
    )
  }
}

ReactDOM.render(<App /> , document.getElementById('root'));