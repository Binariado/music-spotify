import '../styles/globals.scss'
import '../tailwindcss/tailwind.css'
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '../state'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={configureStore.store}>
      <PersistGate loading={null} persistor={configureStore.persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp