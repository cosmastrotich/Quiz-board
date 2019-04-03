
$(document).ready(function() {
  $("#start-quiz").click(function() {
    $("#insert").fadeOut(function() {
      $("#hidden").fadeIn(function() {
        $("#marks").click(function() {
          //User logic
          var question1 =parseInt($("input:radio[name=que1]:checked").val());
          var question2 =parseInt($("input:radio[name=que2]:checked").val());
          var question3 = parseInt($("input:radio[name=que3]:checked").val());
          var question4 = parseInt($("input:radio[name=que4]:checked").val());
          var total = sum(question1, question2, question3,quetion4);

          $("#hidden").fadeOut(function() {
            $("#score").fadeIn(function() {

            })
          })
       
})
})
})
})
