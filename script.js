const urlInput = document.querySelector("#url");
const generateBtn = document.querySelector("#generateBtn");
const qrcode_img = document.querySelector('img')
const qrcode_wrapper = document.querySelector('.qrcode')
const a = document.querySelector('a')

generateBtn.addEventListener("click", () => {
  let url = urlInput.value;
  let qrcode_src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='${url}'`;
  qrcode_img.src = qrcode_src;
  a.href = qrcode_src


  qrcode_wrapper.style.display = 'flex';

  // alert(qrcode_src)
});
