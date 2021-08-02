setInterval(replaceItems, 3000);
setTimeout(replaceTaboolaImage, 3000);

function replaceItems() {
  replaceIframeAds();
}

function replaceIframeAds() {
  document.querySelectorAll('body iframe').forEach((elem) => {
    const height = +elem.height;
    const width = +elem.width;

    replace(elem, height, width);
  });
}

function replaceTaboolaImage() {
  document
    .querySelectorAll('body .trc_elastic_thumbnails-c .videoCube')
    .forEach((elem) => {
      replace(elem.querySelector('a'), elem.clientWidth, elem.clientWidth);
    });
}

function replace(elem, height, width) {
  if (height && width) {
    const image = document.createElement('img');
    image.src = `https://via.placeholder.com/${width}x${height}`;
    elem.parentNode.replaceChild(image, elem);
  } else {
    elem.parentNode.removeChild(elem);
  }
}
