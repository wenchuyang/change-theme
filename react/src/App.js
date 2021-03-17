import React from "react";
import "./styles.css";

const themeContext = React.createContext();

function Rainbow(props) {
  return <div className={`rainbow ${props.theme}`}></div>;
}
function Btns(props) {
  return (
    <div className="btns">
      <button className="reset" onClick={() => props.setTheme("reset")}>
        RESET
      </button>
      <button className="red" onClick={() => props.setTheme("red")}>
        RED
      </button>
      <button className="blue" onClick={() => props.setTheme("blue")}>
        BLUE
      </button>
      <button className="orange" onClick={() => props.setTheme("orange")}>
        ORANGE
      </button>
    </div>
  );
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: {
        val: "",
        setTheme: (theme) => {
          this.setState({
            theme: {
              ...this.state.theme,
              val: theme
            }
          });
        }
      }
    };
  }
  render() {
    return (
      <themeContext.Provider value={this.state.theme}>
        <div className="wrapper">
          <themeContext.Consumer>
            {(theme) => <Rainbow theme={theme.val} />}
          </themeContext.Consumer>
          <themeContext.Consumer>
            {(theme) => <Btns setTheme={theme.setTheme} />}
          </themeContext.Consumer>
        </div>
      </themeContext.Provider>
    );
  }
}

export default App;
