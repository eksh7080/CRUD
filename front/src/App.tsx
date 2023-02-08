import React from 'react';
import Routers from 'Routers';
import { Provider } from 'react-redux';
import { store } from 'Globalstate/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Router>
                        <Routers />
                    </Router>
                </ThemeProvider>
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
