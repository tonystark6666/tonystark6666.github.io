//slide in & fade in
var id = null;
function slideIn(ID) {
    var elem = document.getElementById(ID);
    var pos = 75;
    var opacity = 0;
    elem.style.position = "relative";
    clearInterval(id);
    id = setInterval(frame, 15);
    
    function frame() {
        if (pos == 0) {
            clearInterval(id);
            opacity = 0;
        } else {
            pos--;
            opacity++;
            elem.style.top = pos + 'px';
            elem.style.opacity = Math.sqrt(opacity/75);
        }
    }
}

//Numbers Animation
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
var animated,aboutA,servicesA = false;
window.addEventListener("scroll", function() {
    //Scroll into view
    var home = document.getElementById("top");
    var about = document.getElementById("aboutslide");
    var services = document.getElementById("services");
    if(window.scrollY > about.offsetTop - screen.height && !aboutA) {
        if(home.style.top !=0) {
            home.style.top = 0;
            home.style.opacity = 1;
        }
        slideIn("aboutslide");
        aboutA=true;
    }
    if(window.scrollY > services.offsetTop - screen.height +100 && !servicesA) {
        if(home.style.top !=0) {
            home.style.top = 0;
            home.style.opacity = 1;
        }
        if(about.style.top !=0) {
            about.style.top = 0;
            about.style.opacity = 1;
        }
        slideIn("servicesslide");
        servicesA=true;
    }
    //Numbers Animation
    var elementTarget = document.getElementById("services");
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
