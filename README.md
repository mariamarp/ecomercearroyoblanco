Markdown

# 🛒 Tienda Online E-Commerce 

Un proyecto de tienda online (E-commerce) desarrollado con **React** y **Vite** que simula un carrito de compras funcional y la gestión de productos, utilizando **Firebase** como base de datos y backend.

1- 🌟 Características Principales 

2- 🛠️ Tecnologías y Dependencias

3- 📁 Dependencias Principales

4- 📁 Estructura del Proyecto

5- 🚀 Cómo Empezar

---

## 🌟 Características Principales (Funcionalidades)

Este proyecto ofrece una experiencia de compra completa con las siguientes funcionalidades:

* **Navegación Intuitiva:** Barra de navegación (`NavBar`) para un fácil acceso a las distintas secciones.
* **Listado de Productos:** Muestra una lista de artículos (`ItemList`, `ItemListContainer`) disponibles para la venta.
* **Detalle del Producto:** Vista individual (`ItemDetail`, `ItemDetailContainer`) con información detallada de cada artículo.

* **Carrito de Compras:**
    * **Añadir/Quitar Productos:** Permite a los usuarios agregar artículos al carrito con un contador de unidades (`ItemCount`).
    * **Vista del Carrito:** Muestra los productos seleccionados (`CartWidget`, `Cart.jsx`).
    * **Gestión del Carrito:** Permite vaciar el carrito o eliminar productos individuales.

* **Contexto Global de Carrito:** Utiliza el React Context (`CartContext`, `CartProvider`) para una gestión eficiente y global del estado del carrito.
* **Proceso de Compra (Checkout):** Formulario para completar la orden (`CheckoutForm`) y simular la finalización de la compra.
* **Persistencia de Datos:** Los datos de los productos y la gestión de órdenes se manejan a través de **Firebase**.

---

## 🛠️ Tecnologías y Dependencias

* **React:** Biblioteca principal de JavaScript para construir la interfaz de usuario.
* **Vite:** Herramienta de construcción rápida y ligera para proyectos modernos.
* **JavaScript (JSX):** Lenguaje de programación.
* **CSS:** Para el estilo y diseño de los componentes.

## 📁 Dependencias Principales

react	^19.1.1	Biblioteca fundamental para construir la interfaz de usuario.
react-dom	^19.1.1	Proporciona métodos específicos del DOM para React.
react-router-dom	^6.30.1	Manejo de la navegación y las rutas dentro de la aplicación.
firebase	^12.6.0	Backend como servicio (BaaS) utilizado para la persistencia de datos y gestión de órdenes.
bootstrap	^5.3.8	Framework de CSS popular para un diseño responsivo.
react-bootstrap	^2.10.10	Componentes de Bootstrap escritos como componentes de React.
react-hot-toast	^2.6.0	Biblioteca para mostrar notificaciones y alertas de manera atractiva.
lucide-react	^0.546.0	Colección de iconos ligeros para la interfaz (probablemente usado en CartWidget).
react-router	^7.9.5	Dependencia auxiliar para el manejo de rutas.

---

## 📁 Estructura del Proyecto

MANUELARODRIGUEZCODER/ (Root del Proyecto)
├── dist/                     # Archivos de salida para producción (generados por 'npm run build')
├── node_modules/             # Dependencias del proyecto (instaladas con 'npm install')
├── public/
│   └── vite.svg              # Icono/Logo usado públicamente
├── src/                      # Código Fuente Principal
│   ├── assets/               # Recursos estáticos
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components/           # Componentes de React
│   │   ├── Cart.jsx
│   │   ├── CartWidget.css
│   │   ├── CartWidget.jsx
│   │   ├── CheckoutForm.jsx
│   │   ├── ItemCount.jsx
│   │   ├── Item.jsx
│   │   ├── ItemDetail.css
│   │   ├── ItemDetail.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemList.css
│   │   ├── ItemList.jsx
│   │   ├── ItemListContainer.jsx
│   │   └── NavBar.jsx
│   ├── context/              # Gestión de estado global con React Context
│   │   ├── CartContext.jsx
│   │   └── CartProvider.jsx
│   ├── firebase/             # Archivos de configuración y conexión a Firebase
│   │   ├── config.js
│   │   └── db.js
│   ├── hoc/                  # (Higher-Order Components, si se utilizan)
│   ├── App.jsx               # Componente principal de la aplicación
│   ├── index.css             # Estilos globales
│   └── main.jsx              # Punto de entrada de React (monta <App />)
├── .gitignore                # Reglas para ignorar archivos en Git
├── .eslintrc.config.js       # Configuración de ESLint (linter)
├── index.html                # Archivo HTML principal
├── package-lock.json         # Bloqueo de versiones de dependencias
├── package.json              # Metadatos y lista de dependencias
├── postcss.config.js         # Configuración de PostCSS
├── README.MD                 # (¡Este archivo!)
└── vite.config.js            # Configuración de Vite

## 🚀 Cómo Empezar

Para correr el proyecto localmente, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    cd [nombre-del-proyecto]
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o yarn install
    ```

3.  **Configurar Firebase:**
    Asegúrate de tener tus credenciales de Firebase en `src/firebase/config.js`.

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    # o yarn dev
    ```

El proyecto se abrirá en `http://localhost:5173/` (o el puerto que te indique Vite).
