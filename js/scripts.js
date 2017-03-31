// BUSINESS LOGIC
var makeArray = function(end) {
  var firstArray = []
  for(i=1; i <= end; i++){
    firstArray.push(i);
  }
  return firstArray;
}

var pingPongHunter = function(firstArray) {
  var pingPongArray = []
  for(i=0; i <= firstArray.length; i++) {
    var newNums = (firstArray[i]);
    if (firstArray[i] % 15 === 0){
      pingPongArray.push("ping-pong");
    } else if (firstArray[i] % 5 === 0){
      pingPongArray.push("pong");
    } else if (firstArray[i] % 3 === 0){
      pingPongArray.push("ping");
    } else {
      pingPongArray.push(newNums);
    }
  }
  return pingPongArray;
}








// UI LOGIC
$(function(){
  $("form").submit(function(e){
    e.preventDefault();
    $(".result").show();
    $("form").hide();
    var userInput = $("#userInput").val();
    var result = pingPongHunter(makeArray(userInput));
    $("#pingPongResult").append(result);
  });
  $("#reload").click(function(){
    location.reload();
  });
});
