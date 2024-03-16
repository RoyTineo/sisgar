import React from "react";
import FormPersona from "./FormPersona";
import MyForm from "../pruebas"

function TramiteDocumentario() {
  return (
    <div className="container-fluid">
      <h1 className="text-center">Trámite de Solicitud de Garantías</h1>
      <div className="row">
        <div className="col-md-2 ">
          <button
            type="button"
            className="btn btn-info w-100 "
            data-toggle="modal"
            data-target="#modalNuevoDocumento"
          >
            Nuevo documento
          </button>
          <button
            type="button"
            className="btn btn-primary w-100 mt-2"
            data-toggle="modal"
            data-target="#modalRegistrarDenunciante"
          >
            Añadir Denunciante
          </button>
          <button
            type="button"
            className="btn btn-danger w-100 mt-2"
            data-toggle="modal"
            data-target="#modalRegistrarDenunciado"
          >
            Añadir Denunciado
          </button>
        </div>
        <div className="col-md-10">
          <div className="card card-secondary text-center">
            <div className="card-header">
              <h3 className="card-title">Solicitud de garantias</h3>
            </div>
            <div className="card-body">
              <p>Exp nro</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">Datos del Denunciante</h3>
                    </div>
                    <div className="card-body">
                      {/* Datos del Denunciante */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-danger">
                    <div className="card-header">
                      <h3 className="card-title">Datos del Denunciado</h3>
                    </div>
                    <div className="card-body">
                      {/* Datos del Denunciado */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal REgistrar Denunciante */}
      <FormPersona/>
      

      {/* modal  Nuevo Documento*/}
      <div className="modal fade" id="modalNuevoDocumento">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Registrar Expediente</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="inputExp" className="form-label">
                    Nro. Exp.
                  </label>
                  <input type="text" className="form-control" id="inputExp" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputFolio" className="form-label">
                    Folios
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputFolio"
                  />
                </div>
              </div>
              <div className="row mb-2  ">
                <div className="col-md-6">
                  <label htmlFor="inputFechaDoc" className="form-label">
                    Fecha
                  </label>
                  <input
                    type="date"
                    className="form-control "
                    id="inputFechaDoc"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputHoraDoc" className="form-label">
                    Hora
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="inputHoraDoc"
                  />
                </div>
              </div>
              <div className="row mt-4  justify-content-center">
                <div className="form-group">
                  <div className="custom-control custom-radio d-inline mr-4 ">
                    <input
                      className="custom-control-input"
                      type="radio"
                      id="inputFormato1"
                      name="inputFormato"
                      defaultChecked
                    />
                    <label
                      htmlFor="inputFormato1"
                      className="custom-control-label"
                    >
                      Formato 1
                    </label>
                  </div>
                  <div className="custom-control custom-radio d-inline ml-4 ">
                    <input
                      className="custom-control-input"
                      type="radio"
                      id="inputFormato2"
                      name="inputFormato"
                    />
                    <label
                      htmlFor="inputFormato2"
                      className="custom-control-label"
                    >
                      Formato 2
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Registrar
              </button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      {/* /.modal */}

      <form>
       
        <div className="row">
          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn bg-gradient-primary btn-lg">
              Guardar
            </button>
          </div>
        </div>
      </form>

{/* Componente de pruebas */}
<MyForm></MyForm>
      

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
    </div>
  );
}

export default TramiteDocumentario;
