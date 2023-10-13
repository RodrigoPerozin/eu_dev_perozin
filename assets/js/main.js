APP = new Object()
APP.root = "/eu_dev_perozin/"

goTo = (objElemnt) => {

    var pageName = objElemnt.textContent.toLocaleLowerCase();

    $("#content").load(APP.root + "pages/"+pageName+".php");

}