(function($,undefined){
    $.fn.extend({
        toggleClicker: function() {
            $(this).off('click.toggled').on('click.toggled', function(e){
                if( $(this).data('target') ){
                    e.preventDefault();
                    $(this).toggleClass('is-open');
                    var $target = $($(this).data('target'));
                    $target.toggleClass('is-closed');
                    if( !$target.hasClass('is-closed') ){
                        var destination = $target.offset().top - anchorAnimateOffset;
                        setTimeout(function(){
                            $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination}, 600);
                        }, 300);
                    }
                }
            });
            return this;
        }
    });
})(jQuery);