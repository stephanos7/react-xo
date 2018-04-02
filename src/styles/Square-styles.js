import configStyles from "../styles/config-styles";

const symbol = {
  justifySelf: "center",
  alignSelf: "center",
  fontSize: 94,
  fontWeight: 900
}
export default {
  root: {
    display: "grid",
    backgroundColor: configStyles.squareColor,
    opacity: 0.9,
    boxShadow: "-5px 5px 2px 0px rgba(42,26,31,1)",
    ":hover":{
      backgroundColor: configStyles.hoverColor
    }
  },
  symbol
}