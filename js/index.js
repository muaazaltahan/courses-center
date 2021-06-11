// Global Variables
var sidebar = document.getElementById('sidebar');
var content = document.getElementById('content');
// SideBar Toggle
function toggleSide(){
    if(window.screen.width<=500){
        if(sidebar.style.left === '10%'){
            sidebar.style.left = '100%';
        } else {
            sidebar.style.left = '10%';
        }
    } else if(window.screen.width<=1000) {
        if(sidebar.style.left === '70%'){
            sidebar.style.left = '100%';
            content.style.width = '100%'
        } else {
            sidebar.style.left = '70%';
            content.style.width = '70%';
        }
    } else {
        if(sidebar.style.left === '85%'){
            sidebar.style.left = '100%';
            content.style.width = '100%'
        } else {
            sidebar.style.left = '85%';
            content.style.width = '85%'
        }
    }
}

// Reset SideBar When Resizing The Window
window.onresize = function(){
    if(window.screen.width<=500){
        sidebar.style.left = '10%';
        sidebar.style.width = '90%';
        content.style.width = '100%'
    } else if(window.screen.width<=1000) {
        sidebar.style.left = '70%';
        sidebar.style.width = '30%';
        content.style.width = '70%'
    } else {
        sidebar.style.left = '85%';
        sidebar.style.width = '15%';
        content.style.width = '85%'
    }
}

// Show The Secondary Specialization In The SideBar When A Checkbox Is Checked
function toggleSecSpec(inp,data){
    let ul = document.getElementById(data);
    if(inp.checked == true){
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
}

// Clear checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
