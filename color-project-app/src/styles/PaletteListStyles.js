export default {
    root: {
      backgroundColor: "blue",
      height:"100vh",
      //OR 100%
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      // overflowY:"scroll",
      padding:"none"
    },
    container: {
      width:"50%",
      display:"flex",
      alignItems:"flex-start",
      flexDirection:"column",
      flexWrap:"wrap"
    },
    nav: {
      display:"flex",
      width:"100%",
      justifyContent:"space-between",
      color:"white",
      marginBottom: "10px",
      marginTop: "5px",
      alignItems: "center",
      "& a": {
        color: "white",
        textDecoration:"none"
      }
    },
    grid:{
      width:'33%'
    },
    palettes: {
      // boxSizing:"border-box",
      // width:"100%",
      // display:"grid",
      // gridTemplateColumns:"repeat(3,30%)",
      // gridGap:"5%"
    }
  };