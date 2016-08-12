/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

/*$(function() {

  $('#alertMe').click(function(e) {

    e.preventDefault();

    $('#successAlert').slideDown();

  });*/

  $(document).ready(function()
  {
    $('#alertMe').click(function()
    {
      $('#successAlert').show();
      console.log("clicked");
    });

  });

  $(function()
  {
    $("[data-hide]").on("click",function()
    {
      $(this).closest("."+$(this).attr("data-hide")).hide();
    });

  });


  $('a.pop').click(function(e) {
    e.preventDefault();

  });

  $('a.pop').popover();

  $('[rel="tooltip"]').tooltip();

});
