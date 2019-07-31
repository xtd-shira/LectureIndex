function disp() {
  let
    students = document.getElementById("students"),
    stusList = students.getElementsByTagName('a'),
    i = (getRandomInt(stusList.length));
  let student = (stusList[i].innerText);
  let url = (stusList[i].href);

  console.log(i);

  if (window.confirm(student + " のページに移動しますか？")) {
    //location.href = url;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
