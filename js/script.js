 var price = document.getElementsByClassName("price");
  function changeData() {
    for(var i = 1; i<price.length; i+=2) {
      price[i-1].classList.toggle("hidden");
      price[i].classList.toggle("hidden");
    }
  }

  var toggle = document.getElementById("toggle-button");

   document.onkeydown = function(e){
      if(e.keyCode === 39){
        toggle.checked = true; 
        changeData();
      } else if(e.keyCode === 37){
        toggle.checked = false; 
        changeData();
      } 
     }
  