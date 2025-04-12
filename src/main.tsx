import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react';
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes'
import store from './store/store';
import { Provider } from 'react-redux';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ClerkProvider
        appearance={{
          baseTheme: [dark, neobrutalism],
          variables: { colorPrimary: 'blue' },
          signIn: {
            baseTheme: [shadesOfPurple],
            variables: { colorPrimary: 'blue' },
          },
        }}
        publishableKey={PUBLISHABLE_KEY}
        afterSignOutUrl="/"
      >
        <App />
      </ClerkProvider>
    </Provider>
  </React.StrictMode>,
)
