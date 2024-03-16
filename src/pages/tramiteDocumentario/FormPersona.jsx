import React from "react";
import { Form, Formik, Field } from "formik";

import { createPersonaRequest } from "../../api/persona.api";

function FormPersona() {
  return (
    <>
      {/* modal Registrar Persona */}
      <div
        className="modal fade"
        id="modalRegistrarDenunciante"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Registrar {"Denunciante"}</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <Formik
              initialValues={{
                // Escribir los nombres de los campos de la tabla de la base de datos
                nombre: "",
                apellido_paterno: "",
                apellido_materno: "",
                idtb_tipo_documento: 1,
                nro_documento: "",
                nacionalidad: "Peruano",
                edad: 0,
                direccion: "",
                distrito: "Ayacucho",
                provincia: "Huamanga",
                ocupacion: "",
                otra_referencia: "",
                telefono: "",
                correo: "",
              }}
              onSubmit={async (valores, { resetForm }) => {
                resetForm();
                console.log(valores);
                try {
                  const respuesta = await createPersonaRequest(valores);
                  console.log(respuesta);
                } catch (error) {
                  console.log(error);
                }

                // aqui enviamos valores a una api
              }}
            >
              {({ values, handleChange }) => (
                <Form>
                  <div className="modal-body">
                    {/* Primera Fila */}
                    <div className="row">
                      <div className="col-md-6 mt-2">
                        <label htmlFor="inputNombre" className="form-label">
                          Nombre
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="inputNombre"
                          name="nombre"
                        />
                      </div>
                      <div className="col-md-3 mt-2">
                        <label
                          htmlFor="inputTipoDocumento"
                          className="form-label"
                        >
                          Tipo de Documento
                        </label>
                        <Field
                          className="form-control select2bs4 "
                          style={{ width: "100%" }}
                          id="inputTipoDocumento"
                          name="idtb_tipo_documento"
                          as="select"
                        >
                          <option value="1">DNI</option>
                          <option value="2">Carnet de extranjeria</option>
                        </Field>
                      </div>
                      <div className="col-md-3 mt-2">
                        <label htmlFor="inputDni" className="form-label">
                          Nro de Documento
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="inputDni"
                          name="nro_documento"
                        />
                      </div>
                    </div>

                    {/* Segunda Fila*/}
                    <div className="row">
                      <div className="col-md-6 mt-2">
                        <label htmlFor="inputApePaterno" className="form-label">
                          Apellido Paterno
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="inputApePaterno"
                          name="apellido_paterno"
                        />
                      </div>
                      <div className="col-md-6 mt-2">
                        <label htmlFor="inputApeMaterno" className="form-label">
                          Apellido Materno
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="inputApeMaterno"
                          name="apellido_materno"
                        />
                      </div>
                    </div>

                    {/* Terecera fila */}
                    <div className="row">
                      <div className="col-md-6 mt-2">
                        <label
                          htmlFor="inputNacionalidad"
                          className="form-label"
                        >
                          Nacionalidad
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="inputNacionalidad"
                          name="nacionalidad"
                          // value={values.inputNacionalidad}
                          // onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 mt-2">
                        <label htmlFor="inputEdad" className="form-label">
                          Edad
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="inputEdad"
                          name="edad"
                          
                        />
                      </div>
                    </div>

                    {/* Cuarta fila */}
                    <div className="row">
                      <div className="col-12 mt-2">
                        <label htmlFor="inputDireccion" className="form-label">
                          Dirección
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="inputDireccion"
                          name="direccion"
                        />
                      </div>
                    </div>

                    {/* Quinta fila */}
                    <div className="row">
                      <div className="col-6 mt-2">
                        <label htmlFor="inputOcupacion" className="form-label">
                          Ocupación
                        </label>

                        <div className="form-floating">
                          <Field
                            className="form-control"
                            placeholder="Ingrese su ocupación de la persona"
                            id="inputOcupacion"
                            name="ocupacion"
                            as="textarea"
                          />
                        </div>
                      </div>
                      <div className="col-6 mt-2">
                        <label
                          htmlFor="inputOtrasReferencias"
                          className="form-label"
                        >
                          Otras Refencias
                        </label>

                        <div className="form-floating">
                          <Field
                            className="form-control"
                            placeholder="¿Existe alguna otra referencia que ayude a notificar a la persona?"
                            id="inputOtrasReferencias"
                            name="otra_referencia"
                            as="textarea"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Sexta fila */}
                    <div className="row">
                      <div className="col-md-6 mt-2">
                        <label htmlFor="inputDistrito" className="form-label">
                          Distrito
                        </label>

                        <Field
                          className="form-control select2bs4 "
                          style={{ width: "100%" }}
                          id="inputDistrito"
                          name="distrito"
                          as="select"
                        >
                          <option value="Ayacucho">Ayacucho</option>
                          <option value="San Juan Bautista">
                            San Juan Bautista
                          </option>
                          <option value="Jesus Nazarenos">
                            Jesus Nazarenos
                          </option>
                        </Field>
                      </div>
                      <div className="col-md-6 mt-2">
                        {/* /.form-group */}

                        <div className="form-group">
                          <label
                            htmlFor="inputProvincia"
                            className="form-label"
                          >
                            Provincia
                          </label>

                          <Field
                            className="form-control select2bs4"
                            style={{ width: "100%" }}
                            id="inputProvincia"
                            name="provincia"
                            as="select"
                          >
                            <option value="Huamanga">Huamanga</option>
                            <option value="Vilcashuaman">Vilcashuaman</option>
                            <option value="Huanta">Huanta</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    {/* Septima fila */}
                    <div className="row">
                      <div className="col-md-4 mt-2">
                        <label htmlFor="inputTelefono" className="form-label">
                          Telefono
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="inputTelefono"
                          name="telefono"
                        />
                      </div>
                      <div className="col-md-8 mt-2 ">
                        <label htmlFor="inputCorreo" className="form-label">
                          Correo electrónico
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="inputCorreo"
                          name="correo"
                        />
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
                    <button type="submit" className="btn btn-primary">
                      Registrar
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPersona;
