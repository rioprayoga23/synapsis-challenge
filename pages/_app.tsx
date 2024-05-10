import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "@/components/shared/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const { store: reduxStore } = store.useWrappedStore({ ...pageProps });

  const queryClient = new QueryClient();

  return (
    <Provider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </Provider>
  );
}
