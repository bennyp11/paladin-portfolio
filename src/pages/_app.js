import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import ContractMePage from "./contract-me";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";

function App(props) {
  return (
    <Router>
      <>
        <NavbarCustom
          bg="dark"
          textColor="info"
          expand="md"
          logo="https://bennyp-bucket.s3.us-west-1.amazonaws.com/Paladin+Programmer.svg"
        />

        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/contract-me" component={ContractMePage} />

          <Route component={NotFoundPage} />
        </Switch>

        <Footer
          bg="dark"
          textColor="light"
          size="sm"
          bgImage=""
          bgImageOpacity={1}
          copyright={`© ${new Date().getFullYear()} Company`}
          logo="https://uploads.divjoy.com/logo.svg"
        />
      </>
    </Router>
  );
}

export default App;
