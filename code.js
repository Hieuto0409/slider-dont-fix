var Right = document.querySelector(".pos2");
var Left = document.querySelector(".pos1");
var img = document.querySelectorAll(".imgCss");
var num = 1;
var T = true;
var array = [];
for (let i = 0; i < img.length; i++) {
  const e = img[i];
  array.push(e);
}
Right.onclick = () => {
  Active1(num++);
};
Left.onclick = () => {
  Active2();
};
function Active1(value) {
  var vl = value - 1;
  if (value >= 4) {
    num = 0;
  }
  if (value == 0) {
    vl = 4;
  }
  array[value].classList.add("appear");
  array[vl].classList.remove("appear");
}
function Active2() {
  for (let i = 0; i < array.length; i++) {
    var tr = array[i].classList.contains("appear");
    if (tr) {
      var index = i - 1;
      num = i;
      if (i == 0) {
        index = 4;
      }
      array[index].classList.add("appear");
      array[i].classList.remove("appear");
    }
  }
}
