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
  $.get('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
