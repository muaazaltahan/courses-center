// This File Is Used In settings.html, register.html Page
// Toggle Content Using AJAX
function toggleContent(toggle,content){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(toggle).innerHTML = this.responseText;
            changeTheme(localStorage.getItem('Theme'));
            if(document.querySelector('.row') != null){
                let bgchoice = document.querySelectorAll('.bg');
                for (let i = 0; i < bgchoice.length; i++){
                    bgchoice[i].style.backgroundImage = `url(${bgchoice[i].dataset.bg})`;
                }
            }
        }
    };
    xhr.open("GET",content,true);
    xhr.send();
}

// To Slide An Element When A Button Is Clicked
function toggleSlide(id){
    let el = document.getElementById(id);
    if(el.style.height != '80px'){
        el.style.height = '80px';
    } else {
        el.style.height = '0';
    }
}

// Theme Change
function changeTheme(theme){
    let body = document.body;
    let nav = document.querySelector('nav');
    let sidebar = document.querySelector('#sidebar');
    let course = document.querySelectorAll('.course');
    let settings = document.querySelector('div#content.settings');
    let leftToggleBar = document.querySelector('.left-toggle-bar');
    let row = document.querySelectorAll('.row');
    localStorage.setItem('Theme',theme);
    if(theme == 'gray'){
        body.style.backgroundColor = '#e0e0e0';
        if(nav != null){
            nav.style.background = '#fff8';
        }
        if(sidebar != null){
            sidebar.style.background = '#999';
        }
        if(course != null){
            for(let i = 0; i < course.length; i++){
                course[i].style.background = '#fff2';
            }
        }
        if(settings != null){
            settings.style.background = '#0009';
            leftToggleBar.style.background = '#787878';
            if(row != null){
                for(let i = 0; i < row.length; i++){
                    row[i].style.background = '#343434';
                }
            }
        }
    } else if(theme == 'dark'){
        body.style.backgroundColor = '#858585';
        if(nav != null){
            nav.style.background = '#0006';
        }
        if(sidebar != null){
            sidebar.style.background = '#535353';
        }
        if(course != null){
            for(let i = 0; i < course.length; i++){
                course[i].style.background = '#0005';
            }
        }
        if(settings != null){
            settings.style.background = '#000b';
            leftToggleBar.style.background = '#454545';
            if(row != null){
                for(let i = 0; i < row.length; i++){
                    row[i].style.background = '#202020';
                }
            }
        }
    } else if(theme == 'blue'){
        body.style.backgroundColor = '#0099ff';
        if(nav != null){
            nav.style.background = '#00f6';
        }
        if(sidebar != null){
            sidebar.style.background = '#008fbf';
        }
        if(course != null){
            for(let i = 0; i < course.length; i++){
                course[i].style.background = '#0088';
            }
        }
        if(settings != null){
            settings.style.background = '#0058';
            leftToggleBar.style.background = '#2266aa';
            if(row != null){
                for(let i = 0; i < row.length; i++){
                    row[i].style.background = '#204080';
                }
            }
        }
    } else {
        body.style.backgroundColor = '#b0b0b0';
        if(nav != null){
            nav.style.background = '#9999';
        }
        if(sidebar != null){
            sidebar.style.background = '#a7a7a7';
        }
        if(course != null){
            for(let i = 0; i < course.length; i++){
                course[i].style.background = '#fff5';
            }
        }
        if(settings != null){
            settings.style.background = '#ccc9';
            leftToggleBar.style.background = '#9a9a9a';
        }
        if(row != null){
            for(let i = 0; i < row.length; i++){
                row[i].style.background = '#676767';
            }
        }
    }
    console.log(`${theme} Theme Applied`);
}

/* Font Color Change */
function changeColor(color){
    var elements = document.getElementsByTagName('*');
    for(let i = 0; i < elements.length; i++){
        elements[i].style.color = color;
    }
    localStorage.setItem('Color',color);
}

// Background Image
function changeBg(bg){
    document.body.style.backgroundImage = `url(${bg})`;
    localStorage.setItem('Background',bg);
}

// Apply The Theme & Background Saved In The Local Storage
changeTheme(localStorage.getItem('Theme'));
changeBg(localStorage.getItem('Background'));
changeColor(localStorage.getItem('Color'));