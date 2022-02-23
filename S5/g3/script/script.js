
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  


  function changeStyle() {
    document.getElementById("titolo").style.color = "red";
  }

 function changeStyle1() {
    document.getElementById("titolo").style.fontSize = "100px";
  }

 function changeStyle2() {
    document.getElementById("titolo").style.backgroundColor = "yellow";
  }
  
  function changeStyle3() {
    document.getElementById("titolo").style.visibility = "hidden";
  }

  function changeStyle4() {
    document.getElementById("titolo").style.visibility = "visible";
  }




  /////////////////////////////////////////////////////////////////////////////////////////



 

  function canc() {
    document.getElementById("list").style.textDecoration = "line-through";

  }

  function canc1() {
    
  document.getElementById("list1").style.textDecoration = "line-through";

  }



  function canc2() {
    
    document.getElementById("list2").style.textDecoration = "line-through";
  
    }
  
    function canc3() {
    
        document.getElementById("list3").style.textDecoration = "line-through";
      
        }

