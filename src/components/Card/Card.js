import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Card = ({ title, description, icon }) => {
    return (_jsxs("div", { className: "h-100 p-4", style: {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(8px)",
            borderRadius: "15px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            transition: "all 0.3s ease",
            color: "white"
        }, children: [_jsx("div", { className: "text-center mb-3", style: { color: "#4dabf7" }, children: icon }), _jsx("h3", { className: "h5 text-center mb-3", children: title }), _jsx("p", { className: "mb-0 text-center", children: description })] }));
};
export default Card;
