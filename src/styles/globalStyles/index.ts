import { createGlobalStyle } from "styled-components";

import { styles } from "styles/values";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${styles.font.PRIMARY};
    margin: 0;
    color: ${styles.color.shade.DARK};
    background-color: ${styles.color.shade.WHITEY};
  }
  * {
    box-sizing: border-box;
  }
  .carousel .thumbs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding:0;
  }
`;

export default GlobalStyles;
