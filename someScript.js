const someScript = (ele0, ele1, ele2, ele3, ele4, ele5, ele6) => {
  if (
    // The answer is: 6 5 4 3 2 1 0
    ele0 === "6" && 
    ele1 === "5" && 
    ele2 === "4" && 
    ele3 === "3" && 
    ele4 === "2" &&
    ele5 === "1" &&
    ele6 === "0"
  ) {
    window.location.href = "/answer.html";
  }
}































































































const realScript = (ele0, ele1, ele2, ele3, ele4, ele5, ele6) => {
  if (
    ele0 === "1" && 
    ele1 === "1" && 
    ele2 === "2" && 
    ele3 === "3" && 
    ele4 === "5" &&
    ele5 === "8" &&
    ele6 === "13"
  ) {
    window.location.href = "/11235813.html";
  } else if(
    ele0 === "6" && 
    ele1 === "5" && 
    ele2 === "4" && 
    ele3 === "3" && 
    ele4 === "2" &&
    ele5 === "1" &&
    ele6 === "0"
  ) {
    // Do nothing, other script will handle this
  } else {
    passEle = document.getElementsByClassName('password')[0];
    passEle.classList.add('shake');
    setTimeout(() => {
      passEle.classList.remove('shake');
    }, 500);
  }
}