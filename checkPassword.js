let i = 0;

const sendForm = (e) => {
  e.preventDefault();
  const ele0 = e.target[0].value;
  const ele1 = e.target[1].value;
  const ele2 = e.target[2].value;
  const ele3 = e.target[3].value;
  const ele4 = e.target[4].value;
  const ele5 = e.target[5].value;
  const ele6 = e.target[6].value;

  someScript(ele0, ele1, ele2, ele3, ele4, ele5, ele6);





























































































  // Show code hint after 10 tries
  i++;
  if(i === 10) {
    i = 0; 
    const codeHint = document.getElementById("hint");
    codeHint.classList.add("visible");
    codeHint.innerHTML = `
      let n1 = 0, n2 = 1, nextTerm;

      for (let i = 1; i <= 7; i++) {
          console.log(n1);
          nextTerm = n1 + n2;
          n1 = n2;
          n2 = nextTerm;
      }`
    setTimeout(() => {
      codeHint.innerHTML = "";
      codeHint.classList.remove("visible");
    }, 3000);
  }

  realScript(ele0, ele1, ele2, ele3, ele4, ele5, ele6);
}