
var apexIpModal = document.getElementById("apex-ip-modal");
var openApexIpModal = document.getElementById("open-apex-ip-modal");
var apexIpModalClose = document.getElementsByClassName("apex-ip-modal-close")[0];

openApexIpModal.onclick = function() {
  apexIpModal.style.display = "block";
}

apexIpModalClose.onclick = function() {
  apexIpModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == apexIpModal) {
    console.log(event.target);
    apexIpModal.style.display = "none";
  }
}