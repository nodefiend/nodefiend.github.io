import React, { Component } from "react";
import CommitComponent from "./commit-component";
const style = {
  dropShadow: {
    WebkitBoxShadow: "9px 25px 158px -38px rgba(0,0,0,0.75)",
    MozBoxShadow: "9px 25px 158px -38px rgba(0,0,0,0.75)",
    boxShadow: "9px 25px 158px -38px rgba(0,0,0,0.75)"
  }
};
const HeaderComponent = () => {
  return (
    <div style={{ padding: 25 }}>
      <img
        style={{
          ...style.dropShadow,
          marginTop: "10vh",
          width: "25vw",
          borderRadius: "50%"
        }}
        src="https://s3-us-west-2.amazonaws.com/thecodebender.com/ken.jpg"
      />
      <div style={{ marginTop: 50 }}>
        <h1 className="App-title">Ken Chambers</h1>
        <h3>React || Ruby Ninja</h3>
        <span>code is my paintbrush and the web is my easel.</span>
        <br />
      </div>
      <CommitComponent />
    </div>
  );
};

export default HeaderComponent;
