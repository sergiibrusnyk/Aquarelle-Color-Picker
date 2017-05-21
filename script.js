var colors = document.querySelectorAll('.color');
for (var i = 0; i < colors.length; i++) {
  var color = colors[i];
  color.addEventListener('click', function() {
    //Make random rgb color
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    var rgbColor = "rgb(" + a + ", " + b + ", " + c + ")";
    this.style.backgroundColor = rgbColor;
    this.nextElementSibling.innerHTML = rgbColor;
    document.querySelector('.header').style.backgroundColor = document.querySelector('.info1').innerHTML;
    document.querySelector('.body').style.backgroundColor = document.querySelector('.info2').innerHTML;
    document.querySelector('.footer').style.backgroundColor = document.querySelector('.info3').innerHTML;
  });
}

//Clear colors by clicking the button which will reload page
document.querySelector('.clearBtn').addEventListener('click', function() {
  location.reload();
})

//Modal with the information about app
document.querySelector('.infoBtn').addEventListener('click', function() {
  var infoWindow = document.querySelector('.infoWindow');
  infoWindow.style.display = 'block';
  document.querySelector('.close').addEventListener('click', function() {
    infoWindow.style.display = 'none';
  });
});
