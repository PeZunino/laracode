import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Button } from "./components/Button";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <nav>
        <p>
          lara<span>code</span>
        </p>
        <ul>
          <a href="#">home</a>
          <a href="#">curriculum</a>
          <a href="#">faq</a>
          <a href="#">contact</a>
        </ul>
        <Button />
      </nav>

      <main>
        <span>
          A Laravel <br />
          Learning Platform
        </span>
        <span>
          It’s never been a better time to become a <br />
          Laravel developer.
        </span>
      </main>

      <section>console</section>
      <footer>footer</footer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
