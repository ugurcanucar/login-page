import Views from "./views";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "styles/styles.scss";
import "antd/dist/antd.min.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Views />} />
      </Routes>
    </Router>
  );
}

export default App;
