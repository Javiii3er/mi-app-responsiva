import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const Footer = ({ className = '', style = {} }) => {
    return (_jsx("footer", { className: `text-white py-4 mt-auto ${className}`, style: {
            background: "rgba(15, 32, 39, 0.7)",
            backdropFilter: "blur(10px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            ...style
        }, children: _jsx("div", { className: "container", children: _jsxs("div", { className: "d-flex flex-column flex-md-row justify-content-between align-items-center", children: [_jsxs("p", { className: "mb-3 mb-md-0", children: ["\u00A9 ", new Date().getFullYear(), " Mi App. Todos los derechos reservados."] }), _jsxs("div", { className: "d-flex gap-3", children: [_jsx("a", { href: "#", className: "text-white hover-effect", children: _jsx("i", { className: "bi bi-twitter" }) }), _jsx("a", { href: "#", className: "text-white hover-effect", children: _jsx("i", { className: "bi bi-instagram" }) }), _jsx("a", { href: "#", className: "text-white hover-effect", children: _jsx("i", { className: "bi bi-linkedin" }) })] })] }) }) }));
};
export default Footer;
