import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './index.css';
import App from './App';
import { AuthContex } from './Context/AuthContex';

ReactDOM.render(
    <AuthContex>
<BrowserRouter >
<App />
</BrowserRouter>
</AuthContex>, document.getElementById('root'));
