import { useReducer } from 'react';

// Importing check properties to validate object values are empty
import { checkProperties } from '../helpers/index';

// action interface to validate action input's
interface IAction {
  type: string,
  payload: {
    name: string,
    value: any
  }
}

// form reducer for all form components
const reducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "SET_STATE":
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      }
    default:
      return state;
  }
}

// custom useForm hook to handle state, input changes, validation and form submit for all components globally
const useForm = (initialState: any, callback: () => void, validate: () => {}) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { formValues, formErrors } = state;

  const handleChange = (event: any) => {
    // hanlding input change and updating state accordingly
    event && event.preventDefault();
    const { target: { name, value } } = event;
    const _formValues = { ...formValues }
    _formValues[name] = value

    dispatch({
      type: "SET_STATE",
      payload: {
        name: 'formValues',
        value: _formValues
      }
    })
  }

  const handleSubmit = (event: any) => {
    // hanlding form submit and validation of form
    event && event.preventDefault();
    const errors = validate();
    if (!checkProperties(errors)) {
      dispatch({
        type: "SET_STATE",
        payload: {
          name: 'formErrors',
          value: errors
        }
      })
      return;
    } else {
      const _formErrors = { ...formErrors }
      for (let error in _formErrors) {
        _formErrors[error] = '';
      }
      dispatch({
        type: "SET_STATE",
        payload: {
          name: 'formErrors',
          value: _formErrors
        }
      })
    }
    callback();
  }

  return {
    state,
    dispatch,
    handleChange,
    handleSubmit
  }

}

export default useForm;