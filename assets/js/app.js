---
---
{% include_relative jquery-1.9.0.min.js %}


(function() {
  'use strict';
  $(document).ready(function() {
    $('#contact_form').submit(onSubmitForm);
  });


  function onSubmitForm(event) {
    event.preventDefault();
    var form = this;
    var btnEnviar = $(form).find('.btn-enviar');
    $.ajax({
      url: '//formspree.io/iagovelasco@hotmail.com',
      method: 'POST',
      dataType: 'json',
      data: {
        nome: $(form).find('input[name="name"]').val(),
        email: $(form).find('input[name="email"]').val(),
        mensagem: $(form).find('textarea[name="message"]').val()
      },
      success: function() {
         $('#alert')
           .removeClass('alert-danger')
           .addClass('alert-success')
           .text('Obrigado! Recebi a sua mensagem!')
           .show();
            form.reset();
      },
      error: function() {
        $('#alert')
           .text('Aconteceu algo de errado, tente novamente!')
           .show();
            form.reset();
      }
    });
  }


})();
  