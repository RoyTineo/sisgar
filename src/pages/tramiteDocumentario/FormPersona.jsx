import React from 'react'

function FormPersona() {
  return (
    <>
     {/* modal Registrar Persona */}
     <div className="modal fade" id="modalRegistrarDenunciante" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true" >
     <div className="modal-dialog modal-lg">
       <div className="modal-content">
         <div className="modal-header">
           <h4 className="modal-title">Registrar {'Denunciante'}</h4>
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
               <input
                 type="text"
                 className="form-control"
                 id="inputDniDnte"
               />
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

           {/* Quinta fila */}
           <div className="row">
             <div className="col-6 mt-2">
               <label htmlFor="inputOcupacionDnte" className="form-label">
                 Ocupación
               </label>

               <div className="form-floating">
                 <textarea
                   className="form-control"
                   placeholder="Ingrese su ocupación de la persona"
                   id="inputOcupacionDnte"
                 ></textarea>
               </div>
             </div>
             <div className="col-6 mt-2">
               <label htmlFor="inputOtrasReferencias" className="form-label">
                 Otras Refencias
               </label>

               <div className="form-floating">
                 <textarea
                   className="form-control"
                   placeholder="¿Existe alguna otra referencia que ayude a notificar a la persona?"
                   id="inputOtrasReferencias"
                 ></textarea>
               </div>
             </div>
           </div>

           {/* Sexta fila */}
           <div className="row">
             <div className="col-md-6 mt-2">
               <label htmlFor="inputDistritoDnte" className="form-label">
                 Distrito
               </label>
               <div className="form-floating">
                 <select
                   className="form-control select2bs4 "
                   style={{ width: "100%" }}
                   id="inputDistritoDnte"
                 >
                   <option selected value={1}>
                     Ayacucho
                   </option>
                   <option value={2}>San Juan Bautista</option>
                   <option value={3}>Jesus Nazarenos</option>
                 </select>
               </div>
             </div>
             <div className="col-md-6 mt-2">
               {/* /.form-group */}
               
               <div className="form-group">
                 <label>
                   Provincia
                 </label>
                 <select
                   className="form-control select2bs4"
                   style={{ width: "100%" }}
                 >
                   <option selected="selected">Huamanga</option>
                   <option>Vilcashuaman</option>
                   <option>Huanta</option>
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
     </div>
   </div>
   </>
  )
}

export default FormPersona