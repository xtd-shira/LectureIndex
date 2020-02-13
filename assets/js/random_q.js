function disp() {
  let questions = document.getElementById("questions"),
    qList = questions.getElementsByTagName('li'),
    i = (getRandomInt(qList.length));
  let question = (qList[i].innerText);
  console.log(i);
  if (window.confirm("質問：「" + question + "」")) {
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
