import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import reactCSS from "reactcss";
import CustomPicker from "./component/ColorPicker";

const hex2rgba = hex => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return {
    r,
    g,
    b,
    a: 1
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: {
        r: "241",
        g: "112",
        b: "19",
        a: "1"
      }
    };
    this.colorList = [
      "#CA2121",
      "#7E1515",
      "#D5F200",
      "#F9F9F9",
      "#B0F8FD",
      "#FFFFFF",
      "#FECF9C",
      "#E3A2FC",
      "#FDF39B",
      "#A3FFAE",
      "#C9C9C9",
      "#FFBABD",
      "#B4FDD1",
      "#B6B6B6",
      "#C1D4FD",
      "#FE83A8",
      "#E64C3D",
      "#E67D22",
      "#EFC20D",
      "#8BC249",
      "#2DCC70",
      "#19BB9A",
      "#D62941",
      "#673BB7"
      // "#E81B61"
    ];
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    console.log(color);
    this.setState({ color: color.rgb });
  };

  onApplyColor = value => {
    value
      ? this.handleChange({
          rgb: hex2rgba(value)
        })
      : this.handleClose();
    console.log("Apply");
  };

  render() {
    const styles = reactCSS({
      default: {
        backgroundStyle: {
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${
            this.state.color.b
          }, ${this.state.color.a})`
        },
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${
            this.state.color.b
          }, ${this.state.color.a})`
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer"
        },
        popover: {
          position: "absolute",
          zIndex: "2"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });

    return (
      <div className="App" style={styles.backgroundStyle}>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            {/* <div style={styles.cover} onClick={this.handleClose} /> */}
            <CustomPicker
              color={this.state.color}
              onChange={this.handleChange}
              onApplyColor={this.onApplyColor}
              colorList={this.colorList}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
