var DarkTheme = document.getElementById("Dark")

$(DarkTheme).click(function(){

    $("body").css( "background","Black")
    $("body").css( "colour","White")
    $("section").css("background","Black")
  })

  function submit(){
    var nameValue = document.getElementById("form").value;
    console.log(nameValue)
    }