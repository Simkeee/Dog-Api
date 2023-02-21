function getDogImage() {
  $.ajax({
    url: 'https://dog.ceo/api/breeds/image/random',
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {
    const imageUrl = data.message;
    const imageElement = $('<img>').attr('src', imageUrl);
    $('body').append(imageElement);
  });
};
$('button').click(function() {
  getDogImage();
});