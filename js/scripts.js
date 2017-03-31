// BUSINESS LOGIC
var makeArray = function(end) {
  firstArray = []
  for(i=1; i <= end; i++){
    firstArray.push(i);
  }
  return firstArray
}

// var pingPongArray = function(firstArray)











// UI LOGIC
$(function(){
  $("form").submit(function(e){
    e.preventDefault();
    $(".result").show();
    $("form").hide();
    var userInput = $("#userInput").val();
    var result = makeArray(userInput);
    $("#pingPongResult").append(result);
  });
  $("#reload").click(function(){
    location.reload();
  });
});
