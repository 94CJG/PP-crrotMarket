import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import HotItems from "./routes/HotItems";
import Trust from "./routes/Trust";
import Jobs from "./routes/Jobs";
import Footer from "./components/Footer";
import AreaStores from "./routes/AreaStores";
import Fleamarket from "./routes/Fleamarket";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400&display=swap');
body
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 16px;
      font: inherit;
      vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    * {
      box-sizing:border-box;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
`;


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/HotItems">
          <HotItems />
        </Route>
        <Route path="/Trust">
          <Trust />
        </Route>
        <Route path="/Jobs">
          <Jobs />
        </Route>
        <Route path="/AreaStores">
          <AreaStores />
        </Route>
        <Route path="/Fleamarket">
          <Fleamarket />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
