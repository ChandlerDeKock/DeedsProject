var DarkTheme = document.getElementById("Dark")
var index = 2
$(DarkTheme).click(function(){

  if(index%2 ==0){
    $("html").css("background-color","Black")
    $("html").css("color","White")
    $(DarkTheme).text("Light Mode")
    index++
  }
  else{
    $("html").css("background-color","White")
    $("html").css("color","Black")
    $(DarkTheme).text("Dark Mode")
    index++
  }
})

  function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    alert("Hello there " + x + ". Could I get more marks. Please and thank you")
  }
    