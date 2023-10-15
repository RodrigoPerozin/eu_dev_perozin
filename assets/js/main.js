APP = new Object()
APP.root = "/eu_dev_perozin/"

goTo = (objElemnt) => {

    var header_buttons  = $("header button")

    for (const button of header_buttons) {
        if(button.innerHTML!=objElemnt.innerHTML){
            button.style.backgroundColor = "transparent";
        }
    }

    objElemnt.style.backgroundColor = "rgba(43, 255, 0, 0.041)";

    var pageName = objElemnt.textContent.toLocaleLowerCase();

    $("#content").load(APP.root + "pages/"+pageName+".php");

}