import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoutesContainer from "./routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RoutesContainer />
        <ReactQueryDevtools />
        <Toaster />
      </QueryClientProvider>
    </>
  );
};
export default App;
