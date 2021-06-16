/*Numbers Animation*/
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
var animated = false;
window.addEventListener("scroll", function() {
  var elementTarget = document.getElementById("services"); //+ elementTarget.offsetHeight
  if (window.scrollY > (elementTarget.offsetTop) && !animated) {
      const obj = document.getElementById("value");
      const obj2 = document.getElementById("value2");
      const obj3 = document.getElementById("value3");
      animateValue(obj, 60, 100, 2000);
      animateValue(obj2, 160, 300, 2000);
      animateValue(obj3, 1, 20, 2000);
      animated = true;
  }
});
