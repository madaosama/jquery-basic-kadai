$(function () {
  let target = $('#target');

  $('#change-color').on('click', function() {
    if (target.css('color') === 'rgb(255, 0, 0)' || target.css('color') === 'red') {
      target.css('color', 'black');
    } else {
      target.css('color', 'red');
    }
  });

  $('#change-text').on('click', function() {
    if (target.text() !== 'こんにちは！') {
      target.text('こんにちは！');
    } else {
      target.text('Hello!');
    }
  });

  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });

});