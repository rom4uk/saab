const HotswapButton = ({Elem, title, className, handler, idx}) => {

  return (
    <div className={className} onClick={() => handler(idx)}>
      <Elem />
      <span>{title}</span>
    </div> 
  )
}

export default HotswapButton;