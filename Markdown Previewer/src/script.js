$("#editor").on("keyup", function(){
  $("#preview").html(marked(
    $("#editor").val(),{
      breaks: true
    }
))
  //console.log(event);
});

$("#preview").html(marked(
    $("#editor").text(), {
      breaks: true
    }));