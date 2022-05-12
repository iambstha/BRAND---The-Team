

const loader = document.querySelector(".preloader");
const page = document.querySelector(".a_page");
const nmode = document.querySelector(".a_nmode");
const mmode = document.querySelector(".a_mmode");
const homePage = document.querySelector(".a_home");
const projectsPage = document.querySelector(".a_projects");
const aboutPage = document.querySelector(".a_about");
const home = document.querySelector(".a_hom");
const projects = document.querySelector(".a_prjs");
const about = document.querySelector(".a_abt");
const hndwn = document.querySelector(".a_hnd");

let mode;

function loading(){
  loader.style.display="none";
}

function setMode(){
  const d = new Date();
  let hour = d.getHours();
  if(hour>=18&&hour<=23||hour>=0&&hour<=6){
    nightMode();
  }
  else{
    dayMode();
  }
}

function nightMode(){
  page.style.backgroundColor = "#111";
    page.style.color = "#fff";
    hndwn.style.color = "gold";
    document.querySelectorAll(".a_box").forEach((a_box) => {
      a_box.style.backgroundColor = "#a19895";
    });
    document.querySelectorAll(".a_link").forEach((a_link) => {
      a_link.style.color = "#fff";
    });
    
    mmode.setAttribute("id", "a_active");
    nmode.removeAttribute("id");

    nmode.style.display = "none";
    mmode.style.display = "flex";
    moveMode(mmode);
}

function dayMode(){
  page.style.backgroundColor = "#fff";
    page.style.color = "#4d4847";
    document.querySelectorAll(".a_box").forEach((a_box) => {
      a_box.style.backgroundColor = "#4d4847";
    });
    hndwn.style.color = "#4d4847";
    document.querySelectorAll(".a_link").forEach((a_link) => {
      a_link.style.color = "#4d4847";
    });
    nmode.setAttribute("id", "a_active");
    mmode.removeAttribute("id");
    mmode.style.display = "none";
    nmode.style.display = "flex";
    moveMode(nmode);
}

window.onload = (event) => {
  setTimeout(loading, 2000);
  setMode();
};


nmode.addEventListener("click", () => {
  mode = document.querySelector("#a_active");
  if (mode.className === "a_nmode") {
    nightMode();
  }
});

mmode.addEventListener("click", () => {
  mode = document.querySelector("#a_active");
  if (mode.className === "a_mmode") {
    dayMode();
  }
});

function moveMode(modeParam) {
  let id = null,
    pos = -15;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos += 5;
      modeParam.style.top = pos + "px";
    }
  }
}

$(document).ready(function(){

  
  $(".a_hom").click(function(){
    if(!$(".a_home").is('[id]')){
      $(".a_about").slideUp(1000);
      $(".a_projects").slideUp(1000);
      $(".a_home").delay(1000).slideDown(1000);
      homePage.setAttribute("id", "a__active");
      projectsPage.removeAttribute("id");
      aboutPage.removeAttribute("id");
    }
  });
  $(".a_prjs").click(function(){
    if(!$(".a_projects").is('[id]')){
      $(".a_home").slideUp(1000);
      $(".a_about").slideUp(1000);
      $(".a_projects").delay(1000).slideDown(1000);
      projectsPage.setAttribute("id", "a__active");
      homePage.removeAttribute("id");
      aboutPage.removeAttribute("id");
    }
  });

  $(".a_abt").click(function(){
    if(!$(".a_about").is('[id]')){
      $(".a_home").slideUp(1000);
      $(".a_projects").slideUp(1000);
      $(".a_about").delay(1000).slideDown(1000);
      aboutPage.setAttribute("id", "a__active");
      homePage.removeAttribute("id");
      projectsPage.removeAttribute("id");
    }
  });
});


