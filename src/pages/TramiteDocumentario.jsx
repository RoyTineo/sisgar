import React from "react";

function TramiteDocumentario() {
  return (
    <>
      <h1 className="text-center">Trámite de Solicitud de Garantías</h1>
      <form action="">
        <div className="row  p-4 ">
          <div className="col-md-3">
            <label htmlFor="inputExp" className="form-label">
              Nro. Exp.
            </label>
            <input type="text" className="form-control" id="inputExp" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputFolio" className="form-label">
              Folios
            </label>
            <input type="text" className="form-control" id="inputFolio" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputFechaDoc" className="form-label">
              Fecha
            </label>
            <input type="date" className="form-control" id="inputFechaDoc" />
          </div>
          <div className="col-md-3 ">
            <div>
              <label htmlFor="inputTipoFormato" className="form-label">
                Tipo de Formato
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="inputFormato"
                id="inputFormato1"
                defaultValue="option1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="inputFormato1">
                Formato 1
              </label>
            </div>

            <div className="form-check  ">
              <input
                className="form-check-input"
                type="radio"
                name="inputFormato"
                id="inputFormato2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="inputFormato2">
                Formato 2
              </label>
            </div>
          </div>
        </div>
      </form>
      <form>
        <div className="row g-4 ">
          {/* start col 1 */}
          <div className="col-md-6 p-4 border ">
            <h4 className="text-center mb-4">
              Datos del <strong>Denunciante</strong>
            </h4>

            {/* Primera Fila */}
            <div className="row">
              <div className="col-md-6 mt-2">
                <label htmlFor="inputNombreDnte" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputNombreDnte"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="inputDniDnte" className="form-label">
                  DNI
                </label>
                <input type="text" className="form-control" id="inputDniDnte" />
              </div>
            </div>

            {/* Segunda Fila*/}
            <div className="row">
              <div className="col-md-6 mt-2">
                <label htmlFor="inputApePaternoDnte" className="form-label">
                  Apellido Paterno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputApePaternoDnte"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="inputApeMaternoDnte" className="form-label">
                  Apellido Materno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputApeMaternoDnte"
                />
              </div>
            </div>

            {/* Terecera fila */}
            <div className="row">
              <div className="col-md-6 mt-2">
                <label htmlFor="inputNacionalidadDnte" className="form-label">
                  Nacionalidad
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputNacionalidadDnte"
                  defaultValue="PERUANO"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="inputEdadDnte" className="form-label">
                  Edad
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEdadDnte"
                />
              </div>
            </div>

            {/* Cuarta fila */}
            <div className="row">
              <div className="col-12 mt-2">
                <label htmlFor="inputOcupacionDnte" className="form-label">
                  Ocupación
                </label>

                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Ingrese la ocupación"
                    id="inputOcupacionDnte"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Quinta fila */}
            <div className="row">
              <div className="col-12 mt-2">
                <label htmlFor="inputDireccionDnte" className="form-label">
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputDireccionDnte"
                />
              </div>
            </div>

            {/* Sexta fila */}
            <div className="row">
              <div className="col-md-6 mt-2">
                <label htmlFor="inputDistritoDnte" className="form-label">
                  Distrito
                </label>
                <div className="form-floating">
                  <select classname="form-select" id="inputDistritoDnte">
                    <option selected value={1}>
                      Ayacucho
                    </option>
                    <option value={2}>San Juan Bautista</option>
                    <option value={3}>Jesus Nazarenos</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="inputProvinciaDnte" className="form-label">
                  Provincia
                </label>
                <div className="form-floating">
                  <select classname="form-select" id="inputProvinciaDnte">
                    <option selected value={1}>
                      Huamanga
                    </option>
                    <option value={2}>VilcasHuaman</option>
                    <option value={3}>Huanta</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Septima fila */}
            <div className="row">
              <div className="col-md-4 mt-2">
                <label htmlFor="inputTelefonoDnte" className="form-label">
                  Telefono
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputTelefonoDnte"
                />
              </div>
              <div className="col-md-8 mt-2 ">
                <label htmlFor="inputCorreoDnte" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCorreoDnte"
                />
              </div>
            </div>
          </div>
          {/* end col 1 */}

          {/* estar col 2 */}
          <div className="col-md-6 p-4 border">
            <h4 className="text-center mb-4">
              Datos del <strong>Denunciado</strong>
            </h4>

            {/* Primera Fila */}
            <div className="row">
              <div className="col-md-6 mt-2">
                <label htmlFor="inputNombreDcdo" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputNombreDcdo"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="inputDniDcdo" className="form-label">
                  DNI
                </label>
                <input type="text" className="form-control" id="inputDniDcdo" />
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="inputConDni"
                  />
                  <label className="form-check-label" htmlFor="inputConDni">
                    Con DNI
                  </label>
                </div>
              </div>
            </div>

            {/* Segunda Fila*/}
            <div className="row">
              <div className="col-md-6 mt-2">
                <label htmlFor="inputApePaternoDcdo" className="form-label">
                  Apellido Paterno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputApePaternoDcdo"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="inputApeMaternoDcdo" className="form-label">
                  Apellido Materno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputApeMaternoDcdo"
                />
              </div>
            </div>

            {/* Tercera fila */}
            <div className="row">
              <div className="col-12 mt-2">
                <label htmlFor="inputDireccionDnte" className="form-label">
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputDireccionDnte"
                />
              </div>
            </div>

            {/* Cuarta fila */}
            <div className="row">
              <div className="col-12 mt-2">
                <label htmlFor="inputOcupacionDcdo" className="form-label">
                  Ocupación
                </label>

                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Ingrese la ocupación"
                    id="inputOcupacionDcdo"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Quinta fila */}
            <div className="row">
              <div className="col-12 mt-2">
                <label htmlFor="inputReferenciaDcdo" className="form-label">
                  Referencia
                </label>

                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Ingrese alguna referencia"
                    id="inputReferenciaDcdo"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {/* end col 2 */}
        </div>

        <div className="row">
          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn bg-gradient-primary btn-lg">
              Guardar
            </button>
          </div>
        </div>
      </form>

      {/* Tabla  */}
      <div className="row g-4 mt-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Nro</th>
              <th scope="col">Exp</th>
              <th scope="col">Denunciante</th>
              <th scope="col">Denunciado</th>
              <th className="text-center" scope="col">Operaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>001-2024</td>
              <td>Cecilio Watherman</td>
              <td>Hernan Barcos</td>
             
              <td className="text-center">
              <span className="right badge badge-primary mr-2">
              <i className="fas fa-edit p-2"></i>
              </span>
              <span className="right badge badge-danger ml-2">
              <i className="fas fa-trash-alt p-2"></i>
              </span>
             
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>001-2024</td>
              <td>Cecilio Watherman</td>
              <td>Hernan Barcos</td>
             
              <td className="text-center">
              <span className="right badge badge-primary mr-2">
              <i className="fas fa-edit p-2"></i>
              </span>
              <span className="right badge badge-danger ml-2">
              <i className="fas fa-trash-alt p-2"></i>
              </span>
             
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>001-2024</td>
              <td>Cecilio Watherman</td>
              <td>Hernan Barcos</td>
             
              <td className="text-center">
              <span className="right badge badge-primary mr-2">
              <i className="fas fa-edit p-2"></i>
              </span>
              <span className="right badge badge-danger ml-2">
              <i className="fas fa-trash-alt p-2"></i>
              </span>
             
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TramiteDocumentario;
