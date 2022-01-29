export function getCustomProperty(elem, prop){
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}

export function setCustomProperty(elem, prop, value){

}

export function incrementCustomProperty(){

}