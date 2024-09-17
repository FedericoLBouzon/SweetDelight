import React from 'react';
import { Link } from 'react-router-dom';
import croissantsImage from '../assets/croissant.jpg'; // asegúrate de colocar la imagen correctamente

export default function HomePage() {
  return (
    <main className="home">
      <section className="value-proposition">
        <div className="text-section">
          <h1>ACÁ IRIA LA PROPUESTA DE VALOR DE LA EMPRESA</h1>
          <p>
            Disfruta de productos horneados a diario con ingredientes naturales y recetas tradicionales.
            Calidad, sabor y pasión en cada bocado.
          </p>
          <Link to="/products" className="cta-button">
            Descubrí nuestros sabores
          </Link>
        </div>
        <div className="image-section">
          <img src={croissantsImage} alt="Croissants" />
        </div>
      </section>
    </main>
  );
}
