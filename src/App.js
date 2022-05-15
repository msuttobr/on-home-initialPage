
import InitialPage from "./pages/InitialPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <InitialPage/> } />
      </Routes>
    </Router>
  );
}

export default App;
