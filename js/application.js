
$(document).ready(function(){
  function justShow (guytoshow) {
    $("#stage").show();
    $('.stage_item').fadeOut(250);
    window.setTimeout(function(){guytoshow.fadeIn(250)}, 300);
  }
  
  $('#show_mailing_address').click(function(){
    $("#stage").show();
    $('.stage_item').fadeOut(250);
    var addressbox = $("#mailing_address");
    addressbox.html("<strong>Stephen Schor c/o Eastmedia.com</strong><br/> 27 West 24th Street Suite 703 <br/>New York, NY 10010");
    addressbox.fadeIn(300);
  })
  
  $("#paypalform").change(function(){
    var selected_value = $("#paypalform option:selected").val();
    justShow($(document.getElementById(selected_value)));
  })
});