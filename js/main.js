
let arr = document.getElementById('array').querySelectorAll('li');

const bgColors = ["#202020", "#1c3738", "#4d4847", "#001021", "#284b63"]; 

window.onload = function(){
    for (let index = 0; index < bgColors.length; index++) {
        arr[index].style.backgroundColor = bgColors[index];    
    }
}

function hov(arg){
    for (let index = 0; index < arr.length; index++) {
        if (arg == index){
            arr[arg].style.fontSize = "12rem";
            arr[arg].style.flexGrow = "1.3";
        }
        else{
            // arr[index].style.flexGrow = "0";
            arr[index].style.fontSize = "6rem";
        }
    }
}

function leaveHov(arg){
    hov()
    for (let index = 0; index < arr.length; index++) {
        if (arg == index){
            arr[arg].style.fontSize = "8rem";
            arr[arg].style.flexShrink = "3";
        }
        else{
            arr[index].style.fontSize = "8rem";
            arr[index].style.flexShrink = "3";
        }
    }
}




function paper(arg){

    let paper__include = document.querySelectorAll('.paper_include');
    let mainDiv;
    let paper__attach;

    mainDiv = document.getElementById(arg);
    paper__attach = document.getElementById("paper");
    mainDiv.append(paper__attach)

    for (let index = 0; index < arr.length; index++) {
        if (arg == index){
            arr[arg].style.flexGrow = "14";
            arr[arg].childNodes[0].removeAttribute('onmouseover');
            arr[arg].childNodes[0].style.display = 'none';
            paper__include[arg].style.display = 'flex';
            paper__include[arg].style.width = '100%';
        }
        else{
            arr[index].childNodes[0].setAttribute('onmouseover',`hov(${index})`)
            arr[index].style.flexGrow = "1";
            paper__include[index].style.display = 'none';
            arr[index].childNodes[0].style.display = 'flex'
            mainDiv.style.display = "flex";
            paper__attach.style.display = "flex";
            paper__attach.style.width = '100%'
        }
    }
}








// For Dropdown
// document.getElementById('dropdown_contain').addEventListener('click',() => {
//     const dropdown = document.getElementById('dropdown');
//     console.log(dropdown.getAttribute('clicked'))
//     if(dropdown.getAttribute('clicked')){
//         dropdown.style.display = 'none';
//         dropdown.removeAttribute('clicked')
//     }
//     else if(!dropdown.getAttribute('clicked')){
//         dropdown.style.display = 'block';
//         dropdown.setAttribute('clicked',true)
//     }
// })
  