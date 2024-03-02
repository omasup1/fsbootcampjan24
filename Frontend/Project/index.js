$("button").click(function(){
    $.ajax({url: "http://localhost:3000", success: function(result){
      $("#div1").html(result);
    }});
  });

  //control+ C to stop server from running.