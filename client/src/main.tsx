import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.ts'
import { ToastContainer } from 'react-toastify'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
        <ToastContainer position='bottom-left' autoClose={3000} />
    </Provider>
)
