var break_value = 1;
var session_value = 1;
//break decrement
$("#break-decrement").on("click", function(){
  break_value = parseInt($("#break-length").val(), 10);
  break_value -= 1;
  if(break_value>0){
    $("#break-length").val(break_value); 
  }
});
//session decrement
$("#session-decrement").on("click", function(){
  session_value = parseInt($("#session-length").val(), 10);
  session_value -= 1;
  if(session_value>0){
    $("#session-length").val(session_value); 
  }
  //update in time-left
  $("#mm").text($("#session-length").val());
});
//break increment
$("#break-increment").on("click", function(){
  break_value = parseInt($("#break-length").val(), 10);
  break_value += 1;
  if(break_value<=60){
    $("#break-length").val(break_value); 
  }
});
//session increment
$("#session-increment").on("click", function(){
  session_value = parseInt($("#session-length").val(), 10);
  session_value += 1;
  if(session_value<=60){
    $("#session-length").val(session_value); 
  }
  //update in time-left
  $("#mm").text($("#session-length").val());
});

//handling constraint
var value = 0;
const constraints = (val) => {
  if(val>60){
    return 60;
  }else if(val<=0){
    return 1;
  }
  return val;
}
$("#session-length").focusout(function(){
  value = $("#session-length").val();
  value = constraints(value);
  $("#session-length").val(value);
  //updating value of timer
  value>9?$("#mm").text(value):$("#mm").text("0"+value);
});
$("#break-length").focusout(function(){
  value = $("#break-length").val();
  value = constraints(value);
  $("#break-length").val(value);
})

//handling start and stop actions
var x_play = null;
const startstop = (class_present) => {
  if(class_present){
    //replace icon to pause
    $("#start_stop").removeClass("fa-play-circle");
    $("#start_stop").addClass("fa-pause-circle");
    x_play = play();
  }else{
    //replace icon to play
    $("#start_stop").removeClass("fa-pause-circle");
    $("#start_stop").addClass("fa-play-circle");
    pause(x_play);
  }
}
$("#start_stop").on('click', function(){
  startstop($("#start_stop").hasClass("fa-play-circle"));
});

//play function
const play = () =>{
  var minutes = parseInt($("#mm").text());
  var seconds = parseInt($("#ss").text());
  var counter = minutes*60 + seconds -1;
  var x = setInterval(function(){
    if((counter+1)%60==0 && minutes>0){
      minutes--;
      if(minutes<=9){
        $("#mm").text("0"+minutes);  
      }else{
        $("#mm").text(minutes);
      }
    }
    if(counter%60 <= 9){
      $("#ss").text("0" + counter%60);
    }else{
      $("#ss").text(counter%60);
    }
    if(counter<0){
      clearInterval(x);
      //checking for break or session
      if($("#timer-label").text() === "SESSION"){
        //begin break
        value = parseInt($("#break-length").val());
        value>9?$("#mm").text(value):$("#mm").text("0"+value);
        $("#ss").text("00");
        $("#timer-label").text("BREAK");
        x_play = play();
      }else{
        value = parseInt($("#session-length").val());
        value>9?$("#mm").text(value):$("#mm").text("0"+value);
        $("#ss").text("00");
        $("#timer-label").text("SESSION");
        x_play = play();
      }
    }
    counter--;
    if(counter<0){
      $("#beep").trigger('play');
    }
  }, 1000);
  return x;
}

//pause function
const pause = (x) =>{
  clearInterval(x);
  var seconds = $("#ss").text();
  var minutes = $("#mm").text();
  $("#ss").text(seconds);
  $("#mm").text(minutes);
}

//handling reset
const reset = () => {
  clearInterval(x_play);
  //reset audio to start
  $("#beep").trigger('pause');
  //set play time to 0
  $("#beep").prop("currentTime",0);
  if($("#start_stop").hasClass("fa-pause-circle")){
    $("#start_stop").removeClass("fa-pause-circle");
    $("#start_stop").addClass("fa-play-circle");
  }
  $("#timer-label").text("SESSION");
  $("#break-length").val(5);
  $("#session-length").val(25);
  $("#mm").text("25");
  $("#ss").text("00");
}
$("#reset").on('click', function(){
  reset();
})
