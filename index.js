document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var menu = document.querySelector('.menu');

    

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
        
    });

    document.querySelectorAll('.menu a').forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            menu.classList.remove('active');
        });
    });
});
function toggleMenu(){
  var menuItems = document.getElementById('menu-items');
    menuItems.style.display = (menuItems.style.display === 'block') ? 'none' : 'block';
}

const menuItems = document.querySelector('.menu-items');

function toggleMenu() {
    menuItems.style.display = (menuItems.style.display === 'block') ? 'none' : 'block';
}



var currentImg = 0;
  var imgs = document.querySelectorAll('.slider img');
  let dots = document.querySelectorAll('.dot');
  var interval = 3000;

  // Second banner
  var secondEventTitle = 'Hi! *Freshmen* Orientation Day';

  // Third banner
  var thirdEventDate = new Date('2023-02-01'); // pull this from database
  var thirdEventDateString = thirdEventDate.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' });
  var days = calculateDays(new Date(), thirdEventDate) || 0;
  const countdownText = days > 0 ? `${days} days left` : 'Live Now!';

  var secondImageUrl = `https://ondemand.bannerbear.com/simpleurl/01YWAxB7nGYdJrKoXM/title/text/${encodeURIComponent(secondEventTitle)}`;
  var thirdImageUrl = `https://ondemand.bannerbear.com/simpleurl/ley9O0B2ZGbB4GjRDY/date/text/${encodeURIComponent(
    thirdEventDateString
  )}/countdown/text/${encodeURIComponent(countdownText)}`;

  document.getElementById('img-2').src = secondImageUrl;
  document.getElementById('img-3').src = thirdImageUrl;

  var timer = setInterval(changeSlide, interval);

  function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' active', '');
    }

    currentImg = (currentImg + 1) % imgs.length;

    if (n != undefined) {
      clearInterval(timer);
      timer = setInterval(changeSlide, interval);
      currentImg = n;
    }

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
  }

 // function calculateDays(today, eventDate) {
  //  const difference = eventDate.getTime() - today.getTime();

  //  return Math.ceil(difference / (1000 * 3600 * 24)); // convert to days
  //}


