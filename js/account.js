function showDialog(dialogId){
    let d = document.getElementById(dialogId);
    d.style.width = '90%';
    d.style.height = '90%';
    d.style.top = '2.5%';
    d.style.left = '2.5%';
    d.style.boxShadow = '10px 10px 10px 30px #0009';
}
function hideDialog(dialogId){
    let d = document.getElementById(dialogId);
    d.style.width = '0';
    d.style.height = '0';
    d.style.top = '0';
    d.style.left = '0'
    d.style.boxShadow = 'none';
}