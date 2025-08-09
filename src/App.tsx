import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden" // Añadido para prevenir scroll no deseado
      }}
    >
      <Header />
      
      <main 
        className="flex-grow-1 py-3 py-md-4" // Ajuste de padding responsivo
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          margin: "0 auto",
          width: "100%",
          maxWidth: "1200px"
        }}
      >
        <div className="container px-3 px-md-4"> {/* Ajuste de padding horizontal */}
          <div className="text-white text-center mb-4 mb-md-5">
            <h1 className="display-5 mb-3">Bienvenido a mi sitio</h1>
            <p className="lead mb-0">
              Este es un ejemplo de React + Bootstrap con efecto Glassmorphism.
            </p>
          </div>
          
          <MainContent />
        </div>
      </main>
      
      <Footer 
        style={{
          background: "rgba(20, 40, 50, 0.8)",
          backdropFilter: "blur(12px)"
        }}
      />
    </div>
  );
}

export default App;