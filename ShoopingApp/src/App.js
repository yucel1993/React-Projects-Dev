import { AppRouter } from "./router/AppRouter"
import { ToastContainer } from "react-bootstrap"
import { Provider } from "react-redux"
import { store } from "./store"


function App() {
  return (
    <>
    <Provider store={store}>
    <AppRouter/>
    <ToastContainer/>
    </Provider>
    </>
  )
}

export default App
