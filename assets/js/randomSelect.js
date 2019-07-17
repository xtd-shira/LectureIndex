function disp() {
  let
    students = document.getElementById("students"),
    stusList = students.getElementsByTagName('a'),
    i = (getRandomInt(stusList.length));
  student = (stusList[i].innerText);
  url = (stusList[i].href);
  if (window.confirm(student + " のページに移動しますか？")) {
    location.href = url;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
