$(document).ready(() => {
  const mydict = {};
  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      mydict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete mydict[$(this).attr('data-id')];
    }
    $('DIV.amenities H4').text(Object.values(mydict).join(', '));
  });
});
