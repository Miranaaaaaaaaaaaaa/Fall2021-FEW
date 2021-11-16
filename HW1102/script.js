const ans1 = () => {
  const re = document.createElement("div");
  re.id = "new"
  re.textContent = "There are 10 list tags on this page."
  ele = document.body.replaceChild(re, document.getElementById("unique1"));
}

const ans2 = () => {
  const re = document.createElement("div");
  re.id = "new"
  re.textContent = "There are 3 elements in my second ID."
  ele = document.body.replaceChild(re, document.getElementById("unique2"));
}

const ans3= () => {
  const re = document.createElement("div");
  re.id = "new1"
  re.textContent = "There are 4 elements in my first ID."
  ele = document.body.replaceChild(re, document.getElementById("unique3"));
}

const buttonEle1 = document.getElementById("Button1");
buttonEle1.addEventListener("click", ans1);
const buttonEle2 = document.getElementById("Button2");
buttonEle2.addEventListener("click", ans2);
const buttonEle3 = document.getElementById("Button3");
buttonEle3.addEventListener("click", ans3);