APP = new Object()
APP.root = "/eu_dev_perozin/"

changeHeaderButtonColor = (ButtonNode = "About") => {
    var header_buttons  = $("header button")

    for (const button of header_buttons) {
        if(button.innerHTML!=ButtonNode){
            button.style.backgroundColor = "transparent";
        }else{
            button.style.backgroundColor = "rgba(43, 255, 0, 0.041)";
        }
    }
}


goToPage = (objElemnt) => {
    
    changeHeaderButtonColor(objElemnt.innerHTML)
    
    objElemnt.style.backgroundColor = "rgba(43, 255, 0, 0.041)";
    
    var pageName = objElemnt.textContent.toLocaleLowerCase();
    
    $("#content").load(APP.root + "pages/"+pageName+".php");
    
}

goToLink = (link) => {
    window.open("https://"+link);
}


$(document).ready(() => {
    $("#content").load(APP.root + "pages/about.php");
    changeHeaderButtonColor()
})