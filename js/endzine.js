function showMenu() {
  //   var element = document.getElementById('listing');
  //   element.classList.add('menuVisible');
  var x = document.getElementById('listing');
  if (x.style.display == 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
    x.style.textDecoration = 'none';
    x.style.listStyleType = 'none';
    x.style.padding = '0';
  }
}
