import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./reset.css"
import { ChakraProvider } from '@chakra-ui/react'
 import { QueryClient, QueryClientProvider} from 'react-query'

import App from './App';

 const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient} contextSharing={true}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </QueryClientProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

