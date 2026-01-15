function filterSelection(c){
  let cards = document.getElementsByClassName('card');
  if(c === 'all') c = '';
  for(let i=0;i<cards.length;i++){
    removeClass(cards[i],'show');
    if(cards[i].className.indexOf(c) > -1) addClass(cards[i],'show');
  }
}

function addClass(element,name){
  let arr = element.className.split(" ");
  if(arr.indexOf(name) === -1){element.className += " " + name;}
}

function removeClass(element,name){
  let arr = element.className.split(" ");
  while(arr.indexOf(name) > -1){
    arr.splice(arr.indexOf(name),1);
  }
  element.className = arr.join(" ");
}

// Afficher toutes les poules au chargement
filterSelection('all');
