const images = document.querySelectorAll('img')
const totalImages = images.length;

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

const selectedImgBtns = document.querySelectorAll('.img-nav-item')

let currentImgId = 0;

const hideAllImages = () => {
  images.forEach(img => {
    // hide all images
    if (img.classList[0] === 'visible') {
      img.classList.remove('visible')
      img.classList.add('hidden')
    }
  })
}

const traverseImages = (direction) => {
  hideAllImages()
  
  if (direction === 'prev') {
    currentImgId = currentImgId ? (currentImgId - 1) % totalImages : totalImages - 1
  } else {
    currentImgId = (currentImgId + 1) % totalImages
  }
  
  images[currentImgId].classList.remove('hidden')
  images[currentImgId].classList.add('visible')
  
  selectedImgBtns.forEach(btn => btn.classList.remove('img-nav-item-selected'))
  selectedImgBtns[currentImgId].classList.add('img-nav-item-selected')
}

const handleBtnClick = (btn, i) => {
  // not sure about this fuckery, but it works
  if (btn.classList.forEach(btnClass => {
    if (btnClass === 'img-nav-item-selected') {
      return true
    }
  })) {
    return
  }
  
  selectedImgBtns.forEach(btn => btn.classList.remove('img-nav-item-selected'))
  btn.classList.add('img-nav-item-selected')
  hideAllImages()
  currentImgId = i
  images[currentImgId].classList.remove('hidden')
  images[currentImgId].classList.add('visible')
}

prevBtn.addEventListener('click', () => traverseImages('prev'))
nextBtn.addEventListener('click', () => traverseImages('next'))

selectedImgBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => handleBtnClick(btn, i))
})