import { Provider } from "react-redux";
import Header from "./components/Header";
import appStore from "./utils/redux/appStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WatchVideo from "./components/WatchVideo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/watchVideo' element={<WatchVideo />} />
          </Routes>
        </Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
