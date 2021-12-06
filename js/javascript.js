// load metadata into the head element of each page
$(function(){
  $("head").load("meta.html");
});
// load the header and footer html files into their respective elements on each page
$(function(){
  $("#header").load("header.html");
});
$(function(){
  $("#footer").load("footer.html");
});
$(document).ready(function(){
  // hover effect on links
  $('.link').hover(function(){
    $(this).addClass('highlight-link');
  },
  function(){
    $(this).removeClass('highlight-link');
  });

  // hide the textbox briefly on the masthead when clicked
  $(".masthead-textbox").click(function(){
    $(this).slideUp();
    $(this).delay("slow").slideDown();
  });

  // logo in header appears larger when scrolled to the top of the window
  $(function(){
      $(window).on("scroll", function(){
        if($(window).scrollTop() < 100){
          $(".header-logo").addClass("large-logo");
        }
        else {
          $(".header-logo").removeClass("large-logo");
        }
      });
  });

  //alert displays when contact form is submitted
  document.getElementById("myForm").onsubmit = function(){
    showMessage()
  };
  function showMessage(){
    alert("Thanks for your feedback!");
  };
});
