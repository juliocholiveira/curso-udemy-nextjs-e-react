import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { AppProvider } from '../core/App/AppContext';
import { AuthProvider } from '../core/Auth/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}

export default MyApp;
