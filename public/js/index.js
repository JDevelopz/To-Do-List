let check = document.getElementById('check') ;

let trash = document.getElementById('trash');

let remove = document.querySelector('.delete');

let itemText = document.querySelector('.itemtext');

let toDoText = document.querySelector('.itemtext check');

let first_click = true;

itemText.onclick = function() {
    if (first_click) {
      check.style.color = 'green';
      itemText.style.textDecoration = 'line-through';
        first_click = false;
    } else {
      check.style.color = 'rgb(38 59 173)'
      itemText.style.textDecoration = null;
      first_click = true;
    }
};

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
};

// delay(1000).then(() => console.log('ran after 1 second1 passed'));
trash.onmouseover = function(){
  trash.classList.add('fa-trash-arrow-up');
  trash.style.color = 'red';
  setTimeout(function(){
      trash.classList.remove('fa-trash-arrow-up');
      trash.style.color = 'rgb(26 50 141 / 78%)';
  }, 1000);
};

// trash.onclick = function(){
//   for (var i = trash.length - 1; i >= 0; i--) {
//  if (array[i] === number) {
//   trash.splice(i, 1);
//  }
// }
      // trash.style.color = 'red';
      // delay(1000).then(() => trash.parentNode.removeParent(trash));
      // // itemText.remove();
   // 
   // };
