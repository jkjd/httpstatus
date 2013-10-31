var searchField = $('input[type=search]'),
    userInput;

searchField.keyup(function() {
  userInput = $(this).val();
  $(this).val(userInput.replace(/[^0-9\.]/g,''));
  userInput = $(this).val();
  jumpToSection(userInput);
});

function jumpToSection(statusCode) {
  var section = $('#'+statusCode);
  if(section.length) { 
    $('article').animate({
      scrollTop: section.offset().top
    }, 0);
  }
}

$(function() {
    searchField.focus();
});