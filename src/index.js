import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Colors } from "./utils/Colors";
import ReactDOM from "react-dom/client";
import App from "./App";

const IndexStyle = styled.div`
  margin: 0px;
  padding: 0px;
  font-family: roboto;
  font-size: 16px;
  font-weight: lighter;
  color: ${Colors.primary};
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IndexStyle>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IndexStyle>
);
