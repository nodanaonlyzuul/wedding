$(document).ready(function(){
  $('#show_mailing_address').click(function(){
    var addressbox = $("#mailing_address");
    addressbox.html("<strong>Stephen Schor c/o Eastmedia.com</strong><br/> 27 West 24th Street Suite 703 <br/>New York, NY 10010");
    addressbox.fadeIn(300);
  })
});