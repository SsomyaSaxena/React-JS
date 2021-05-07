class Hello extends React.Component {
  static defaultProps = {
    from : "Judy",
    num : 2
  }
  render() {
    let bangs = '!'.repeat(this.props.num);
    return (
      <div>
       <p>Hi {this.props.to} from {this.props.from} {bangs}</p>
       <img src={this.props.img} />
      </div>
    )  
  }
}
