class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
        to="Ringo" 
        from="Harry"
        num={5}
        array={[1,2,3,4,5]}
        isFunny = {true} // or isFunny only (it has a default value of TRUE)
        img = "https://cdn.shopify.com/s/files/1/0986/5790/products/HelloDecal-PRINT_600x.png?v=1571439048"
        />
        <Hello 
        to="Camilla" 
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55YY7tme7RwAyJ94bZ2nd5CGroTCDaLHaoUILrw8k8fkTUZyA&s"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))