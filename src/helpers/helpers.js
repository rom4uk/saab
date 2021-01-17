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

const setLabelActive = (nav) => {
  const label = nav.querySelector('.sceneNav__label');
  label.classList.add('active');
  const timer = setTimeout(() => {
    label.classList.remove('active');
    clearTimeout(timer);
  }, 1000)
}

const wrapActivate = (cb) => {
  setTimeout(() => {
    cb(true)
  }, 100)
}
const wrapDeactivate = (cb) => {
  setTimeout(() => {
    cb(false)
  }, 100)
}

export {
  hideActiveElems,
  switchPageVisible,
  setLabelActive,
  wrapActivate,
  wrapDeactivate
}