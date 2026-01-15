document.addEventListener("DOMContentLoaded", () => {
    const contenido = document.getElementById("contenido");
    const fechaActual = new Date().toISOString().split('T')[0];
  
    contenido.innerHTML = `
      <form id="formActa">
        <section class="mb-5">
          <h2 class="text-primary mb-3">Datos de Entrega</h2>
          <!-- (TIPO: PC, Monitor, Notebook, Tablet, Mac, Impresora, DataShow, Teléfono IP y Tablet) -->
          <p>TIPO: PC, Monitor, Notebook, Tablet, Mac, Impresora, DataShow, Teléfono IP y Tablet</p>
          <div class="row g-3">
            <div class="col-md-4">
              <label for="nombreUsuario" class="form-label">Nombre Usuario</label>
              <input type="text" class="form-control" id="nombreUsuario" required>
            </div>
            <div class="col-md-4">
              <label for="sede" class="form-label">Sede</label>
              <input type="text" class="form-control" id="sede" required>
            </div>
            <div class="col-md-4">
              <label for="tecnicoResponsable" class="form-label">Técnico Responsable</label>
              <input type="text" class="form-control" id="tecnicoResponsable" required>
            </div>
            <div class="col-md-4">
              <label for="area" class="form-label">Área</label>
              <input type="text" class="form-control" id="area" required>
            </div>
            <div class="col-md-4">
              <label for="cc" class="form-label">C.C.</label>
              <input type="text" class="form-control" id="cc" required>
            </div>
            <div class="col-md-4">
              <label for="ubicacion" class="form-label">Ubicación / Oficina</label>
              <input type="text" class="form-control" id="ubicacion" required>
            </div>
            <div class="col-md-4">
              <label for="fechaActa" class="form-label">Fecha Acta</label>
              <input type="date" class="form-control" id="fechaActa" value="${fechaActual}" required>
            </div>
          </div>
        </section>
  
        <section class="mb-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
          
            <h2 class="text-primary mb-0 mb-3">Equipamiento Computacional</h2>
            
            <button type="button" class="btn btn-success" onclick="agregarFilaEquipamiento()">
              ➕ Agregar Equipo
            </button>
          </div>
          <div class="table-responsive">
            <table class="table table-hover table-bordered" id="tablaEquipamiento">
              <thead class="table-primary">
                <tr>
                  <th>Tipo</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>N° Serie</th>
                  <th>N° Inventario</th>
                  <th>Fecha Entrega</th>
                  <th>CPU</th>
                  <th>RAM [GB]</th>
                  <th>Disco Duro [GB]</th>
                  <th>Unidad Óptica</th>
                  <th>N° Ticket</th>
                  <th>Otras Especificaciones</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody id="tbodyEquipamiento">
                <!-- Las filas se agregarán dinámicamente -->
              </tbody>
            </table>
          </div>
        </section>
  
        <section class="mb-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h2 class="text-primary mb-0">Periféricos Adicionales</h2>
            <button type="button" class="btn btn-success" onclick="agregarFilaPeriferico()">
              ➕ Agregar Periférico
            </button>
          </div>
          <div class="table-responsive">
            <table class="table table-hover table-bordered" id="tablaPerifericos">
              <thead class="table-primary">
                <tr>
                  <th>Tipo</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>N° Serie</th>
                  <th>N° Inventario</th>
                  <th>Fecha Entrega</th>
                  <th>N° Ticket</th>
                  <th>Otras Especificaciones</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody id="tbodyPerifericos">
                <!-- Las filas se agregarán dinámicamente -->
                <p>TIPO: PC, Monitor, Notebook, Tablet, Mac, Impresora, DataShow, Teléfono IP y Tablet</p>
              </tbody>
            </table>
          </div>
        </section>
  
        <section class="mb-5">
          <h2 class="text-primary">Condiciones y Obligaciones de Uso</h2>
          <div class="alert alert-info">
            <ul>
              <li>Usar el equipamiento de acuerdo con la normativa de seguridad informática.</li>
              <li>Si es portátil, usar candado de seguridad y resguardar en cajón con llave.</li>
              <li>Al terminar contrato, devolver el equipamiento en buen estado.</li>
              <li>No reubicar ni reconfigurar sin autorización de Soporte Técnico.</li>
            </ul>
          </div>
        </section>
  
        <section class="row text-center mt-5">
          <div class="col-md-6">
            <p>______________________________</p>
            <p><strong>Firma Usuario</strong></p>
          </div>
          <div class="col-md-6">
            <p>______________________________</p>
            <p><strong>Firma Técnico Responsable</strong></p>
          </div>
        </section>
  
        <div class="text-center my-4">
          <button type="button" class="btn btn-primary btn-lg me-2" onclick="generarActa()">
            Generar Acta
          </button>
          <button type="button" class="btn btn-success btn-lg" onclick="imprimirActa()">
            Imprimir Acta
          </button>
        </div>
      </form>
    `;
  
    // Agregar una fila inicial de equipamiento
    agregarFilaEquipamiento();
    // Agregar una fila inicial de periféricos
    agregarFilaPeriferico();
  });
  
  let contadorEquipamiento = 0;
  let contadorPerifericos = 0;
  
  function agregarFilaEquipamiento() {
    const tbody = document.getElementById("tbodyEquipamiento");
    const fila = document.createElement("tr");
    fila.id = `filaEquipamiento${contadorEquipamiento}`;
    fila.innerHTML = `
      <td><input type="text" class="form-control campo-equipamiento" name="tipoEquipo[]" placeholder="Ej: Laptop"></td>
      <td><input type="text" class="form-control campo-equipamiento" name="marcaEquipo[]" placeholder="Ej: HP"></td>
      <td><input type="text" class="form-control campo-equipamiento" name="modeloEquipo[]" placeholder="Ej: ProBook"></td>
      <td><input type="text" class="form-control campo-equipamiento" name="serieEquipo[]" placeholder="N° Serie"></td>
      <td><input type="text" class="form-control campo-equipamiento" name="inventarioEquipo[]" placeholder="N° Inventario"></td>
      <td><input type="date" class="form-control campo-equipamiento" name="fechaEntregaEquipo[]"></td>
      <td><input type="text" class="form-control campo-equipamiento" name="cpuEquipo[]" placeholder="Ej: Intel i5"></td>
      <td><input type="number" class="form-control campo-equipamiento" name="ramEquipo[]" min="0" placeholder="GB"></td>
      <td><input type="number" class="form-control campo-equipamiento" name="discoEquipo[]" min="0" placeholder="GB"></td>
      <td><input type="text" class="form-control campo-equipamiento" name="unidadOpticaEquipo[]" placeholder="Ej: DVD"></td>
      <td><input type="text" class="form-control campo-equipamiento" name="ticketEquipo[]" placeholder="N° Ticket"></td>
      <td><input type="text" class="form-control campo-equipamiento" name="especificacionesEquipo[]" placeholder="Otras especificaciones"></td>
      <td>
        <button type="button" class="btn btn-danger" onclick="eliminarFilaEquipamiento(${contadorEquipamiento})">
          Eliminar
        </button>
      </td>
    `;
    tbody.appendChild(fila);
    contadorEquipamiento++;
  }
  
  function eliminarFilaEquipamiento(id) {
    const fila = document.getElementById(`filaEquipamiento${id}`);
    if (fila) {
      fila.remove();
    }
  }
  
  function agregarFilaPeriferico() {
    const tbody = document.getElementById("tbodyPerifericos");
    const fila = document.createElement("tr");
    fila.id = `filaPeriferico${contadorPerifericos}`;
    fila.innerHTML = `
      <td><input type="text" class="form-control campo-periferico" name="tipoPeriferico[]" placeholder="Ej: Monitor"></td>
      <td><input type="text" class="form-control campo-periferico" name="marcaPeriferico[]" placeholder="Ej: Dell"></td>
      <td><input type="text" class="form-control campo-periferico" name="modeloPeriferico[]" placeholder="Modelo"></td>
      <td><input type="text" class="form-control campo-periferico" name="seriePeriferico[]" placeholder="N° Serie"></td>
      <td><input type="text" class="form-control campo-periferico" name="inventarioPeriferico[]" placeholder="N° Inventario"></td>
      <td><input type="date" class="form-control campo-periferico" name="fechaEntregaPeriferico[]"></td>
      <td><input type="text" class="form-control campo-periferico" name="ticketPeriferico[]" placeholder="N° Ticket"></td>
      <td><input type="text" class="form-control campo-periferico" name="especificacionesPeriferico[]" placeholder="Otras especificaciones"></td>
      <td>
        <button type="button" class="btn btn-danger" onclick="eliminarFilaPeriferico(${contadorPerifericos})">
          Eliminar
        </button>
      </td>
    `;
    tbody.appendChild(fila);
    contadorPerifericos++;
  }
  
  function eliminarFilaPeriferico(id) {
    const fila = document.getElementById(`filaPeriferico${id}`);
    if (fila) {
      fila.remove();
    }
  }
  
  function generarActa() {
    // Validar formulario
    const form = document.getElementById("formActa");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
  
    // Obtener datos del formulario
    const datosEntrega = {
      nombreUsuario: document.getElementById("nombreUsuario").value,
      sede: document.getElementById("sede").value,
      tecnicoResponsable: document.getElementById("tecnicoResponsable").value,
      area: document.getElementById("area").value,
      cc: document.getElementById("cc").value,
      ubicacion: document.getElementById("ubicacion").value,
      fechaActa: document.getElementById("fechaActa").value
    };
  
    // Obtener equipamiento
    const equipamiento = [];
    const filasEquipamiento = document.querySelectorAll("#tbodyEquipamiento tr");
    filasEquipamiento.forEach(fila => {
      const inputs = fila.querySelectorAll("input");
      if (inputs[0].value.trim() !== "") { // Solo agregar si tiene al menos el tipo
        equipamiento.push({
          tipo: inputs[0].value,
          marca: inputs[1].value,
          modelo: inputs[2].value,
          serie: inputs[3].value,
          inventario: inputs[4].value,
          fechaEntrega: inputs[5].value,
          cpu: inputs[6].value,
          ram: inputs[7].value,
          disco: inputs[8].value,
          unidadOptica: inputs[9].value,
          ticket: inputs[10].value,
          especificaciones: inputs[11].value
        });
      }
    });
  
    // Obtener periféricos
    const perifericos = [];
    const filasPerifericos = document.querySelectorAll("#tbodyPerifericos tr");
    filasPerifericos.forEach(fila => {
      const inputs = fila.querySelectorAll("input");
      if (inputs[0].value.trim() !== "") { // Solo agregar si tiene al menos el tipo
        perifericos.push({
          tipo: inputs[0].value,
          marca: inputs[1].value,
          modelo: inputs[2].value,
          serie: inputs[3].value,
          inventario: inputs[4].value,
          fechaEntrega: inputs[5].value,
          ticket: inputs[6].value,
          especificaciones: inputs[7].value
        });
      }
    });
  
    // Mostrar resumen en consola (puedes expandir esto para guardar o exportar)
    console.log("Datos de Entrega:", datosEntrega);
    console.log("Equipamiento:", equipamiento);
    console.log("Periféricos:", perifericos);
  
    alert("Acta generada correctamente. Revisa la consola para ver los datos.");
  }
  
  function imprimirActa() {
    // Validar formulario
    const form = document.getElementById("formActa");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Obtener datos del formulario
    const datosEntrega = {
      nombreUsuario: document.getElementById("nombreUsuario").value,
      sede: document.getElementById("sede").value,
      tecnicoResponsable: document.getElementById("tecnicoResponsable").value,
      area: document.getElementById("area").value,
      cc: document.getElementById("cc").value,
      ubicacion: document.getElementById("ubicacion").value,
      fechaActa: document.getElementById("fechaActa").value
    };

    // Obtener equipamiento
    const equipamiento = [];
    const filasEquipamiento = document.querySelectorAll("#tbodyEquipamiento tr");
    filasEquipamiento.forEach(fila => {
      const inputs = fila.querySelectorAll("input");
      if (inputs[0].value.trim() !== "") {
        equipamiento.push({
          tipo: inputs[0].value,
          marca: inputs[1].value,
          modelo: inputs[2].value,
          serie: inputs[3].value,
          inventario: inputs[4].value,
          fechaEntrega: inputs[5].value,
          cpu: inputs[6].value,
          ram: inputs[7].value,
          disco: inputs[8].value,
          unidadOptica: inputs[9].value,
          ticket: inputs[10].value,
          especificaciones: inputs[11].value
        });
      }
    });

    // Obtener periféricos
    const perifericos = [];
    const filasPerifericos = document.querySelectorAll("#tbodyPerifericos tr");
    filasPerifericos.forEach(fila => {
      const inputs = fila.querySelectorAll("input");
      if (inputs[0].value.trim() !== "") {
        perifericos.push({
          tipo: inputs[0].value,
          marca: inputs[1].value,
          modelo: inputs[2].value,
          serie: inputs[3].value,
          inventario: inputs[4].value,
          fechaEntrega: inputs[5].value,
          ticket: inputs[6].value,
          especificaciones: inputs[7].value
        });
      }
    });

    // Guardar contenido original
    const contenidoOriginal = document.getElementById("contenido").innerHTML;

    // Formatear fecha
    const formatearFecha = (fecha) => {
      if (!fecha) return "N/A";
      const date = new Date(fecha + 'T00:00:00');
      return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    // Generar HTML de impresión profesional
    let htmlImpresion = `
      <div class="acta-impresion">
        <section class="seccion-impresion mb-4">
          <h2 class="titulo-seccion">DATOS DE ENTREGA</h2>
          <table class="tabla-impresion">
            <tbody>
              <tr>
                <td class="label-impresion"><strong>Nombre Usuario:</strong></td>
                <td>${datosEntrega.nombreUsuario || "N/A"}</td>
                <td class="label-impresion"><strong>Sede:</strong></td>
                <td>${datosEntrega.sede || "N/A"}</td>
              </tr>
              <tr>
                <td class="label-impresion"><strong>Técnico Responsable:</strong></td>
                <td>${datosEntrega.tecnicoResponsable || "N/A"}</td>
                <td class="label-impresion"><strong>Área:</strong></td>
                <td>${datosEntrega.area || "N/A"}</td>
              </tr>
              <tr>
                <td class="label-impresion"><strong>C.C.:</strong></td>
                <td>${datosEntrega.cc || "N/A"}</td>
                <td class="label-impresion"><strong>Ubicación / Oficina:</strong></td>
                <td>${datosEntrega.ubicacion || "N/A"}</td>
              </tr>
              <tr>
                <td class="label-impresion"><strong>Fecha Acta:</strong></td>
                <td colspan="3">${formatearFecha(datosEntrega.fechaActa)}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="seccion-impresion mb-4">
          <h2 class="titulo-seccion">EQUIPAMIENTO COMPUTACIONAL</h2>
    `;

    if (equipamiento.length > 0) {
      htmlImpresion += `
          <table class="tabla-impresion tabla-equipamiento">
            <thead>
              <tr>
                <th>#</th>
                <th>Tipo</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>N° Serie</th>
                <th>N° Inventario</th>
                <th>Fecha Entrega</th>
                <th>CPU</th>
                <th>RAM (GB)</th>
                <th>Disco Duro (GB)</th>
                <th>Unidad Óptica</th>
                <th>N° Ticket</th>
                <th>Otras Especificaciones</th>
              </tr>
            </thead>
            <tbody>
      `;

      equipamiento.forEach((equipo, index) => {
        htmlImpresion += `
              <tr>
                <td class="numero-fila">${index + 1}</td>
                <td>${equipo.tipo || "N/A"}</td>
                <td>${equipo.marca || "N/A"}</td>
                <td>${equipo.modelo || "N/A"}</td>
                <td>${equipo.serie || "N/A"}</td>
                <td>${equipo.inventario || "N/A"}</td>
                <td>${formatearFecha(equipo.fechaEntrega)}</td>
                <td>${equipo.cpu || "N/A"}</td>
                <td>${equipo.ram || "N/A"}</td>
                <td>${equipo.disco || "N/A"}</td>
                <td>${equipo.unidadOptica || "N/A"}</td>
                <td>${equipo.ticket || "N/A"}</td>
                <td>${equipo.especificaciones || "N/A"}</td>
              </tr>
        `;
      });

      htmlImpresion += `
            </tbody>
          </table>
      `;
    } else {
      htmlImpresion += `<p class="sin-datos">No se ha registrado equipamiento computacional.</p>`;
    }

    htmlImpresion += `
        </section>

        <section class="seccion-impresion mb-4">
          <h2 class="titulo-seccion">PERIFÉRICOS ADICIONALES</h2>
    `;

    if (perifericos.length > 0) {
      htmlImpresion += `
          <table class="tabla-impresion tabla-perifericos">
            <thead>
              <tr>
                <th>#</th>
                <th>Tipo</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>N° Serie</th>
                <th>N° Inventario</th>
                <th>Fecha Entrega</th>
                <th>N° Ticket</th>
                <th>Otras Especificaciones</th>
              </tr>
            </thead>
            <tbody>
      `;

      perifericos.forEach((periferico, index) => {
        htmlImpresion += `
              <tr>
                <td class="numero-fila">${index + 1}</td>
                <td>${periferico.tipo || "N/A"}</td>
                <td>${periferico.marca || "N/A"}</td>
                <td>${periferico.modelo || "N/A"}</td>
                <td>${periferico.serie || "N/A"}</td>
                <td>${periferico.inventario || "N/A"}</td>
                <td>${formatearFecha(periferico.fechaEntrega)}</td>
                <td>${periferico.ticket || "N/A"}</td>
                <td>${periferico.especificaciones || "N/A"}</td>
              </tr>
        `;
      });

      htmlImpresion += `
            </tbody>
          </table>
      `;
    } else {
      htmlImpresion += `<p class="sin-datos">No se han registrado periféricos adicionales.</p>`;
    }

    htmlImpresion += `
        </section>

        <section class="seccion-impresion mb-4">
          <h2 class="titulo-seccion">CONDICIONES Y OBLIGACIONES DE USO</h2>
          <div class="condiciones-lista">
            <ul>
              <li>Usar el equipamiento de acuerdo con la normativa de seguridad informática.</li>
              <li>Si es portátil, usar candado de seguridad y resguardar en cajón con llave.</li>
              <li>Al terminar contrato, devolver el equipamiento en buen estado.</li>
              <li>No reubicar ni reconfigurar sin autorización de Soporte Técnico.</li>
            </ul>
          </div>
        </section>

        <section class="firmas-impresion">
          <div class="row">
            <div class="col-md-6 text-center">
              <div class="linea-firma"></div>
              <p class="texto-firma"><strong>Firma Usuario</strong></p>
              <p class="nombre-firma">${datosEntrega.nombreUsuario || ""}</p>
            </div>
            <div class="col-md-6 text-center">
              <div class="linea-firma"></div>
              <p class="texto-firma"><strong>Firma Técnico Responsable</strong></p>
              <p class="nombre-firma">${datosEntrega.tecnicoResponsable || ""}</p>
            </div>
          </div>
        </section>
      </div>
    `;

    // Reemplazar contenido temporalmente
    document.getElementById("contenido").innerHTML = htmlImpresion;
    document.body.classList.add("modo-impresion");

    // Imprimir
    window.print();

    // Restaurar contenido original después de un breve delay
    setTimeout(() => {
      document.getElementById("contenido").innerHTML = contenidoOriginal;
      document.body.classList.remove("modo-impresion");
      // Re-agregar event listeners si es necesario
      agregarFilaEquipamiento();
      agregarFilaPeriferico();
    }, 500);
  }
  