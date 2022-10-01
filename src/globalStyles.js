import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


:root {
  
  --background: #272d5d;
  --primary: #42b6c8;
  --primary-light: #d2f0fa;
  --secondary: #97d94d;
  --tertiary: #faf02e;
  --dark: #2e2d2d;
  --white: #ffffff;

  --headline: 'Nanum Brush Script';
  --copy: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

*,
*:before,
*:after {
    margin: 0;
    box-sizing: border-box;
}

.App {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  display: grid;
  height: 100vh;
  grid-template-rows: 60px 1fr 60px;
  text-align: center;
  background-color: var(--primary-light);

}

`;

export default GlobalStyle;
