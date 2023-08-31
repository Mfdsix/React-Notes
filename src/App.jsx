import React from "react";
import Router from "./router";

import { ThemeProvider } from './data/context/ThemeContext';
import { LangProvider } from './data/context/LangContext';

const LOCAL_THEME_KEY = "LOCAL_THEME";
const LOCAL_LANG_KEY = "LOCAL_LANG";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      themeContext: {
        theme: localStorage.getItem(LOCAL_THEME_KEY) || "light",
        toggleTheme: () => {
          this.setState((prevState) => {
            const newTheme =
              prevState.themeContext.theme === "light" ? "dark" : "light";
            localStorage.setItem(LOCAL_THEME_KEY, newTheme);
            return {
              themeContext: {
                ...prevState.themeContext,
                theme: newTheme,
              },
            };
          });
        },
      },
      langContext: {
        lang: localStorage.getItem(LOCAL_LANG_KEY) || "id",
        toggleLang: (newLang) => {
          this.setState(() => {
            localStorage.setItem(LOCAL_LANG_KEY, newLang);
            return {
              langContext: {
                ...prevState.langContext,
                lang: newLang,
              },
            };
          });
        },
      },
    };
  }

  async componentDidMount(){
    this.setState(() => {
        return {
            initializing: false
        }
    })
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    return (
      <ThemeProvider value={this.state.themeContext}>
        <LangProvider value={this.state.langContext}>
          <Router />
        </LangProvider>
      </ThemeProvider>
    );
  }
}

export default App;
