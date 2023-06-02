import { BrowserRouter } from 'react-router-dom';
import { AppStore } from './store';
import { AppThemeProvider } from './theme';
import { AppSnackBarProvider } from './components/AppSnackBar';
import Routes from './routes';
import Layout from './layout';
import { ErrorBoundary } from './components';
import IdleTimer from './components/IdleTimer';

/**
 * Root Application Component
 * @component App
 */
const App = () => {
  return (
    <ErrorBoundary name="App">
      <AppStore>
        <IdleTimer />
        <AppThemeProvider>
          <AppSnackBarProvider>
            <BrowserRouter>
              <Layout>
                <Routes />
              </Layout>
            </BrowserRouter>
          </AppSnackBarProvider>
        </AppThemeProvider>
      </AppStore>
    </ErrorBoundary>
  );
};

export default App;
