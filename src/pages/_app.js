import AppLayout from "@/components/layouts/appLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
