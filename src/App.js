import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, CoinPage } from "./Pages/index";
import { Nav, AlertTab } from "./components/index";
import { makeStyles } from "@material-ui/core";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "#FFF",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <Router>
      <div className={classes.App}>
        <Nav />
        <Routes>
          <Route path="/CryptoWorld" element={<Home />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
      <AlertTab />
    </Router>
  );
}

export default App;
