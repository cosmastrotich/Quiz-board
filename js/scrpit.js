///Business logi
function add (question1, question2, question3){
  return (question1+question2+question3+question4);
}
///User logic
$(document).ready(function(){
  $('#details').submit(function (event) {
    event.preventDefault();
    $("#details").hide();
    $("#question").show();
  })

  $("#question").submit(function(event) {
    event.preventDefault();
    $("#question").hide();
    var question1 =parseInt($("input:radio[name=que1]:checked").val());
    var question2 =parseInt($("input:radio[name=que2]:checked").val());
    var question3 = parseInt($("input:radio[name=que3]:checked").val());
    var question4 = parseInt($("input:radio[name=que4]:checked").val());
    var total = sum(question1, question2, question3,quetion4);

    var percent = (total/100)*100;
    $("#score").text(percent);
    if (percent>80 && percent <=100) {
      $("#score").text(percent +"%" +" excelent");
    } else if(percent<80 && percent>=50){
      $("#score").text(percent + "%" +" fairly passed");
    } else {
      $("#score").text(percent + "%" +" failed!repeat the test");
    }
  });
});
