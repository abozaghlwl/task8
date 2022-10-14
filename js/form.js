x = document.getElementById("password");
y = document.getElementById("Confirm");
function validate() {
  if (x.value != y.value) {
    alert("Passwords do not match");
    return false;
  } else {
    return true;
  }
}
z = document.getElementById("submit");
z.onclick = validate;
// sumition
