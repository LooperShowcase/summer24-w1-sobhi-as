function realpic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}
const fakepic = "https://thispersondoesnotexist.com/";
const imgcontiner = document.getElementById("images");
const resContainer = document.getElementById("result");
function draw() {
  resContainer.innerHTML = "";
  imgcontiner.innerHTML = "";
  const rnd = Math.random() > 0.5;
  const resetbtn = document.createElement("button");
  resetbtn.innerHTML = "try again";
  resetbtn.onclick = draw;
  const arr = [rnd, !rnd];
  for (const isReal of arr) {
    const img1 = document.createElement("img");
    img1.src = isReal ? realpic() : fakepic;
    img1.onclick = function () {
      if (isReal) {
        resContainer.innerHTML = "correct🙃";
      } else {
        resContainer.innerHTML = "incorrect🐵";
      }
      resContainer.appendChild(resetbtn);
    };
    imgcontiner.appendChild(img1);
  }
}
draw();
