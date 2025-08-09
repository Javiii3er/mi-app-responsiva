import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainContent from './components/MainContent';
import Footer from './components/Footer';
function App() {
    return (_jsxs("div", { style: {
            background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden" // Añadido para prevenir scroll no deseado
        }, children: [_jsx(Header, {}), _jsx("main", { className: "flex-grow-1 py-3 py-md-4" // Ajuste de padding responsivo
                , style: {
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    margin: "0 auto",
                    width: "100%",
                    maxWidth: "1200px"
                }, children: _jsxs("div", { className: "container px-3 px-md-4", children: [" ", _jsxs("div", { className: "text-white text-center mb-4 mb-md-5", children: [_jsx("h1", { className: "display-5 mb-3", children: "Bienvenido a mi sitio" }), _jsx("p", { className: "lead mb-0", children: "Este es un ejemplo de React + Bootstrap con efecto Glassmorphism." })] }), _jsx(MainContent, {})] }) }), _jsx(Footer, { style: {
                    background: "rgba(20, 40, 50, 0.8)",
                    backdropFilter: "blur(12px)"
                } })] }));
}
export default App;
