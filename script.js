/* =========================================
   PROYEC LAB V6
   FONDO COMPLETO DE SAUSAL
========================================= */


/* =========================================
   DATOS
========================================= */

const places = [

  /* ===============================
     COMIDA
  =============================== */

  {
    name: "Mari Mar Restaurante",
    category: "comida",
    icon: "🍽️",
    description:
      "Restaurante ubicado en Sausal.",
    location:
      "Sausal 13700",
    map:
      "Mari Mar Restaurante Sausal La Libertad"
  },

  {
    name: "Restaurante & Cevichería Keylita",
    category: "comida",
    icon: "🐟",
    description:
      "Restaurante y cevichería de la localidad.",
    location:
      "Sausal 13700",
    map:
      "Restaurante Cevicheria Keylita Sausal"
  },

  {
    name: "Restaurant Liz",
    category: "comida",
    icon: "🍴",
    description:
      "Restaurante ubicado en la localidad.",
    location:
      "C. La Libertad 37, Sausal",
    map:
      "Restaurant Liz Sausal"
  },

  {
    name: "Pollería Bendición de Dios",
    category: "comida",
    icon: "🍗",
    description:
      "Pollería ubicada en Sausal.",
    location:
      "C. Lima 35, Sausal",
    map:
      "Polleria Bendicion de Dios Sausal"
  },

  {
    name: "Pollería Yayita",
    category: "comida",
    icon: "🍗",
    description:
      "Pollería registrada públicamente en Chicama. La ubicación exacta en Sausal debe confirmarse.",
    location:
      "Chicama 13700 • Sausal por confirmar",
    map:
      "Polleria Yayita Chicama La Libertad"
  },


  /* ===============================
     SERVICIOS
  =============================== */

  {
    name: "Bodega Sausal",
    category: "servicios",
    icon: "🛒",
    description:
      "Establecimiento comercial local.",
    location:
      "C. Lima 57, Sausal",
    map:
      "Bodega Sausal C Lima 57"
  },

  {
    name: "Lavandería Doña Luzmila",
    category: "servicios",
    icon: "🧺",
    description:
      "Servicio local de lavandería.",
    location:
      "Sausal",
    map:
      "Lavanderia Dona Luzmila Sausal"
  },

  {
    name: "Servicio Móvil Lescano",
    category: "servicios",
    icon: "📱",
    description:
      "Servicio local registrado en la zona.",
    location:
      "Sausal",
    map:
      "Servicio Movil Lescano Sausal"
  },


  /* ===============================
     EDUCACIÓN
  =============================== */

  {
    name: "I.E. José Carlos Mariátegui",
    category: "educacion",
    icon: "🏫",
    description:
      "Institución educativa de Sausal creada el 17 de octubre de 1965.",
    location:
      "Sausal, La Libertad",
    map:
      "IE Jose Carlos Mariategui Sausal"
  },

  {
    name: "I.E. 81971 Alfonso Ugarte",
    category: "educacion",
    icon: "🏫",
    description:
      "Institución educativa ubicada en la comunidad.",
    location:
      "Sausal",
    map:
      "IE 81971 Alfonso Ugarte Sausal"
  },

  {
    name: "Jardines de Sausal",
    category: "educacion",
    icon: "👶",
    description:
      "Búsqueda de instituciones de educación inicial de Sausal.",
    location:
      "Sausal",
    map:
      "jardin inicial Sausal La Libertad"
  },


  /* ===============================
     LUGARES
  =============================== */

  {
    name: "Plaza de Sausal",
    category: "lugares",
    icon: "🏛️",
    description:
      "Espacio público central y punto de referencia.",
    location:
      "Sausal",
    map:
      "Plaza de Sausal La Libertad"
  },

  {
    name: "Plazuela El Maestro",
    category: "lugares",
    icon: "🌳",
    description:
      "Espacio público y punto de referencia local.",
    location:
      "Sausal",
    map:
      "Plazuela El Maestro Sausal"
  },

  {
    name: "Parque Infantil Noli",
    category: "lugares",
    icon: "🛝",
    description:
      "Espacio recreativo para actividades de la comunidad.",
    location:
      "Sausal",
    map:
      "Parque Infantil Noli Sausal"
  },

  {
    name: "Piscina de Sausal",
    category: "lugares",
    icon: "🏊",
    description:
      "Espacio recreativo y deportivo.",
    location:
      "Sausal",
    map:
      "Piscina de Sausal La Libertad"
  },

  {
    name: "Cerro 1 de Mayo",
    category: "lugares",
    icon: "⛰️",
    description:
      "Lugar relacionado con tradiciones y actividades locales.",
    location:
      "Sausal",
    map:
      "Cerro 1 de Mayo Sausal"
  },


  /* ===============================
     INSTITUCIONES
  =============================== */

  {
    name: "Municipalidad de Sausal",
    category: "instituciones",
    icon: "🏛️",
    description:
      "Institución vinculada a la administración local.",
    location:
      "Sausal",
    map:
      "Municipalidad Centro Poblado Sausal"
  },

  {
    name: "Centro de Salud Alto Perú Sausal",
    category: "instituciones",
    icon: "🏥",
    description:
      "Establecimiento de atención de salud.",
    location:
      "Sausal",
    map:
      "Centro de Salud Alto Peru Sausal"
  },

  {
    name: "Comisaría Rural Sausal",
    category: "instituciones",
    icon: "👮",
    description:
      "Dependencia policial de la localidad.",
    location:
      "Sausal",
    map:
      "Comisaria Rural Sausal"
  },


  /* ===============================
     TRANSPORTE
  =============================== */

  {
    name: "Terminal Terrestre Sausal",
    category: "transporte",
    icon: "🚌",
    description:
      "Punto de referencia para transporte terrestre.",
    location:
      "Sausal",
    map:
      "Terminal Terrestre Sausal"
  },

  {
    name: "Estación de Colectivos Sausal - Casa Grande",
    category: "transporte",
    icon: "🚐",
    description:
      "Punto de referencia para colectivos hacia Casa Grande.",
    location:
      "Sausal",
    map:
      "Estacion de Colectivos Sausal Casa Grande"
  },


  /* ===============================
     CULTURA
  =============================== */

  {
    name: "Virgen del Rosario",
    category: "cultura",
    icon: "🙏",
    description:
      "Festividad religiosa mencionada entre las tradiciones de Sausal.",
    location:
      "Sausal",
    map:
      "Virgen del Rosario Sausal La Libertad"
  },

  {
    name: "Señor de los Milagros",
    category: "cultura",
    icon: "🙏",
    description:
      "Tradición religiosa presente en la comunidad.",
    location:
      "Sausal",
    map:
      "Señor de los Milagros Sausal"
  },

  {
    name: "Virgen de la Puerta",
    category: "cultura",
    icon: "🙏",
    description:
      "Festividad religiosa mencionada entre las tradiciones locales.",
    location:
      "Sausal",
    map:
      "Virgen de la Puerta Sausal"
  }

];


