import chroma from 'chroma-js';

export default {
    colorBox: {
        width: "20%",
        height: props => (props.showingFullPalette) ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.2px",
        "&:hover button": {
            opacity: "1"
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.12 ? "white" : "black"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.68 ? "rgba(0,0,0,0.75)" : "white",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        backgroundColor: "rgba(255,255,255,0.3)",
        width: "60px",
        height: "30px",
        textAlign: "center",
        textTransform: "uppercase",
        lineHeight: "30px"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.68 ? "rgba(0,0,0,0.75)" : "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        backgroundColor: "rgba(255,255,255,0.3)",
        outline: "none",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: "0"
    },
    boxContent: {
        width: "100%",
        position: "absolute",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)"
    },
    showOverlay: {
        opacity: "1",
        zIndex: "10",
        transform: "scale(50)",
        position: "absolute"
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "3rem",
        transform: "scale(0.1)",
        color: "white",
        opacity: "0",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
            // [sizes.down("xs")]: {
            //   fontSize: "6rem"
            // }
          },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100"
          }
    },
    showMsg: {
        opacity: "1",
        zIndex: "25",
        transform: "scale(1)",
        transition: "all 0.3s ease-in-out",
        transitionDelay: "0.4s"
    }
};