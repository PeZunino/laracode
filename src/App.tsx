import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Button } from "./components/Button";
import cursorFill from "./assets/cursor-fill.svg";

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
        <Button h={3.5} w={11} text="join today" fontSize={1.5} />
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

        <div>
          <Button
            h={6}
            w={15}
            variant="secondary"
            text="EXECUTE;"
            fontSize={2}
          />
          <img src={cursorFill} />
        </div>
      </section>
      <footer>footer</footer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
