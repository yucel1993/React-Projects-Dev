import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./app.css"
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
