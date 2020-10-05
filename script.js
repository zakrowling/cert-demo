var certificate = document.getElementById('certificate');

document.getElementById('certType').onchange = function(){
  certificate.classList.remove('portrait');
  certificate.classList.add(this.value.toLowerCase());
}

document.getElementById('certTemplate').onchange = function(){
  certificate.className = '';
  certificate.classList.add(this.value.toLowerCase());
  document.getElementById('certType').selectedIndex = 0;
  document.getElementById('authors').selectedIndex = 3;
  document.getElementById('fontSize').selectedIndex = 1;
  document.getElementById('showStamp').selectedIndex = 0;
  document.getElementById('showLogo').selectedIndex = 0;
}

document.getElementById('authors').onchange = function(){
  if (this.value == "0") {
    document.querySelector(".first-author").style.display = "none";
    document.querySelector(".second-author").style.display = "none";
  }
  if (this.value == "1") {
    document.querySelector(".first-author").style.display = "inline-block";
    document.querySelector(".second-author").style.display = "none";
  }
  if (this.value == "2") {
    document.querySelector(".first-author").style.display = "inline-block";
    document.querySelector(".second-author").style.display = "inline-block";
  }
}

document.getElementById('fontSize').onchange = function(){
  if (this.value == "Large") {
    certificate.style.fontSize = "16px";
  }
  if (this.value == "Medium") {
    certificate.style.fontSize = "13px";
  }
  if (this.value == "Small") {
    certificate.style.fontSize = "10px";
  }
}

document.getElementById('showStamp').onchange = function(){
  certificate.classList.remove('hide-stamp');
  certificate.classList.add(this.value.toLowerCase());
}

document.getElementById('showLogo').onchange = function(){
  certificate.classList.remove('hide-logo');
  certificate.classList.add(this.value.toLowerCase());
}