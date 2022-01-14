import Views from "./views";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "styles/styles.scss";
import "antd/dist/antd.min.css";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Views />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
