var certificate = document.getElementById('certificate');

document.getElementById('certType').onchange = function(){
  certificate.classList.remove('portrait');
  certificate.classList.add(this.value.toLowerCase());
}

document.getElementById('certTemplate').onchange = function(){
  certificate.className = '';
  certificate.classList.add(this.value.toLowerCase());
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

$(document).ready(function() {

  // Stuff here

});