$(document).ready(() => {

  createChoices()

  function createChoices() {
    $('#sentMain').append($('<div>', {class: 'greeting', id: 'greeting'}).text('USER has asked for you to outline your availability across the below times/dates.'))
    $('#sentMain').append($('<div>', {class: 'greeting hero', id: 'title'}).text('Event Title'))
    $('#sentMain').append($('<div>', {class: 'greeting', id: 'desctiption'}).text('Event Description'))
    $('#sentMain').append($('<select  >', {class: 'greeting', id: 'desctiption'}).text('Event Description'))
    $('#sentMain').append($('<div>', {class: 'voteContainerWhole', id: 'votes'}))
    counter = 1
    for (i = 1; i < 8; i++) {
      $('#votes').append($('<div>', {class: 'voteContianer redColor', id: 'vote' + counter}))
      $('#vote' + counter).append($('<div>', {class: 'sendDate vote'}).text('DATE'))
      $('#vote' + counter).append($('<div>', {class: 'sendStart vote'}).text('START'))
      $('#vote' + counter).append($('<div>', {class: 'sendEnd vote'}).text('END'))
      counter++
    }
    $('#sentMain').append($('<button>', {class: 'sendBackButton', id: 'sendBack'}).text('SEND RESPONSE'))
  }

  $(document).on('click', '.sendDate', function() {
    console.log('ping');
    $(this).parent().toggleClass('greenColor')
  })

})
