const ElementWipe = (element) => {
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
}

module.exports = ElementWipe;