/* =========================================
   ELEMENTOS
========================================= */

const grid =
  document.getElementById("placesGrid");

const searchInput =
  document.getElementById("searchInput");

const clearSearch =
  document.getElementById("clearSearch");

const resultsInfo =
  document.getElementById("resultsInfo");

const filters =
  document.querySelectorAll(".filter");

const categoryButtons =
  document.querySelectorAll(".category-card");

let currentFilter = "todos";


/* =========================================
   GOOGLE MAPS
========================================= */

function mapsURL(query) {

  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );

}


/* =========================================
   NOMBRE DE CATEGORÍA
========================================= */

function categoryName(category) {

  const names = {

    comida: "Comida",

    servicios: "Servicios",

    educacion: "Educación",

    lugares: "Lugares",

    instituciones: "Instituciones",

    transporte: "Transporte",

    cultura: "Cultura"

  };

  return names[category] || category;

}


/* =========================================
   MOSTRAR RESULTADOS
========================================= */

function renderPlaces() {

  const search =
    searchInput.value
      .trim()
      .toLowerCase();


  const filtered =
    places.filter(place => {

      const categoryMatch =
        currentFilter === "todos" ||
        place.category === currentFilter;


      const searchMatch =
        !search ||

        place.name
          .toLowerCase()
          .includes(search) ||

        place.description
          .toLowerCase()
          .includes(search) ||

        place.location
          .toLowerCase()
          .includes(search) ||

        categoryName(place.category)
          .toLowerCase()
          .includes(search);


      return categoryMatch &&
             searchMatch;

    });


  grid.innerHTML = "";


  if (filtered.length === 0) {

    grid.innerHTML = `

      <article class="place-card">

        <div class="place-icon">
          🔎
        </div>

        <h3>
          No encontramos resultados
        </h3>

        <p>
          Prueba con otra búsqueda
          o cambia la categoría.
        </p>

      </article>

    `;

    resultsInfo.textContent =
      "No se encontraron resultados.";

    return;

  }


  resultsInfo.textContent =
    `Mostrando ${filtered.length} resultado${filtered.length === 1 ? "" : "s"}.`;


  filtered.forEach((place, index) => {

    const card =
      document.createElement("article");

    card.className =
      "place-card reveal";


    card.innerHTML = `

      <div class="place-icon">
        ${place.icon}
      </div>

      <div class="place-category">
        ${categoryName(place.category)}
      </div>

      <h3>
        ${place.name}
      </h3>

      <p>
        ${place.description}
      </p>

      <div class="place-location">
        📍 ${place.location}
      </div>

      <a
        class="maps-button"
        href="${mapsURL(place.map)}"
        target="_blank"
        rel="noopener noreferrer">

        📍 Abrir en Google Maps

      </a>

    `;


    card.style.transitionDelay =
      `${Math.min(index * 0.04, 0.3)}s`;


    grid.appendChild(card);


    requestAnimationFrame(() => {

      card.classList.add("visible");

    });

  });

}


