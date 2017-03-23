$(document).ready(() => {

  var profile = localStorage.getItem('profile')
  var user = JSON.parse(profile)

  console.log(user);

  $.get('')

  $('#profileMain').append($('<div>', {class: 'header'}))
  $('.header').append($('<button>', {class: 'newEvent', id: 'newEvent'}).text('+'))
  $('#profileMain').append($('<div>', {class: 'eventContainer'}))
  $('.eventContainer').append($('<div>', {class: 'dataContainer'}))
  $('.dataContainer').append($('<div>', {class: 'title'}))
  $('.title').append($('<div>', {class: 'titleHead'}).text('Event'))
  $('.title').append($('<div>', {class: 'titleBody body'}).text('EventBody'))
  $('.eventContainer').append($('<div>', {class: 'bestDate'}))
  $('.dataContainer').append($('<div>', {class: 'responseBoard '}))

  $('.responseBoard').append($('<div>', {class: 'responseHead'}).text('Responses'))
  $('.responseBoard').append($('<div>', {class: 'responseBody body'}).text('2 of 14'))
  $('.bestDate').append($('<div>', {class: 'bestHead'}).text('Ideal Date'))
  $('.bestDate').append($('<div>', {class: 'bestBody body'}).text('03-04-17 08:00am - 09:00am'))
  // $(document).on('click', '.newEvent', function(() => {
  //   window.location('')
  // }))

})
