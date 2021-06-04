$(document).ready(function() {
  $("button#Meow").click(function() {
    $("ul#user").prepend("<li>Meow Meow!</li>");
    $("ul#webpage").prepend("<li>Bark Bark!</li>");
    $('li').css('background-color', 'green');
    $('li').click(function() {
      alert('hi');
    });
  });

  $("button#bark").click(function() {
    $("ul#user").prepend("<li>Meow Meow!</li>");
    $("ul#webpage").prepend("<li>Bark Bark!</li>");
  });

  $("button#img").click(function() {
    $("ul#user").before("<li>cat saying meow meow!</li>");
    $("ul#webpage").after("<li>dog was barking.</li>");
  });
});