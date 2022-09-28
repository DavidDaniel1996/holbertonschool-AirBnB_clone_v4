$(document).ready(function () {
<<<<<<< HEAD
  const checkedAmenities = {};
  const checkboxes = $('input');
  const initialText = $('DIV.amenities h4').text();
  for (const box of checkboxes) {
    box.addEventListener('change', function () {
      if (box.checked) {
        checkedAmenities[$(box).data('id')] = $(box).data('name');
      } else {
        delete checkedAmenities[$(box).data('id')];
      }
      const checkedList = Object.values(checkedAmenities);
      if (checkedList.length < 1) {
        checkedList.push(initialText);
      }
      $('DIV.amenities h4').text(checkedList.join(', '));
    });
  }
=======
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
>>>>>>> b140d0c8207c720d1dcfa09e77d7238541c8d1dd
});
