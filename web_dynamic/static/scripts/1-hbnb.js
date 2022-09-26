$(document).ready(function() {
  $('.amenities').on('click', 'input[type="checkbox"]', function() {
    const amenity_ids = []
    if ($(this).is(':checked')) {
      console.log($(this).data().id)
      console.log(`.amenities ${$(this).data().id}`)
    } else {
      console.log()
    }
    if (amenity_ids.length !== 0) {
      $('amenites.h4').text(amenity_ids)
    }
  })
})
/*$(document).ready(function() {
    const amenityId = []
    $('input[type=checkbox]').change(function(){
      if ($(this.checked)){
        amenityId = [$.attr("data-id")]
      }
    });
    $('amenities h4').text(`${amenityId}`)
  });*/