import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import Router from "Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "context/UserRoleContext";
// import { Provider } from "react-redux";
// import store from "redux/Store/Store";

const queryClient = new QueryClient();

function App() {
  return (
    // <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications position="top-center" />
        <UserProvider>
          <Router />
        </UserProvider>
      </MantineProvider>
      {/* </Provider> */}
    </QueryClientProvider>
  );
}

export default App;
