class Machine extends React.Component {
  render() {
    // const {s1,s2,s3} = this.props;  FASTER ASSIGNMENTS
    // const winner = (s1===s2) && (s2===s3); Will return a True/False value (COLT'S LOGIC)
    let value;
    const styling = {fontSize:'20px' , color: 'purple'}
    if (this.props.s1 === this.props.s2)
     {
       if(this.props.s2 === this.props.s3)
       {
         value = "YOU WIN!"
       }
     }
     else
     {
       value = "YOU LOOSE"
     }
    return (
      <div className="Machine">
       <h4 style={styling}>{this.props.s1} {this.props.s2} {this.props.s3}</h4>
       <h3 className = {value==="YOU WIN!"? 'win' : 'lose'}>{value}</h3>
      </div>
    );  
  }
}