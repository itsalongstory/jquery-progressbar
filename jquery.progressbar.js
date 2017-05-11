(function($) {
  $.fn.progressbar = function (options) {

    var opts = $.extend({ }, options);

    return this.each(function() {
      var $this = $(this);

      var $ul = $('<ul>').attr('class', 'progressbar');

      var currentIdx = -1

      $.each(opts.steps, function(index, value) {
        var $li = $('<li>').text(value.replace('@', '').replace('~', ''));
        $li.css('width', (100 / opts.steps.length) + '%');

        if(value.indexOf('@') > -1) {
          $li.addClass('current');
          currentIdx = index;
        }

        if(value.indexOf('~') > -1) {
          $li.addClass('fail');
        }

        $ul.append($li);
      });

      for(var i = 0; i < currentIdx; i++) {
        $($ul.find('li')[i]).addClass('done');
      }

      $this.append($ul);
    });
  };
})(jQuery);