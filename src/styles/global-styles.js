import configStyles from "./config-styles";

export default {
  "*":{
    boxSizing: "border-box"
  },
  body: {
    font: "14px Century Gothic, Futura, sans-serif",
    background: `linear-gradient(to right, ${configStyles.gradientColor1},
                                           ${configStyles.gradientColor2})`
  }
}