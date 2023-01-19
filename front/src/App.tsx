import React from 'react';
import Routers from 'Routers';
import { Provider } from 'react-redux';
import { store } from 'Globalstate/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Router>
                    <Routers />
                </Router>
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
