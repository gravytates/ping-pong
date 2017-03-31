// BUSINESS LOGIC
var isNum = function(input) {
  if (input.match(/^\d+$/)){
    return makeArray(input);
  } else if (input.match(/^-?\d+$/)) {
    return (negMakeArray(input));
  } else {
    return false;
  }
}

// NEGATIVE INTEGERS
var negMakeArray = function(end) {
  var negFirstArray = []
  for(i=-1; i >= end; i--){
    negFirstArray.push(i);
  }
  return negPingPongHunter(negFirstArray);
}

var negPingPongHunter = function(negFirstArray) {
  var negPingPongArray = []
  for(i=0; i <= negFirstArray.length - 1; i++) {
    var negNewNums = (negFirstArray[i]);
    if (negFirstArray[i] % 15 === 0){
      negPingPongArray.push("negative ping-pong!");
    } else if (negFirstArray[i] % 5 === 0){
      negPingPongArray.push("negative pong!");
    } else if (negFirstArray[i] % 3 === 0){
      negPingPongArray.push("negative ping!");
    } else {
      negPingPongArray.push(negNewNums);
    }
  }
  return negMakeList(negPingPongArray);
}

var negMakeList = function(negPingPongArray) {
  var negList = document.createElement('ul');
  for(var i=0; i < negPingPongArray.length; i++){
  var negItem = document.createElement('li');
  negItem.appendChild(document.createTextNode(negPingPongArray[i]));
  negList.appendChild(negItem);
  }
  return negList;
}

// POSITIVE INTEGERS
var makeArray = function(end) {
  var firstArray = []
  for(i=1; i <= end; i++){
    firstArray.push(i);
  }
  return pingPongHunter(firstArray);
}

var pingPongHunter = function(firstArray) {
  var pingPongArray = []
  for(i=0; i <= firstArray.length - 1; i++) {
    var newNums = (firstArray[i]);
    if (firstArray[i] % 15 === 0){
      pingPongArray.push("ping-pong!");
    } else if (firstArray[i] % 5 === 0){
      pingPongArray.push("pong");
    } else if (firstArray[i] % 3 === 0){
      pingPongArray.push("ping");
    } else {
      pingPongArray.push(newNums);
    }
  }
  return makeList(pingPongArray);
}

var makeList = function(pingPongArray) {
  var list = document.createElement('ul');
  for(var i=0; i < pingPongArray.length; i++){
  var item = document.createElement('li');
  item.appendChild(document.createTextNode(pingPongArray[i]));
  list.appendChild(item);
  }
  return list;
}

// UI LOGIC
$(function(){
  $("form").submit(function(e){
    e.preventDefault();

    var userInput = $("#userInput").val();

    var numCheck = isNum(userInput);
      if (numCheck === false) {
        $(".alert").show();
      } else {
        $(".result").show();
        $("form").hide();
        $("#pingPongResult").append(numCheck);
      }
  });

  $("#reload").click(function(){
    location.reload();
    document.getElementById('pingPongResult').appendChild(makeList(pingPongArray[0]));
  });
});
