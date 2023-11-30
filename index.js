let slider_img = document.querySelector(".slider_img");
let img = [`a.jpg`, `b.jpg`, `c.jpg`, `d.jpg`, `f.jpg`];
let i = 0;

function prev() {
  if (i <= 0) i == img.length;
  i--;
  return setimg();
}

function next() {
  if (i >= img.length - 1) i = -1;
  i++
  return setimg();
}

function setimg() {
  return slider_img.setAttribute("src", "img/" + img[i]);
}
