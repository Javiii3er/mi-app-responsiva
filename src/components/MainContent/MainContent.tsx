import Card from '../Card';

const MainContent = () => {
  const cards = [
    {
      title: "Artículo 1",
      description: "Descripción breve del primer artículo con información relevante.",
      icon: (
        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
        </svg>
      )
    },
    {
      title: "Artículo 2",
      description: "Resumen del segundo artículo con detalles importantes para el usuario.",
      icon: (
        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Artículo 3",
      description: "Tercer artículo con contenido destacado y llamativo para los visitantes.",
      icon: (
        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <section className="mb-4 text-white">
        <h2 className="h4 mb-2">Bienvenido a nuestra aplicación</h2>
        <p className="mb-3">
          Esta es una aplicación de ejemplo creada con React, TypeScript y Bootstrap.
          El diseño es completamente responsivo.
        </p>
      </section>

      <section>
        <h2 className="h5 mb-3 text-white">Nuestros artículos destacados</h2>
        <div className="row g-3">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <Card 
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainContent;