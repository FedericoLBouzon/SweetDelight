export default function About() {
    return (
      <>
        <div className="about-container">
          <h1 className="about-title">Sobre Nosotros</h1>
  
          {/* Primera fila: Imagen 1 a la izquierda, Texto 1 a la derecha */}
          <div className="about-section first-row">
            <img src="/src/assets/medialuna.jpg" alt="Imagen panadería 1" className="about-image" />
            <div className="about-text">
              <p>
                Somos una panadería de calidad, dedicada a producir los más deliciosos y auténticos productos panaderos.
                Hoy, llevamos esa pasión de tu negocio, ofreciéndote una amplia variedad de productos congelados de alta calidad,
                listos para hornear y servir.
              </p>
            </div>
          </div>
  
          {/* Segunda fila: Texto 2 a la izquierda, Imagen 2 a la derecha */}
          <div className="about-section second-row">
            <div className="about-text">
              <p>
                Elaboramos nuestros productos con ingredientes de calidad y siguiendo recetas tradicionales.
                Nuestros productos congelados te permiten tener siempre a mano una amplia variedad de productos horneados,
                listos para hornear cuando lo necesites.
              </p>
              <p>
                Versatilidad: Nuestros productos son ideales para cafeterías, restaurantes, hoteles y cualquier negocio que busque
                ofrecer productos horneados de calidad.
              </p>
            </div>
            <img src="/src/assets/bizcochitos de grasa.jpg" alt="Imagen panadería 2" className="about-image" />
          </div>
        </div>
      </>
    );
  }
  