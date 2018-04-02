import configStyles from "../styles/config-styles";

export default {
  root: {
    backgroundColor: configStyles.squareColor,
    opacity: 0.9,
    boxShadow: "-5px 5px 2px 0px rgba(42,26,31,1)",
    fontSize: 94,
    fontWeight: 900,
    ":hover":{
      backgroundColor: configStyles.hoverColor
    }
  }
}