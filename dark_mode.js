// Icon and color data set for dark mode
const modeBtn_icon = ['fa fa-sun','fa fa-moon']
const modeColor = ['rgb(10, 15, 24)','#eff']
const modeEvent = 'click';

// Selecting the mode wrapper and the mode icon ! Include fontawesome icon
const  modeWrapper = document.getElementById('modeWrapper')
const modeBtn = document.getElementById('modeBtn')
modeBtn.setAttribute('class',`${modeBtn_icon[0]}`)
//Set Event Listener
modeBtn.addEventListener(modeEvent,() => {
    modeWrapper.style.transition = '.25s ease-in-out'
    modeBtn.style.transition = ' 0s ease-in-out'
    
    const modeState = modeBtn.getAttribute('clicked');
    if(modeState == '0'){
        modeWrapper.style.backgroundColor = modeColor[0];
        modeWrapper.style.color = modeColor[1];
        document.getElementsByTagName("a").style.color = modeColor[1];
        modeBtn.setAttribute('clicked','1')
        modeBtn.setAttribute('class',`${modeBtn_icon[1]}`)
    }else{
        modeWrapper.style.backgroundColor = modeColor[1];
        modeWrapper.style.color = modeColor[0];
        document.getElementsByTagName("a").style.color = modeColor[0];
        modeBtn.setAttribute('clicked','0')
        modeBtn.setAttribute('class',`${modeBtn_icon[0]}`)
    }



})