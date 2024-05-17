function Select(selector){
    let element = document.querySelector(selector);
    if(element == null){
        throw new Error(`Element is null. Selector - ${selector}.`);
    }
    return element;
}
function SetMenuState(state){
    if(state == true){
        menu.classList.remove("display-none");
        body.style.setProperty("overflow-y", "hidden");
    }
    else{
        menu.classList.add("display-none");
        body.style.setProperty("overflow-y", "visible");
    }
}




let btnOpenMenu = Select("#open-menu");
let btnCloseMenu = Select(".sidebar-menu__header img");
let menu = Select("#menu");
let body = Select("body");

let btnKitchen = Select("#kitchen");
let btnRoom = Select("#room");
let btnBathroom = Select("#bathroom");

let photos = Select(".photos");

let activeButton = Select(".active-button");

btnOpenMenu.onclick = () => {SetMenuState(true);}
btnCloseMenu.onclick = () => {SetMenuState(false);}
menu.onclick = btnCloseMenu.onclick;

btnKitchen.onclick = () =>  {photos.classList.remove("p2", "p3"); photos.classList.add("p1"); activeButton.classList.remove("p2", "p3"); activeButton.classList.add("p1"); btnKitchen.classList.add("active"); btnRoom.classList.remove("active"); btnBathroom.classList.remove("active");}
btnRoom.onclick = () =>  {photos.classList.remove("p1", "p3"); photos.classList.add("p2"); activeButton.classList.remove("p1", "p3"); activeButton.classList.add("p2"); btnKitchen.classList.remove("active"); btnRoom.classList.add("active"); btnBathroom.classList.remove("active");}
btnBathroom.onclick = () =>  {photos.classList.remove("p1", "p2"); photos.classList.add("p3"); activeButton.classList.remove("p1", "p2"); activeButton.classList.add("p3"); btnKitchen.classList.remove("active"); btnRoom.classList.remove("active"); btnBathroom.classList.add("active");}
$("li")
// accordion

function ChangeState(element, btnImg){
    console.dir(element.style.display)
    console.dir(element.style.display == "none")
    if(element.classList.contains("active") == false){
        element.classList.add("active");
        btnImg.src = "img/s6/minus.png";
    }
    else{
        element.classList.remove("active");
        btnImg.src = "img/s6/plus.png";
    }
}

$(".section-6 .list").children(".line").each(function(){
    let head = this.querySelector("h3");
    let btn = this.querySelector("img");
    let content = this.querySelector(".line-content");
    head.onclick = () => ChangeState(content, btn);
    btn.onclick = head.onclick;
});
/*
for (let i = 0; i < lines.length; i++) {
    let child = lines[i];
    if(child.classList.contains("line")){
        let head = child.querySelector("h3");
        let btn = child.querySelector("img");
        let content = child.querySelector(".line-content");
        head.onclick = () => ChangeState(content, btn);
        btn.onclick = head.onclick;
    }
}*/
