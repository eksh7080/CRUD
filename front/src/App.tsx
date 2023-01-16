import React from 'react';
import Router from 'Router';
import { Provider } from 'react-redux';
import { store } from 'Globalstate/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Router />
            </Provider>
        </QueryClientProvider>
    );
}

export default App;
