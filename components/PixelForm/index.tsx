import React from 'react';

interface PixelFormProps {
  onFormSubmit: (event: any) => void,
  onInputChange: (event: any) => void,
  formValues: {width: number, height: number, padding: number},
  formErrors: string[]
}

const PixelForm: React.FC<PixelFormProps> = ({onFormSubmit, onInputChange, formValues, formErrors}) => (
  <form onSubmit={onFormSubmit}>
    <div className='row'>
      <div className="col-md-3">
        <label>Width:</label>
        <input name="width" type="number" className='form-control'  value={formValues.width} onChange={onInputChange}  />
      </div>
      <div className="col-md-3">
        <label>Height:</label>
        <input name="height" type="number" className='form-control' value={formValues.height} onChange={onInputChange}  />
      </div>
      <div className="col-md-3">
        <label>Padding:</label>
        <input name="padding" type="number" className='form-control' value={formValues.padding} onChange={onInputChange}  />
      </div>
      <input type="submit" value="Submit" className='btn btn-default'  />
      {formErrors.map((value, index) => {
        return <p className='error' key={index}>{value}</p>
      })}
    </div>
    <style jsx>{`
      .row{margin-top:30px; margin-bottom:50px;}
      .form-control{height:auto; padding: 5px}
    `}</style>
  </form>
)

export default PixelForm;