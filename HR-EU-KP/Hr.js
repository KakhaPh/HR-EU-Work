function myFunction1() {
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

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show2')) {
          openDropdown.classList.remove('show2');
        }
      }
    }
  }

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn3')) {
      var dropdowns = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show3')) {
          openDropdown.classList.remove('show3');
        }
      }
    }
  }

function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show4");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn4')) {
      var dropdowns = document.getElementsByClassName("dropdown-content4");
      var i;
      for (i = 4; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show4')) {
          openDropdown.classList.remove('show4');
        }
      }
    }
  }
function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show5");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn5')) {
      var dropdowns = document.getElementsByClassName("dropdown-content5");
      var i;
      for (i = 4; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show5')) {
          openDropdown.classList.remove('show5');
        }
      }
    }
  }
function myFunction6() {
    document.getElementById("myDropdown6").classList.toggle("show6");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn6')) {
      var dropdowns = document.getElementsByClassName("dropdown-content6");
      var i;
      for (i = 5; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show6')) {
          openDropdown.classList.remove('show6');
        }
      }
    }
  }
function myFunction7() {
    document.getElementById("myDropdown7").classList.toggle("show7");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn7')) {
      var dropdowns = document.getElementsByClassName("dropdown-content7");
      var i;
      for (i = 6; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show7')) {
          openDropdown.classList.remove('show7');
        }
      }
    }
  }
function myFunction8() {
    document.getElementById("myDropdown8").classList.toggle("show8");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn8')) {
      var dropdowns = document.getElementsByClassName("dropdown-content8");
      var i;
      for (i = 7; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show8')) {
          openDropdown.classList.remove('show8');
        }
      }
    }
  }
function myFunction9() {
    document.getElementById("myDropdown9").classList.toggle("show9");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn9')) {
      var dropdowns = document.getElementsByClassName("dropdown-content9");
      var i;
      for (i = 9; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show9')) {
          openDropdown.classList.remove('show9');
        }
      }
    }
  }

// Nav-bar Mobile

  function openNav() {
      document.getElementById("Navigation").style.width = "250px";
  }
    
  function closeNav() {
      document.getElementById("Navigation").style.width = "0";}
//  HR dropdown
  function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
  }