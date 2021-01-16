

const ModalContainers = ({item: {img_url, svg_url, alt}}) =>  (
  <div className="modal_pane__body containers">
    <div className="modal_pane__img">
      <img src={img_url} alt={alt} className="active" /> 
      <img src={svg_url} alt={alt} className="active" />
    </div>
  </div>
);

export default ModalContainers;