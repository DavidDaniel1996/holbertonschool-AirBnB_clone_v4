$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
  if (status === 'success') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
$(document).ready(function () {
  const amenity_dict = {};
  $('.amenities').on('click', 'input[type="checkbox"]', function () {
    let amenity_string = '';
    if ($(this).is(':checked')) {
      amenity_dict[$(this).data().id] = $(this).data().name;
      let count = 0;
      for (const key in amenity_dict) {
        count++;
        if (count === 1) {
          amenity_string = `${amenity_dict[key]}`;
        } else {
          amenity_string = amenity_string + `, ${amenity_dict[key]}`;
        }
        if (amenity_string.length >= 25) {
          amenity_string = amenity_string.substring(0, 25) + '...';
          break;
        }
      }
      $('.amenities h4').text(amenity_string);
    } else {
      if (`${$(this).data().id}` in amenity_dict) {
        delete amenity_dict[$(this).data().id];
      }
      let count = 0;
      for (const key in amenity_dict) {
        count++;
        if (count === 1) {
          amenity_string = `${amenity_dict[key]}`;
        } else {
          amenity_string = amenity_string + `, ${amenity_dict[key]}`;
        }
        if (amenity_string.length >= 25) {
          amenity_string = amenity_string.substring(0, 25) + '...';
          break;
        }
      }
      $('.amenities h4').text(amenity_string);
    }
    console.log(amenity_dict);
  });
});
