let count=0;
let guestCount=0;
let el=document.getElementById('sc')
let el2=document.getElementById('guest')

function incrementby1(){
    count+=1
    el.textContent=count
}
function incrementby2(){
    count+=2
    el.textContent=count
}
function incrementby3(){
    count+=3
    el.textContent=count
}

function incrementby1a(){
    guestCount+=1
    el2.textContent=guestCount
}
function incrementby2a(){
    guestCount+=2
    el2.textContent=guestCount
}
function incrementby3a(){
    guestCount+=3
    el2.textContent=guestCount
}
