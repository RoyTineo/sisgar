import React from "react";

function Programacion() {
  return (
    <div className="container-fluid">
      <h1 className="text-center">Programación de Audiencias</h1>

      {/* Tabla  */}
      <div className="row g-4 mt-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Nro</th>
              <th scope="col">Exp</th>
              <th scope="col">Denunciante</th>
              <th scope="col">Denunciado</th>
              <th className="text-center" scope="col">
                Operaciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>001-2024</td>
              <td>Cecilio Watherman</td>
              <td>Hernan Barcos</td>

              <td className="text-center ">
                <span className="right badge badge-primary  p-2">
                  <i className="fas fa-calendar-alt p-2 d-inline"></i>
                  <p className="d-inline">Programar</p>
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>001-2024</td>
              <td>Cecilio Watherman</td>
              <td>Hernan Barcos</td>

              <td className="text-center ">
                <span className="right badge badge-primary  p-2">
                  <i className="fas fa-calendar-alt p-2 d-inline"></i>
                  <p className="d-inline">Programar</p>
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>001-2024</td>
              <td>Cecilio Watherman</td>
              <td>Hernan Barcos</td>

              <td className="text-center ">
                <span className="right badge badge-primary  p-2">
                  <i className="fas fa-calendar-alt p-2 d-inline"></i>
                  <p className="d-inline">Programar</p>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col-md-12 mb-4">
          <h3 className="text-center mb-3">Programacion para la audiencia</h3>

          <div className="row">
            <div className="col-md-6 ">
              <label htmlFor="inputFechaDoc" className="form-label">
                Fecha
              </label>
              <input type="date" className="form-control" id="inputFechaDoc" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputHora" className="form-label">
                Hora
              </label>
              <input type="time" className="form-control" id="inputHora" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="inputFechaDoc" className="form-label">
                Fecha del documento
              </label>
              <input type="date" className="form-control" id="inputFechaDoc" />
            </div>
          </div>
        </div>
        {/* end datos de programacion para la audiencia */}

        <div className="col border p-4 m-2">
          <div className="row text-center d-block">
            <p className="h5 pt-2">
              NOTIFICACIÓN DE LA SUBPREFECTURA PROVINCIA DE HUAMANGA
            </p>
            <p className="h3 ">
              <span className="badge badge-primary p-2">PARA DENUNCIANTE</span>
            </p>
            <p className="h5">Nro. Exp. 024-2024</p>
          </div>

          <div className="row">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th style={{ width: "40%" }}>Nombres y Apellidos:</th>
                    <td>Hernan Barcos</td>
                  </tr>
                  <tr>
                    <th>Domicilio Real o Procesal:</th>
                    <td>Matute</td>
                  </tr>
                  <tr>
                    <th>Distrito:</th>
                    <td>La victoria</td>
                  </tr>
                  <tr>
                    <th>Centro de Trabajo:</th>
                    <td>Recojebolas en Matute</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <p className="text-justify  ">
              POR MEDIO DEL PRESENTE; SE LE NOTIFICA A UD, PARA QUE SE APERSONE
              A LA {"SUBPREFECTURA PROVINCIAL DE HUAMANGA"}, SITIO PORTAL
              CONSTITUCIÓN N° 15, PLAZA MAYOR DE AYACUCHO, EL DIA{" "}
              <strong> {"MARTES 26 DE MARZO DEL 2024"} </strong>A HORAS{" "}
              <strong>{"10:00 AM"}</strong> HORA EXACTA, PARA ESCLARECIMIENTO DE
              LA DENUNCIA INTERPUESTA CONTRA:{" "}
              {"NOMBRE Y APELLIDO DEL DENUNCIADO"} RESPECTO DEL AGRAVIO QUE
              ATENTA CONTRA LOS DERECHOS FUNDAMENTALES DE LAS PERSONAS
              CONSAGRADOS POR LA CONSTITUCIÓN POLÍTICA DEL PERÚ, LEYES Y NORMAS
              VIGENTES.
            </p>
          </div>

          <p className="text-right ">Ayacucho, {"24 de marzo del 2024"}</p>
        </div>
        <div className="col border p-4 m-2">
          <div className="row text-center d-block">
            <p className="h5 pt-2">
              NOTIFICACIÓN DE LA SUBPREFECTURA PROVINCIA DE HUAMANGA
            </p>
            <p className="h3 ">
              <span className="badge badge-danger p-2">PARA DENUNCIADO</span>
            </p>
            <p className="h5">Nro. Exp. 024-2024</p>
          </div>

          <div className="row">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th style={{ width: "40%" }}>Nombres y Apellidos:</th>
                    <td>Cecilio Watherman</td>
                  </tr>
                  <tr>
                    <th>Domicilio Real o Procesal:</th>
                    <td>Matute</td>
                  </tr>
                  <tr>
                    <th>Distrito:</th>
                    <td>La victoria</td>
                  </tr>
                  <tr>
                    <th>Centro de Trabajo:</th>
                    <td>Matute</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <p className="text-justify  ">
              POR MEDIO DEL PRESENTE; SE LE NOTIFICA A UD, PARA QUE SE APERSONE
              A LA {"SUBPREFECTURA PROVINCIAL DE HUAMANGA"}, SITIO PORTAL
              CONSTITUCIÓN N° 15, PLAZA MAYOR DE AYACUCHO, EL DIA{" "}
              <strong>{"MARTES 26 DE MARZO DEL 2024"}</strong>A HORAS{" "}
              <strong>{"10:00 AM"}</strong> HORA EXACTA, PARA ESCLARECIMIENTO DE
              LA DENUNCIA INTERPUESTA CONTRA SU PERSONA POR PARTE DE:{" "}
              {"NOMBRE Y APELLIDO DEL DENUNCIADO"} RESPECTO DEL AGRAVIO QUE
              ATENTA CONTRA LOS DERECHOS FUNDAMENTALES DE LAS PERSONAS
              CONSAGRADOS POR LA CONSTITUCIÓN POLÍTICA DEL PERÚ, LEYES Y NORMAS
              VIGENTES.
            </p>
          </div>

          <p className="text-right ">Ayacucho, {"24 de marzo del 2024"}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn bg-gradient-primary btn-lg">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Programacion;
