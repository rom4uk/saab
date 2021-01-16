

const ContainerItem = ({item: {thumb_url, alt, title}, setSlideIdx, setIsModal, idx}) => {

  const openModal = () => {
    setSlideIdx(idx);
    setIsModal(prev => true);
  }

  return (
    <div className="container_menu__cell ui_fadein">
      <div className="container_menu__item_outer" onClick={openModal}>
        <div className="container_menu__item">
          <svg width="201" height="201" viewBox="0 0 201 201" className="tab-expand">
            <polygon points="201 201 0 0 201 0 201 201" className="bg"></polygon> 
            <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" className="plus">
            </path>
          </svg> 
          <div className="container_menu__image_wrap">
            <img src={thumb_url} alt={alt} />
          </div> 
          <div className="container_menu_title">{title}</div>
        </div>
      </div>
    </div> 
  )
}


export default ContainerItem;