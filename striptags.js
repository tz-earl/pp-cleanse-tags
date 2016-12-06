(function($) {

  // In the Tags form field, replace each # sign with a comma
  // since Drupal core uses commas as tag separators.
  Drupal.behaviors.hashSignsToCommas = {
    attach: function (context, settings) {
      $('#poem-node-form').submit( function(e) {
        var form = this;
        var noHashSigns = $('#edit-field-tags-und').val().replace(/#/g, ', ');
        $('#edit-field-tags-und').val(noHashSigns);

        // wait 300 milliseconds to submit the form
        e.preventDefault();
        setTimeout( function () {
          form.submit();
        }, 300);
      });
    }
  };

}) (jQuery);
