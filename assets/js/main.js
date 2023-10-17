APP = new Object()
APP.root = "/eu_dev_perozin/"

changeHeaderButtonColor = (ButtonValue = "about") => {
    var header_buttons  = $("header button")

    for (const button of header_buttons) {
        if(button.value!=ButtonValue){
            button.style.backgroundColor = "transparent";
        }else{
            button.style.backgroundColor = "rgba(43, 255, 0, 0.04)";
        }
    }
}

translatePage = (pageName) => {
    var sulfix;
    var numTxts;

    var lang = $("#languageSelector").val()

    translate("main-title", lang)
    translate("headerButtonAbout", lang)
    translate("headerButtonStacks", lang)
    translate("headerButtonContact", lang)
    
    switch (pageName) {
        case "about":
            sulfix = "abouttxt-"
            numTxts = 19
            for (let index = 1; index <= numTxts; index++) {
                translate("abouttxt-"+index, lang) 
            }
            break;
    
        default:
            break;
    }
}

changeLanguage = (element) => {
    var header_buttons  = $("header button")
    for (const button of header_buttons) {
        if(button.style.backgroundColor=="rgba(43, 255, 0, 0.04)"){
            translatePage(button.value.toLocaleLowerCase())
        }
    }
}


goToPage = (objElemnt) => {
    
    changeHeaderButtonColor(objElemnt.value)
    
    objElemnt.style.backgroundColor = "rgba(43, 255, 0, 0.041)";
    
    var pageName = objElemnt.value.toLocaleLowerCase();
    
    $("#content").load(APP.root + "pages/"+pageName+".php", ()=>{translatePage(pageName)});
    
}

goToLink = (link) => {
    window.open("https://"+link);
}


$(document).ready(() => {
    
    $("#content").load(APP.root + "pages/about.php", ()=>{translatePage("about")});
    changeHeaderButtonColor()
    initTranslator()

})