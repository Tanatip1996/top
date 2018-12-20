function format(icon) {
    var originalOption = icon.element;
    return '<i class="fa ' + $(originalOption).data('icon') + '"></i> ' + icon.text;
}
$('.wpmse_select2').select2({
    width: "100%",
    formatResult: format
});
$('select').on('change', function() {
  $('#show_icon').hide();
	  var e = this.value;
	  var f = 'fa fa-3x '+ e;
   $('#show_icon').removeClass().addClass(f);
  $('#show_icon').fadeIn();
});