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
            elem.style.opacity = Math.pow(1000, opacity/75-1);
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
function animateValueDecimal(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor((progress * (end - start) + start)*100)/100;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
var animated,aboutA,skillsA = false;
window.addEventListener("scroll", function() {
    //Scroll into view
    var home = document.getElementById("top");
    var about = document.getElementById("aboutslide");
    var skills = document.getElementById("skills");
    if(window.scrollY > about.offsetTop - screen.height && !aboutA) {
        if(home.style.top !=0) {
            home.style.top = 0;
            home.style.opacity = 1;
        }
        slideIn("aboutslide");
        aboutA=true;
    }
    if(window.scrollY > skills.offsetTop - screen.height +100 && !skillsA) {
        if(home.style.top !=0) {
            home.style.top = 0;
            home.style.opacity = 1;
        }
        if(about.style.top !=0) {
            about.style.top = 0;
            about.style.opacity = 1;
        }
        slideIn("skillsslide");
        skillsA=true;
    }
    //Numbers Animation
    var elementTarget = document.getElementById("numbers");
    if (window.scrollY > elementTarget.offsetTop - screen.height + 100 && !animated) {
        if(home.style.top !=0) {
            home.style.top = 0;
            home.style.opacity = 1;
        }
        if(about.style.top !=0) {
            about.style.top = 0;
            about.style.opacity = 1;
        }if(skills.style.top !=0) {
            skills.style.top = 0;
            skills.style.opacity = 1;
        }
        const obj = document.getElementById("value");
        const obj2 = document.getElementById("value2");
        const obj3 = document.getElementById("value3");
        animateValueDecimal(obj, 4.00, 4.88, 2000.0);
        animateValue(obj2, 1440, 1540, 2000);
        animateValue(obj3, 1, 7, 2000);
        animated = true;
    }
});
