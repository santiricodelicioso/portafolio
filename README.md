# Portafolio de Arquitectura

Este es un portafolio profesional para un delineante de arquitectura, construido con Next.js y Tailwind CSS.

## Características

- Diseño moderno y responsivo
- Sección de proyectos destacados
- Experiencia laboral
- Habilidades técnicas y blandas
- Formulario de contacto
- Integración con redes sociales

## Requisitos

- Node.js 18.0.0 o superior
- npm o yarn

## Instalación

1. Clona este repositorio
2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

## Personalización

### Imágenes de Proyectos

1. Coloca tus imágenes de proyectos en el directorio `public/projects/`
2. Las imágenes deben tener un tamaño recomendado de 800x600 píxeles
3. Actualiza las rutas de las imágenes en el archivo `src/app/page.tsx`

### Información Personal

1. Actualiza la información personal en el archivo `src/app/page.tsx`:
   - Nombre
   - Descripción
   - Proyectos
   - Experiencia laboral
   - Habilidades
   - Enlaces a redes sociales

### Formulario de Contacto

El formulario de contacto está configurado para simular el envío de mensajes. Para implementar el envío real de correos:

1. Configura un servicio de correo electrónico (como SendGrid, Mailgun, etc.)
2. Actualiza la función `handleSubmit` en `src/components/ContactForm.tsx`

## Tecnologías Utilizadas

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- ESLint

## Licencia

MIT
"# portafolio" 
