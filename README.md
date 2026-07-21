# 🎨 Wilson Arquitectura [](https://github.com/leoogomez7/wilson#-wilson-arquitectura)

**Wilson Arquitectura** es una plataforma web moderna desarrollada para presentar el portafolio digital, proyectos residenciales/comerciales y la metodología de trabajo del estudio de arquitectura **Wilson Arquitectura** (Pilar, Buenos Aires).

🌐 **Sitio Web Oficial:** [wilsonarquitectura.com.ar](https://www.wilsonarquitectura.com.ar/)

---

# 💡 ¿No eres programador? Te lo explicamos en simple

Si no tienes conocimientos sobre programación o tecnología, aquí te resumimos de qué trata esta página y por qué se diseñó así:

- **¿De qué se trata la página?**: Es el portal web oficial de **Wilson Arquitectura**, un estudio dedicado al diseño de viviendas, proyectos comerciales, remodelaciones y dirección de obras. Sirve para que futuros clientes puedan ver fotos e información de sus proyectos construidos y ponerse en contacto directamente para cotizar su obra.
- **¿Qué busca esta web?**: Que cualquier persona interesada en construir o remodelar su casa pueda explorar de forma visual, rápida y elegante los servicios, la metodología de trabajo y la visión de arquitectura sostenible del estudio.
- **¿Por qué es rápida e interactiva?**: Utiliza tecnología de última generación que carga la página casi al instante, permitiendo ver las galerías de imágenes y detalles de las casas sin esperar a que la pantalla se vuelva a recargar a cada rato.
- **¿Cómo se ve en celulares?**: Está construida bajo una filosofía *Mobile-First*, lo que significa que la experiencia visual para solicitar presupuestos o ver galerías está optimizada al 100% para teléfonos móviles y tablets.

---

# 🚀 ¿Qué es Wilson Arquitectura? [](https://github.com/leoogomez7/wilson#-qu%C3%A9-es-wilson-arquitectura)

Esta plataforma funciona como la identidad digital y catálogo comercial interactivo del estudio. Está estructurada estratégicamente para ofrecer una experiencia visual impactante (UX/UI) orientada a la conversión de clientes y a la exposición de proyectos a través de las siguientes características:

- **Showcase de Proyectos**: Presentación clara y estética de obras residenciales, comerciales e interiorismo con renderizado ágil de fotos de alta resolución.
- **Transmisión de Servicios**: Exposición detallada de los procesos de trabajo (diseño conceptual, proyecto ejecutivo, cómputo y presupuesto, gestión integral de obra).
- **Rendimiento UI Excepcional**: Transiciones fluidas y tiempos de respuesta inmediatos para la visualización de obras.
- **Infraestructura Edge**: Servido en redes globales que optimizan la entrega de imágenes y assets para que la web cargue velozmente en cualquier parte del mundo.

---

# 🛠️ Stack Tecnológico [](https://github.com/leoogomez7/wilson#%EF%B8%8F-stack-tecnol%C3%B3gico)

El proyecto está construido sobre una infraestructura moderna, modular y de tipado seguro para facilitar un mantenimiento ágil y una entrega de imágenes fluida.

### Frontend & UI [](https://github.com/leoogomez7/wilson#frontend--ui)
- **React.js & TypeScript**: Lógica de cliente robusta, escalable y libre de errores en tiempo de compilación.
- **Vite.js**: Servidor de desarrollo instantáneo y empaquetado optimizado para producción.
- **Tailwind CSS**: Framework CSS enfocado en la velocidad y el diseño *Mobile-First*.
- **shadcn/ui & Lucide Icons**: Sistema de componentes e iconografía consistente para el catálogo visual.

### Entorno de Ejecución & Dependencias [](https://github.com/leoogomez7/wilson#entorno-de-ejecuci%C3%B3n--dependencias)
- **Bun**: Gestor de paquetes ultrarrápido utilizado para acelerar la instalación y compilación.
- **Node.js & NPM**: Ecosistema base para la gestión de dependencias y scripts de construcción.

### Calidad de Código [](https://github.com/leoogomez7/wilson#calidad-de-c%C3%B3digo)
- **ESLint**: Reglas de análisis estático del código para mantener estándares limpios.
- **Prettier**: Formateador automatizado del código.

### Infraestructura & Cloud [](https://github.com/leoogomez7/wilson#infraestructura--cloud)
- **Vercel Edge Network**: Alojamiento global para distribución con compresión de imágenes y entrega de contenido a baja latencia.

---

# ⚙️ Requisitos Previos [](https://github.com/leoogomez7/wilson#%EF%B8%8F-requisitos-previos)

Se recomienda utilizar **Bun** para la gestión e instalación de dependencias en tu entorno de desarrollo local:

```bash
# Comando de instalación de Bun (macOS/Linux/WSL)
curl -fsSL [https://bun.sh](https://bun.sh) | bash

🚀 Instalación y Uso Local 
Clonar el repositorio:

Bash
git clone [https://github.com/leoogomez7/wilson.git](https://github.com/leoogomez7/wilson.git)
cd wilson
Instalar dependencias:

Bash
bun install
Ejecutar el servidor local:

Bash
bun run dev
Compilar para producción:

Bash
bun run build
📁 Estructura del Proyecto 
Plaintext
├── public/              # Recursos estáticos (Logos del estudio, favicons, vectores)
├── src/                 # Código fuente de componentes y proyectos de arquitectura
│   ├── assets/          # Imágenes de las obras, proyectos e renders
│   ├── components/      # Componentes de diseño (galerías, contacto, servicios)
│   └── App.tsx          # Estructura principal de la aplicación
├── .gitignore           # Archivos excluidos del control de versiones
├── .prettierrc          # Configuración del formateador estético
├── eslint.config.js     # Reglas del linter
├── index.html           # Documento raíz HTML5
├── package.json         # Scripts e historial de paquetes del proyecto
├── tsconfig.json        # Configuración del compilador TypeScript
└── vite.config.ts       # Configuración del empaquetador Vite
