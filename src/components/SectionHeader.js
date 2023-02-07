import React from "react";
import "./SectionHeader.scss";

function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <header
      className={
        "SectionHeader" + (props.className ? ` ${props.className}` : "")
      }
    >
      {props.title && (
        <h1
          className={
            "font-weight-bold" +
            (props.subtitle && props.spaced ? " mb-4" : "") +
            (!props.subtitle ? " mb-0" : "") +
            (props.size ? ` h${props.size}` : "")
          }
        >
          {props.title}
        </h1>
      )}

      {props.subtitle && (
        <><h3 className="SectionHeader__subtitle mb-0">{props.subtitle}</h3><br/><br/></>
      )}
      {props.subtitle2 && (
        <><h3 className="SectionHeader__subtitle mb-0">{props.subtitle2}</h3><br/><br/></>
      )}
      {props.subtitle3 && (
        <><h3 className="SectionHeader__subtitle mb-0">{props.subtitle3}</h3><br/><br/></>
      )}
      {props.subtitle4 && (
        <><h3 className="SectionHeader__subtitle mb-0">{props.subtitle4}</h3><br/><br/></>
      )}
    </header>
  );
}

export default SectionHeader;
