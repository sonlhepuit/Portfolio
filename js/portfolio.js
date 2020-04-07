function openNav() {
    document.getElementById("mySidebar").style.right = "0";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.opacity = "1";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.right = "-100%";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.opacity = "0";
  }


  window.onscroll = function() {
    scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      // document.getElementById("navbar").style.backgroundColor = "red";
      // document.getElementById(navbar).style.height="150px";
      document.getElementById("navbar").style.position="fixed ";
      document.getElementById("navbar").style.top="0px";
      document.getElementById("navbar").style.left="0px";
      document.getElementById("navbar").style.right="0px";
      document.getElementById("ctn").style.padding="0px";
      document.getElementById("navbar").style.borderBottom="1px solid #d1d1d1";
    } else {
      document.getElementById("navbar").style.backgroundColor = "#f5f5f5";
      document.getElementById("navbar").style.position="relative ";
      document.getElementById("navbar").style.borderBottom="1px solid #f5f5f5";

      // document.getElementById(navbar).style.height="100px";
      // document.getElementsByClassName("nav-hidden-item").style.marginTop = "50px";
    }
  }