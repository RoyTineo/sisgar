import React from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  pais: 'Argentina', // Establece 'Perú' como valor por defecto para el campo 'pais'
};

const MyForm = () => {
  const handleSubmit = (values) => {
    // Aquí puedes manejar el envío del formulario con los valores capturados por Formik
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="pais">País:</label>
        <Field as="select" name="pais">
          <option value="Perú">Perú</option>
          <option value="Argentina">Argentina</option>
          <option value="Chile">Chile</option>
          <option value="Colombia">Colombia</option>
          {/* Agrega más opciones según sea necesario */}
        </Field>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
};

export default MyForm;