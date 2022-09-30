import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --background: #b0dcd9;
  --dark: #2e2d2d;
  --primary: #d39af6;
  --primary-light: #ebd5f8;
  --secondary: #67c998;
  --tertiary: #e4d360;
  --black: #000000;
  --white: #ffffff;
}


*,
*:before,
*:after {
    margin: 0;
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

/* code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
 */

`;

export default GlobalStyle;
