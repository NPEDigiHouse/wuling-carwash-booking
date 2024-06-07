import { MantineProvider } from "@mantine/core";
import Router from "Router";
// import { Provider } from "react-redux";
// import store from "redux/Store/Store";

function App() {
  return (
    // <Provider store={store}>
    <MantineProvider>
      <Router />
    </MantineProvider>
    // </Provider>
  );
}

export default App;
