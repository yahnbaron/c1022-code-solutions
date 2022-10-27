var tabContainer = document.querySelector('.tab-container');
var tabList = document.querySelectorAll('.tab');
var viewList = document.querySelectorAll('.view');

tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabList.length; i++) {
      if (event.target === tabList[i]) {
        tabList[i].className = 'tab active';
      } else {
        tabList[i].className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var x = 0; x < viewList.length; x++) {
      if (viewList[x].getAttribute('data-view') === dataView) {
        viewList[x].className = 'view';
      } else {
        viewList[x].className = 'view hidden';
      }
    }
  }
}
