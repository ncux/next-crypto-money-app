import 'tailwindcss/tailwind.css'
import '../styles/app.css';
import 'antd/dist/antd.css';
import AppLayout from "../components/layout/layout";
import { CryptoState } from "../context/crypto";

function MyApp({ Component, pageProps }) {
  return (
      <CryptoState>
          <AppLayout>
              <Component {...pageProps} />
          </AppLayout>
      </CryptoState>
  );
}

export default MyApp;
