# Acta Digital de Computación

Sistema web para la generación y gestión de actas de entrega de equipamiento computacional. Permite crear, completar e imprimir actas de entrega de forma digital con una interfaz intuitiva y profesional.

## 📋 Descripción

Aplicación web desarrollada para la **Dirección de Informática y Tecnología** que facilita la creación y gestión de actas de entrega de equipamiento computacional. El sistema permite registrar información detallada sobre equipos, periféricos y usuarios, generando documentos profesionales listos para imprimir.

## ✨ Características

### Funcionalidades Principales

- ✅ **Formulario de Datos de Entrega**: Captura información del usuario, técnico responsable, sede, área y ubicación
- ✅ **Gestión de Equipamiento Computacional**: Permite agregar múltiples equipos con especificaciones técnicas completas
- ✅ **Gestión de Periféricos**: Registro de periféricos adicionales entregados
- ✅ **Interfaz Dinámica**: Agregar y eliminar filas de equipamiento y periféricos según necesidad
- ✅ **Validación de Formularios**: Validación en tiempo real de campos requeridos
- ✅ **Vista de Impresión Profesional**: Genera documentos formateados listos para imprimir o guardar como PDF
- ✅ **Diseño Responsive**: Adaptable a diferentes tamaños de pantalla

### Características Técnicas

- **Campos Grandes y Cómodos**: Inputs de tamaño adecuado para facilitar la entrada de datos
- **Placeholders Informativos**: Guías en cada campo para ayudar al usuario
- **Formato de Fechas**: Conversión automática a formato legible en español
- **Numeración Automática**: Los equipos y periféricos se numeran automáticamente
- **Estilos Profesionales**: Diseño corporativo con colores institucionales

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica del documento
- **CSS3**: Estilos personalizados y diseño responsive
- **JavaScript (ES6+)**: Lógica de la aplicación y manipulación del DOM
- **Bootstrap 5.3.2**: Framework CSS para diseño responsive y componentes UI
- **Font Awesome**: Iconos (si se requiere en futuras versiones)

## 📁 Estructura del Proyecto

```
04-actaDigitalComputacion/
│
├── index.html              # Página principal
├── README.md               # Documentación del proyecto
│
└── assets/
    ├── css/
    │   └── acta.css        # Estilos personalizados
    ├── js/
    │   └── acta.js         # Lógica de la aplicación
    └── img/
        └── logo.png        # Logo institucional
```

## 🚀 Instalación y Uso

### Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Servidor web local (opcional, puede abrirse directamente en el navegador)

### Instalación

1. Clonar o descargar el repositorio
2. Abrir `index.html` en un navegador web
3. O servir los archivos mediante un servidor web local

### Uso del Sistema

#### 1. Completar Datos de Entrega

- Llenar todos los campos del formulario "Datos de Entrega":
  - Nombre Usuario
  - Sede
  - Técnico Responsable
  - Área
  - C.C.
  - Ubicación / Oficina
  - Fecha Acta (se completa automáticamente con la fecha actual)

#### 2. Agregar Equipamiento Computacional

- Hacer clic en el botón **"➕ Agregar Equipo"**
- Completar los campos de cada equipo:
  - Tipo (ej: Laptop, Desktop)
  - Marca
  - Modelo
  - N° Serie
  - N° Inventario
  - Fecha Entrega
  - CPU
  - RAM [GB]
  - Disco Duro [GB]
  - Unidad Óptica
  - N° Ticket
  - Otras Especificaciones
- Repetir el proceso para agregar más equipos
- Usar el botón **"Eliminar"** para quitar equipos no deseados

#### 3. Agregar Periféricos Adicionales

- Hacer clic en el botón **"➕ Agregar Periférico"**
- Completar los campos de cada periférico:
  - Tipo (ej: Monitor, Teclado, Mouse)
  - Marca
  - Modelo
  - N° Serie
  - N° Inventario
  - Fecha Entrega
  - N° Ticket
  - Otras Especificaciones
- Repetir el proceso para agregar más periféricos

#### 4. Generar e Imprimir el Acta

- Hacer clic en **"Generar Acta"** para validar y revisar los datos
- Hacer clic en **"Imprimir Acta"** para generar la vista de impresión profesional
- En la ventana de impresión:
  - Seleccionar "Guardar como PDF" para crear un archivo digital
  - O imprimir directamente en papel

## 📝 Campos del Formulario

### Datos de Entrega

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| Nombre Usuario | Texto | Sí | Nombre completo del usuario que recibe el equipamiento |
| Sede | Texto | Sí | Sede o ubicación donde se realiza la entrega |
| Técnico Responsable | Texto | Sí | Nombre del técnico que realiza la entrega |
| Área | Texto | Sí | Área o departamento del usuario |
| C.C. | Texto | Sí | Código o identificación |
| Ubicación / Oficina | Texto | Sí | Ubicación física del equipamiento |
| Fecha Acta | Fecha | Sí | Fecha de emisión del acta |

