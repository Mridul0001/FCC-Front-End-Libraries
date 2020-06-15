$("#q").on('click', function(){ $("#Q").trigger('play');
                       $("#display").text("Heater 1");        
});

$("#w").on('click', function(){ $("#W").trigger('play');
                               $("#display").text("Heater 2");
});

$("#e").on('click', function(){ $("#E").trigger('play');
                               $("#display").text("Heater 3");
});

$("#a").on('click', function(){ $("#A").trigger('play');
                               $("#display").text("Heater 4");
});

$("#s").on('click', function(){ $("#S").trigger('play');
                               $("#display").text("Clap");
});

$("#d").on('click', function(){ $("#D").trigger('play');
                               $("#display").text("Open HH");
});

$("#z").on('click', function(){ $("#Z").trigger('play');
                               $("#display").text("Kick n' Hat");
});

$("#x").on('click', function(){ $("#X").trigger('play');
                               $("#display").text("Kick");
});

$("#c").on('click', function(){ $("#C").trigger('play');
                               $("#display").text("Close HH");
});


$("body").on('keypress', function(event){
  keyPressed(event);
});

var keyPressed = (event) => {
  const c = event.key;
  switch(c){
    case 'q':
    case 'Q':
      $("#Q").trigger('play');
      $("#display").text("Heater 1");
      break;
    case 'w':
    case 'W':
      $("#W").trigger('play');
      $("#display").text("Heater 2");
      break;
    case 'e':
    case 'E':
      $("#E").trigger('play');
      $("#display").text("Heater 3");
      break;
    case 'a':
    case 'A':
      $("#A").trigger('play');
      $("#display").text("Heater 4");
      break;
    case 's':
    case 'S':
      $("#S").trigger('play');
      $("#display").text("Clap")
      break;
    case 'd':
    case 'D':
      $("#D").trigger('play');
      $("#display").text("Open HH");
      break;
    case 'z':
    case 'Z':
      $("#Z").trigger('play');
      $("#display").text("Kick n' Hat");
      break;
    case 'x':
    case 'X':
      $("#X").trigger('play');
      $("#display").text("Kick");
      break;
    case 'c':
    case 'C':
      $("#C").trigger('play');
      $("#display").text("Close HH");
      break;
  }
}