
$(document).ready(function(){
  function justShow (guytoshow) {
    $("#stage:hidden").show();
    $('.stage_item:visible').fadeOut(250);
    window.setTimeout(function(){guytoshow.show(250);}, 300)
  }

  $('#show_mailing_address').click(function(){
    $("#stage:hidden").show();
    $('.stage_item:visible').fadeOut(250);
    var addressbox = $("#mailing_address");
    addressbox.html("<strong>Stephen Schor c/o Eastmedia.com</strong><br/> 27 West 24th Street Suite 703 <br/>New York, NY 10010");
    window.setTimeout(function(){addressbox.fadeIn(250);}, 300)
  })

  $("#paypalform").change(function(){
    var selected_value = $("#paypalform option:selected").val();
    justShow($(document.getElementById(selected_value)));
  })
});