import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Card from '../Card';
const MainContent = () => {
    const cards = [
        {
            title: "Artículo 1",
            description: "Descripción breve del primer artículo con información relevante.",
            icon: (_jsx("svg", { width: "30", height: "30", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M12 2L2 7v10l10 5 10-5V7L12 2z" }) }))
        },
        {
            title: "Artículo 2",
            description: "Resumen del segundo artículo con detalles importantes para el usuario.",
            icon: (_jsx("svg", { width: "30", height: "30", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" }) }))
        },
        {
            title: "Artículo 3",
            description: "Tercer artículo con contenido destacado y llamativo para los visitantes.",
            icon: (_jsx("svg", { width: "30", height: "30", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }))
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "mb-4 text-white", children: [_jsx("h2", { className: "h4 mb-2", children: "Bienvenido a nuestra aplicaci\u00F3n" }), _jsx("p", { className: "mb-3", children: "Esta es una aplicaci\u00F3n de ejemplo creada con React, TypeScript y Bootstrap. El dise\u00F1o es completamente responsivo." })] }), _jsxs("section", { children: [_jsx("h2", { className: "h5 mb-3 text-white", children: "Nuestros art\u00EDculos destacados" }), _jsx("div", { className: "row g-3", children: cards.map((card, index) => (_jsx("div", { className: "col-12 col-md-6 col-lg-4", children: _jsx(Card, { title: card.title, description: card.description, icon: card.icon }) }, index))) })] })] }));
};
export default MainContent;
