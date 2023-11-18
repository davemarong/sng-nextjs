import GlobalLayout from "@/components/layout/GlobalLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";

export default function App({ Component, pageProps }: AppProps) {
  // const [queryClient] = useState(
  //   () =>
  //     new QueryClient({
  //       defaultOptions: {
  //         queries: {
  //           // With SSR, we usually want to set some default staleTime
  //           // above 0 to avoid refetching immediately on the client
  //           staleTime: 60 * 1000,
  //         },
  //       },
  //     })
  // );

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider theme={theme}> */}
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
      {/* </ThemeProvider> */}
    </QueryClientProvider>
  );
}
