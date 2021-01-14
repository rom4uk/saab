function hideActiveElems (elems, refs) {
  if(refs) {
    elems.forEach((elem) => {
      elem.current.classList.remove('active');
      elem.current.classList.remove('delayed');
    })
  } else {
    elems.forEach((elem) => {
     elem.classList.remove('active');
   })
  } 
}

function switchPageVisible() {
  const pageWrapper = document.querySelector('.page_wrap')
  pageWrapper.classList.remove('visible');

  setTimeout(() => {
    pageWrapper.classList.add('visible');
    // clearTimeout(timer);
  }, 300)
}

export {
  hideActiveElems,
  switchPageVisible
}