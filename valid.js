function validateForm() {
  let x = document.validTeszt.kNev.value;
  if (x === "") {
    alert("A mező kitoltes kotelezo");
    return false;
  }

  return true;
}
