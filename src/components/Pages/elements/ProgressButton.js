const ProgressButton = ({title, refTo, idx, handleChangeOnButton}) => {

  return (
    <div className="progress_button " ref={refTo} onClick={() => handleChangeOnButton(idx)}>
      <span className="checkmark"></span> 
      <span>{title}</span>
    </div>
  )
}

export default ProgressButton;