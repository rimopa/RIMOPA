function sendEmail() {
  var sendButton = document.getElementById("send_email");
  var name = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message =
    "Hello my name is " +
    name +
    " -- " +
    document.getElementById("message").value +
    " -- Contact me if needed: " +
    email;
  var href =
    "mailto:rimopapomir@gmail.com?subject=" + subject + "&body=" + message;
  console.log(href);
  sendButton.setAttribute("href", href);
}
