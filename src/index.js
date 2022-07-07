import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
/* import { store, persistor } from "./redux/store"; */
/* import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux"; */
import { ThemeProvider } from "styled-components";
import { COLORS } from "./constans/ColorConstans";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/*  <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <ThemeProvider theme={{ colors: COLORS }}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