/* =========================================
   FILTROS
========================================= */

filters.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      filters.forEach(item => {

        item.classList.remove(
          "active"
        );

      });


      button.classList.add(
        "active"
      );


      currentFilter =
        button.dataset.filter;


      renderPlaces();

    }
  );

});


/* =========================================
   BOTONES DE CATEGORÍA
========================================= */

categoryButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const category =
        button.dataset.category;


      if (category === "historia") {

        document
          .getElementById("historia")
          .scrollIntoView({
            behavior: "smooth"
          });

        return;

      }


      currentFilter =
        category;


      filters.forEach(filter => {

        filter.classList.toggle(

          "active",

          filter.dataset.filter ===
          category

        );

      });


      renderPlaces();


      document
        .getElementById("explorar")
        .scrollIntoView({
          behavior: "smooth"
        });

    }
  );

});


/* =========================================
   BUSCADOR
========================================= */

searchInput.addEventListener(
  "input",
  renderPlaces
);


clearSearch.addEventListener(
  "click",
  () => {

    searchInput.value = "";

    currentFilter = "todos";


    filters.forEach(filter => {

      filter.classList.toggle(
        "active",
        filter.dataset.filter === "todos"
      );

    });


    renderPlaces();

    searchInput.focus();

  }
);


/* =========================================
   MENU MOVIL
========================================= */

const menuButton =
  document.getElementById("menuButton");

const navMenu =
  document.getElementById("navMenu");


menuButton.addEventListener(
  "click",
  () => {

    navMenu.classList.toggle(
      "open"
    );

  }
);


navMenu
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        navMenu.classList.remove(
          "open"
        );

      }
    );

  });


/* =========================================
   PARTICULAS
========================================= */

const particles =
  document.getElementById("particles");


for (let i = 0; i < 55; i++) {

  const particle =
    document.createElement("span");


  particle.className =
    "particle";


  const size =
    Math.random() * 4 + 2;


  particle.style.width =
    `${size}px`;


  particle.style.height =
    `${size}px`;


  particle.style.left =
    `${Math.random() * 100}%`;


  particle.style.animationDuration =
    `${Math.random() * 12 + 8}s`;


  particle.style.animationDelay =
    `${Math.random() * 12}s`;


  particles.appendChild(
    particle
  );

}


/* =========================================
   PARALLAX DEL FONDO
========================================= */

const backgroundPhoto =
  document.querySelector(
    ".background-photo"
  );


window.addEventListener(
  "scroll",
  () => {

    const scroll =
      window.scrollY;


    backgroundPhoto.style.transform =
      `scale(1.1) translateY(${scroll * 0.025}px)`;

  }
);


/* =========================================
   ANIMACIONES DE APARICIÓN
========================================= */

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting
        ) {

          entry.target.classList.add(
            "visible"
          );

        }

      });

    },

    {
      threshold: 0.08
    }

  );


document
  .querySelectorAll(
    ".section-title, .history-card, .history-place, .project-grid, .sources-grid a"
  )
  .forEach(element => {

    element.classList.add(
      "reveal"
    );

    observer.observe(
      element
    );

  });


/* =========================================
   AÑO
========================================= */

document.getElementById("year")
  .textContent =
  new Date().getFullYear();


/* =========================================
   INICIAR
========================================= */

renderPlaces();


console.log(
  "ProyecLab V6 iniciado correctamente."
);
