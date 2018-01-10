//useless
var iAddClass = (el,clsname) => {
    let val = el.getAttribute("class");
    if(!val){
        val = clsname
    }else{
        val = val.concat(" "+clsname);
    }
    el.setAttribute("class",val);
}

var iRemoveClass = (el,clsname) => {
    let val = el.getAttribute("class");
    if(!val){return false}
    val = val.replace(clsname,"");
    el.setAttribute("class",val);
}

var iSlideDown = (el) => {

}

export {iAddClass ,iRemoveClass}
