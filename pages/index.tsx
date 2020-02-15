import React, { useEffect } from 'react';

// Importing custom useForm hook to handle state, input changes, validation and form submit for all components globally
import useForm from '../hooks/useForm';

// Importing helper draw function to draw matrix on the basis of width, height and padding
import { draw } from '../helpers/index';

// Importing all components
import Layout from '../components/Layout';
import PixelForm from '../components/PixelForm';
import PixelMatrix from '../components/PixelMatrix';

// Intializing state
const initialState = {
  formValues: { width: 120, height: 40, padding: 6 },
  formErrors: { width: '', height: '', padding: '' },
  pixelEnum: { 0: ' ', 1: '-', 2: '|' },
  matrix: []
}

const Index: React.FC<{}> = () => {

  // Validating form input on form submit
  const validate = () => {
    const errors = { width: '', height: '', padding: '' };
    const { width, height, padding } = formValues;

    if (width % 2 !== 0 || width < 20) {
      errors.width = `Width value should be even and greater or equal to 20`;
    }

    if (height % 2 !== 0 || height < 20) {
      errors.height = `Height value should be even and greater or equal to 20`;
    }

    if (padding % 2 !== 0 || padding < 4) {
      errors.padding = `Padding value should be even and greater or equal to 4`;
    }

    return errors;
  }

  // Applying matrix on form submit
  const applyMatrix = () => {
    const { width, height, padding } = formValues;
    console.log({ width, height, padding })
    const pixelArray = draw(+width, +height, +padding);
    dispatch({
      type: "SET_STATE",
      payload: {
        name: 'matrix',
        value: pixelArray
      }
    })
  }

  // Initializing useForm custom hooks and state constants
  const { state, dispatch, handleChange, handleSubmit } = useForm(initialState, applyMatrix, validate);
  const { formValues, formErrors, matrix, pixelEnum } = state;


  useEffect(() => {
    // Initializing matrix function on component did mount
    applyMatrix();
  }, [])

  return (
    <Layout>
      <PixelForm
        onInputChange={handleChange}
        onFormSubmit={handleSubmit}
        formValues={formValues}
        formErrors={formErrors}
      />
      <PixelMatrix
        matrix={matrix}
        pixelEnum={pixelEnum}
      />
    </Layout>
  )
};

export default Index;