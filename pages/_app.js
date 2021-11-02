import 'tailwindcss/tailwind.css'
import '../styles/app.css';
import 'antd/dist/antd.css';
import AppLayout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
  );
}

export default MyApp
