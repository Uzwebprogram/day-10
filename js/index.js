var list = document.querySelector('#list')

button.addEventListener('click' , function (event){
    var newLi = document.createElement('li')
    newLi.setAttribute('class', 'list__item')
    newLi.textContent = dataItem.value
    list.appendChild(newLi)
    dataItem.value = ''
})


dataItem.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button").click();
  }
});