$(document).ready(() => {

  var profile = localStorage.getItem('profile')
  var user = JSON.parse(profile)
  var userID = user.id

  $('#profileMain').append($('<div>', {class: 'header'}))
  $('.header').append($('<button>', {class: 'newEvent', id: 'newEvent'}).text('+'))

  $.get('https://time-synk.herokuapp.com/users/'+userID+'/events', function(data) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
      $('#profileMain').append($('<div>', {class: 'eventContainer', id: 'EC'+i}))
      $('#EC'+i).append($('<div>', {class: 'dataContainer', id: 'DC'+i}))
      $('#DC'+i).append($('<div>', {class: 'title', id: 'title'+i}))
      $('#title'+i).append($('<div>', {class: 'titleHead'}).text('Event'))
      $('#title'+i).append($('<div>', {class: 'titleBody body'}).text(data[i].title))
      $('#EC'+i).append($('<div>', {class: 'bestDate', id: 'BD'+i}))
      $('#DC'+i).append($('<div>', {class: 'responseBoard ', id: 'RB'+i}))
      $('#RB'+i).append($('<div>', {class: 'responseHead'}).text('Responses'))
      $('#RB'+i).append($('<div>', {class: 'responseBody body'}).text('2 of 14'))
      $('#BD'+i).append($('<div>', {class: 'bestHead'}).text('Ideal Date'))
      $('#BD'+i).append($('<div>', {class: 'bestBody body'}).text('03-04-17 08:00am - 09:00am'))
    }
    $.get('/events/eventID/'+data.id)
  })



  $(document).on('click', '.newEvent', function() {
    console.log('ping');
    window.location = 'https://timesync-c310e.firebaseapp.com/create.html'
  })

})
