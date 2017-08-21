//Logic
function Places(city, country,landmarks, when){
  this.city = city;
  this.country = country;
  this.landmarks = landmarks;
  this.when = when;
}

Places.prototype.lugar = function() {
  return this.city + ", " + this.country;
}

//User Interface
$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    var inputCity = $('input#city').val();
    var inputCountry = $('input#country').val();
    var inputLandmarks = $('input#landmarks').val();
    var inputWhen = $("input#when").val();


    var newPlaces = new Places(inputCity, inputCountry, inputLandmarks, inputWhen);
    $('h3').append(newPlaces.lugar());

    $('input#places').val("");

    $('h3').click(function(){
      //$('#details').show();
      $('#show-places .landmarks').append(newPlaces.landmarks);
      $('#show-places .when').append(newPlaces.when);
    });
  });
});
