// Mostrar botón subir al hacer scroll
const btnSubir = document.getElementById("btnSubir");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }
};

// Acción botón subir
btnSubir.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Control menú hamburguesa
const btnMenu = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul.menu");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Datos de productos para las tarjetas
const productos = [
    {
        nombre: "Calefón Gas Natural 10L",
        descripcion: "Calefón eficiente y seguro para tu hogar.",
        precio: "$150",
        imagen: "img/gas.webp"
    },
    {
        nombre: "Accesorios para Instalación",
        descripcion: "Todo lo que necesitas para una instalación perfecta.",
        precio: "$30",
        imagen: "img/gas.webp"
    },
    {
        nombre: "Instalación Profesional",
        descripcion: "Servicio garantizado por expertos certificados.",
        precio: "$80",
        imagen: "img/gas.webp"
    }
];

// Insertar tarjetas dinámicamente en el contenedor
const contenedor = document.getElementById('cards-container');

function mostrarProductos() {
    contenedor.innerHTML = ''; // Limpiar antes para evitar duplicados

    productos.forEach(producto => {
        const card = document.createElement('article');
        card.className = 'tarjeta-producto';  // Clase correcta según CSS
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <div class="price">${producto.precio}</div>
        `;
        contenedor.appendChild(card);
    });
}

mostrarProductos();
