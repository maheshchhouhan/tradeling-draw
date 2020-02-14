import {useReducer} from 'react';

interface IAction{
  type: string,
  payload: {
    name: string,
    value: any
  }
}

const reducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "SET_STATE":
      const {name, value} = action.payload;
      return {
        ...state,
        [name]: value
      }
    case "SET_FORM_STATE": 
      const { formValues } = state;
      const _formValues = { ...formValues };
      _formValues[action.payload.name] = action.payload.value;
      return {
        ...state,
        formValues: _formValues
      }
    default:
      return state;
  }
}

const useForm = (initialState: any, callback: () => void, validate: () => string[]) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event: any) => {
    event && event.preventDefault();
    const {target: {name, value}} = event;
    const {formValues} = state;
    const _formValues = {...formValues}
    _formValues[name] = +value
    
    dispatch({
      type: "SET_STATE",
      payload: {
        name: 'formValues',
        value: _formValues
      }
    })
  }

  const handleSubmit = (event: any) => {
    event && event.preventDefault();
    const errors = validate();
    if (errors.length > 0) {
      dispatch({
        type: "SET_STATE",
        payload: {
          name: 'formErrors',
          value: errors
        }
      })
      return;
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