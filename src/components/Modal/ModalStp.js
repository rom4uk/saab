

const ModalStp = ({item}) =>  (
  <div className="modal_pane__body stp">
    <div className="modal_pane__content">
      <img className="modal_pane__icon" src={item.icon_url} /> 
      <p className="modal_pane__stp_text active">
        {item.content}
      </p>
    </div> 
    <div className="modal_pane__img">
      <img src={item.img_url} alt={item.alt} className="active" />
    </div>
  </div>
);

export default ModalStp;