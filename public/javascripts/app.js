$(document).ready(function() {
  $(document).on('submit', 'form', function(e) {
    e.preventDefault();
    $form = $(this);
    $form.find('input').removeClass('error');
    $form.find('span').remove();
    $emptyFields = $form.find('input:text').filter(function() { return this.value == ""; });
    if($emptyFields.length) {
      $emptyFields.before('<span> Required</span').parents('label').addClass('error')
    } else {
      $.ajax({
        url: $form.attr('action'),
        method: $form.attr('method'),
        data: $form.serialize(),
        success: function(data) {
          $('tbody').append(data);
        }
      });
      $form[0].reset();
    }
  });
});
