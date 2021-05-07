// <!DOCTYPE html>
// <head>
// <meta charset="utf-8">
// <meta http-equiv="X-UA-Compatible" content="IE=edge">
// <title>First Component</title>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// </head>
// <body>
// <div id="root"></div>
// <script src="unpkg.com/react/umd/react.development.js"></script>
// <script src="unpkg.com/react-dom/umd/react-dom.development.js"></script>
// <script src="https://unpkg.com/babel-standalone"></script>
// <script src="index.js" type="text/jsx"></script>  
// </body>
// </html>

// ========= CLASS COMPONENT =========
// class Hello extends React.Component {
// 	render() {
//     return (
//     <div>
//      <h1>HELLO EVERYONE!</h1> 
//      <h1>HELLO EVERYONE!</h1>
//      <h1>HELLO EVERYONE!</h1>
//      <h1>HELLO EVERYONE!</h1>
//     </div>  
//     );
// 	}
// }

// ========= FUNCTION COMPONENT =========
function Hello(){
  return (<div>
  <h1>HELLO EVERYONE!</h1> 
  <h1>HELLO EVERYONE!</h1>
  <h1>HELLO EVERYONE!</h1>
  <h1>HELLO EVERYONE!</h1>
 </div>);
}

ReactDOM.render(<Hello />, document.getElementById('root'));
