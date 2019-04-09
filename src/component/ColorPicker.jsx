import { CustomPicker } from "react-color";
import {
  Saturation,
  Hue,
  EditableInput,
  Checkboard,
  Alpha
} from "react-color/lib/components/common";
// import {} from "react-color/lib/components/circle";
import React from "react";

const ColorPicker = props => {
  let inputStyle = {
    input: {
      border: "none",
      borderBottom: "1px solid rgba(216, 216, 216, 0.38)",
      padding: "8px 5px 2px 0",
      margin: "0",
      width: "80%",
      background: "0 0",
      color: "#c0c0c1"
    },
    label: {
      fontSize: "12px",
      color: "#999"
    }
  };
  const paintColorSwatch = () => {
    let colorSwatchMarkup = [];
    props.colorList.map(value => {
      colorSwatchMarkup.push(
        <div
          style={{
            backgroundColor: value
          }}
          className="color-swatch-div"
          onClick={() => props.onApplyColor(value)}
        />
      );
    });
    return <React.Fragment>{colorSwatchMarkup}</React.Fragment>;
  };
  return (
    <div className="color-picker">
      <div className="header-div">Select Color</div>
      <div className="wrapper-divs">
        <div className="left-wrapper">
          <div className="color-list-div">
            <div className="my-color-header">My Colors</div>
            {paintColorSwatch()}
          </div>
          <div className="pos-rel" style={{ marginTop: "20px" }}>
            <div className="sub-header">
              <div>Transparency</div>
              <input
                value={(1 - props.color.a) * 10}
                min={0}
                max={10}
                step={0.1}
                precision={2}
                type="number"
                className="trans-div-input"
                // style={{false}}
                // onChange={props.onApplyColor}
              />
            </div>
            <div className="alpha-wrapper">
              <Alpha
                {...props}
                pointer={CustomPointer}
                onChange={props.onChange}
              />
            </div>
          </div>
        </div>
        <div className="right-wrapper">
          <div className="sat-hue-container">
            <div className="st-wrapper">
              <Saturation
                {...props}
                pointer={CustomPointer}
                onChange={props.onChange}
              />
            </div>
            <div className="hue-wrapper">
              <Hue
                {...props}
                direction="vertical"
                pointer={CustomPointer}
                onChange={props.onChange}
              />
            </div>
          </div>
          <div className="input-check-cont">
            <div className="input-wrapper">
              <EditableInput
                label={"Selected Color"}
                value={props.hex}
                onChange={props.onChange}
                style={inputStyle}
              />
            </div>
            <div className="check-wrapper">
              <div
                style={{
                  zIndex: 2,
                  backgroundColor: `rgba(${props.color.r},${props.color.g},${
                    props.color.b
                  },${props.color.a})`,
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0"
                }}
              />
              <Checkboard white="#fff" grey="#333" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-div">
        <button className="apply-custom-btn" onClick={props.onApplyColor}>
          Apply
        </button>
      </div>
    </div>
  );
};

const CustomPointer = props => {
  return <div className="color-picker-pointer" />;
};

export default CustomPicker(ColorPicker);
