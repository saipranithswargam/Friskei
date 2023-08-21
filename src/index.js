import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
    <Provider store = {store}>
        <AuthContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthContextProvider>
    </Provider>
    , document.getElementById("root")
);
