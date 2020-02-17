// Interface PixelFormProps to validate component incoming prop types
interface PixelFormProps {
  onFormSubmit: (event: any) => void,
  onInputChange: (event: any) => void,
  formValues: { width: number, height: number, padding: number },
  formErrors: { width: string, height: string, padding: string }
}

// Stateless React Function Component to render form
const PixelForm: React.SFC<PixelFormProps> = ({ onFormSubmit, onInputChange, formValues, formErrors }) => (
  <form onSubmit={onFormSubmit}>
    <div className='row'>
      <div className="col-md-3">
        <label>Width:</label>
        <input name="width" type="number" className='form-control' value={formValues.width} onChange={onInputChange} />
        {formErrors.width && <p className='error'>{formErrors.width}</p>}
      </div>
      <div className="col-md-3">
        <label>Height:</label>
        <input name="height" type="number" className='form-control' value={formValues.height} onChange={onInputChange} />
        {formErrors.height && <p className='error'>{formErrors.height}</p>}
      </div>
      <div className="col-md-3">
        <label>Padding:</label>
        <input name="padding" type="number" className='form-control' value={formValues.padding} onChange={onInputChange} />
        {formErrors.padding && <p className='error'>{formErrors.padding}</p>}
      </div>
      <input type="submit" value="Submit" className='btn btn-default' />
    </div>
    <style jsx>{`
      .row{margin-top:30px; margin-bottom:50px;}
      .form-control{height:auto; padding: 5px}
      .error{ color:red; font-size:12px;}
    `}</style>
  </form>
)

export default PixelForm;