### Equipamiento Computacional

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Tipo | Texto | Tipo de equipo (Laptop, Desktop, etc.) |
| Marca | Texto | Marca del equipo |
| Modelo | Texto | Modelo específico |
| N° Serie | Texto | Número de serie del equipo |
| N° Inventario | Texto | Número de inventario institucional |
| Fecha Entrega | Fecha | Fecha de entrega del equipo |
| CPU | Texto | Procesador del equipo |
| RAM [GB] | Número | Cantidad de memoria RAM en GB |
| Disco Duro [GB] | Número | Capacidad del disco duro en GB |
| Unidad Óptica | Texto | Tipo de unidad óptica (DVD, Blu-ray, etc.) |
| N° Ticket | Texto | Número de ticket de soporte |
| Otras Especificaciones | Texto | Información adicional |

### Periféricos Adicionales

| Campo | Tipo | Descripción |
|-------|------|-------------|
| Tipo | Texto | Tipo de periférico (Monitor, Teclado, etc.) |
| Marca | Texto | Marca del periférico |
| Modelo | Texto | Modelo específico |
| N° Serie | Texto | Número de serie |
| N° Inventario | Texto | Número de inventario |
| Fecha Entrega | Fecha | Fecha de entrega |
| N° Ticket | Texto | Número de ticket |
| Otras Especificaciones | Texto | Información adicional |

## 🎨 Personalización

### Colores

Los colores principales se pueden modificar en `assets/css/acta.css`:

- **Color del Header**: `#182974` (clase `.headerColor`)
- **Color de Tablas**: `#0d6efd` (Bootstrap primary)
- **Color de Focus**: `#0d39fd`

### Logo

Reemplazar el archivo `assets/img/logo.png` con el logo institucional deseado.

## 📄 Vista de Impresión

La vista de impresión incluye:

- ✅ Encabezado con logo y título
- ✅ Datos de entrega formateados en tabla
- ✅ Lista numerada de equipamiento computacional
- ✅ Lista numerada de periféricos adicionales
- ✅ Condiciones y obligaciones de uso
- ✅ Área de firmas con líneas para firmar
- ✅ Formato optimizado para papel A4

### Características de Impresión

- **Formato A4**: Optimizado para impresión en papel tamaño A4
- **Márgenes Adecuados**: Espaciado profesional
- **Evita Saltos de Página**: Mantiene secciones completas
- **Fuentes Legibles**: Tamaños optimizados para lectura
- **Sin Elementos UI**: Oculta botones y controles

## 🔧 Funciones JavaScript Principales

### `agregarFilaEquipamiento()`
Agrega una nueva fila a la tabla de equipamiento computacional.

### `eliminarFilaEquipamiento(id)`
Elimina una fila específica de equipamiento.

### `agregarFilaPeriferico()`
Agrega una nueva fila a la tabla de periféricos.

### `eliminarFilaPeriferico(id)`
Elimina una fila específica de periféricos.

### `generarActa()`
Valida el formulario y muestra los datos en consola (para desarrollo).

### `imprimirActa()`
Genera la vista de impresión profesional con todos los datos formateados.

## 📱 Compatibilidad

- ✅ Chrome (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Edge (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Navegadores móviles (con limitaciones en impresión)

## 🐛 Solución de Problemas

### Los campos no se ven completos
- Verificar que el navegador tenga JavaScript habilitado
- Limpiar la caché del navegador

### La impresión no funciona correctamente
- Verificar que el navegador tenga permisos de impresión
- Usar la función "Guardar como PDF" como alternativa

### Los datos no se guardan
- Esta versión no incluye persistencia de datos
- Los datos se mantienen solo durante la sesión
- Para guardar, usar la función de impresión y guardar como PDF

## 🔮 Futuras Mejoras

- [ ] Guardado de actas en formato JSON
- [ ] Exportación a PDF directa
- [ ] Historial de actas generadas
- [ ] Búsqueda y filtrado de actas
- [ ] Autenticación de usuarios
- [ ] Base de datos para persistencia
- [ ] API REST para integración
- [ ] Modo oscuro
- [ ] Validación avanzada de campos
- [ ] Plantillas predefinidas

## 📞 Soporte

Para consultas o problemas, contactar a:
- **Dirección de Informática y Tecnología**
- **Versión**: 1.0.0
- **Desarrollado por**: DValdes

## 📜 Licencia

Este proyecto es de uso interno para la Dirección de Informática y Tecnología.

## 📅 Versión

**Versión Actual**: 1.0.0

**Última Actualización**: 2026

---

**Nota**: Este sistema está diseñado para uso interno. No almacena datos de forma permanente. Se recomienda guardar las actas generadas como PDF para su archivo.
