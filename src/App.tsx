import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Button } from "./components/Button";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <nav>
        <span>laracode</span>
        <ul>
          <a href="">home</a>
          <a href="">curriculum</a>
          <a href="">faq</a>
          <a href="">contact</a>
        </ul>
        <Button />
      </nav>
      <main>
        <span>A laravel learning platform</span>
      </main>
      <section>console</section>
      <footer>footer</footer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
