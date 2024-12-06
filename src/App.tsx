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
          It's never been a better time to become a <br />
          Laravel developer.
        </span>
      </main>

      <section>
        <ul>
          <span>console&gt; </span>
          <span>console&gt; </span>
          <span>console&gt; </span>
          <span>console&gt; </span>
          <span>console&gt; </span>
        </ul>
        <p>
          git clone la<span>racode</span>
        </p>
      </section>
      <footer>footer</footer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
