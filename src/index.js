import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/global';

const root = createRoot(document.querySelector("#root"));

// Aqui eu passei o nosso <App /> e o <GlobalStyle /> - que é o style para todo componente da aplicação.
root.render(<>
    <App />
    <GlobalStyle />
</>);
