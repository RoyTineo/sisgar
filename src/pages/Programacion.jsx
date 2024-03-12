import React from "react";

function Programacion() {
  return (
    <div>
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
    </div>
  );
}

export default Programacion;
