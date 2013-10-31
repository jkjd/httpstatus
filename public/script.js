var searchField = $('input[type=search]'),
    userInput;

searchField.keyup(function() {
  userInput = $(this).val();
  $(this).val(userInput.replace(/[^0-9\.]/g,''));
  userInput = $(this).val();
  jumpToSection(userInput);
});

function jumpToSection(statusCode) {
  var section = $('#'+statusCode),
      searchBarHeight = -100;
  if(section.length) {    
    $('html, body').animate({
      scrollTop: section.offset().top+searchBarHeight
    }, 0);
  }
}

$(function() {
    searchField.focus();
});