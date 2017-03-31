// BUSINESS LOGIC




// UI LOGIC
$(function(){
  $("form").submit(function(e){
    e.preventDefault();
    $(".result").show();
    $("form").hide();
    var userInput = $("#userInput").val();
    var result = userInput;
    $("#pingPongResult").append(result);
  });
  $("#reload").click(function(){
    location.reload();
  });
});
