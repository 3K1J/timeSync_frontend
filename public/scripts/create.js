$(document).ready(() => {

  createTimesForm()
  createPeopleForm()
  createDescriptionForm()

  $('.desc').hide()
  $('.invitee').hide()

  $('.datepicker').pickadate({
     selectMonths: true,
     selectYears: 15
  });

  $('#start').timepicker();
  $('#end').timepicker();

  function createTimesForm() {
    $('#main').addClass('containCenterColumn')
    $('#main').append($('<div>', {id: 'createPageMain'}))
    $('#main').append($('<div>', {class: 'createInputs containCenterColumn', id: 'inputForm'}))
    $('#createPageMain').append($('<button>', {name: 'createTimesTab', id: 'timesToggle'}).text('Times'))
    $('#createPageMain').append($('<button>', {name: 'createInvitesTab', id: 'invitesToggle'}).text('People'))
    $('#createPageMain').append($('<button>', {name: 'createDescriptionTab', id: 'descriptionToggle'}).text('Description'))
    $('#inputForm').append($('<input>', {type: 'date', class: 'datepicker', placeholder: 'Please choose a Date', class: 'times'}))
    $('#inputForm').append($('<input>', {type: 'text', name: 'startTime', placeholder: 'Please choose a Start Time', id: 'start', class: 'times'}))
    $('#inputForm').append($('<input>', {type: 'text', name: 'endTime', placeholder: 'Please choose an End Time', id: 'end', class: 'times'}))
  }

  function createPeopleForm() {
    $('#inputForm').append($('<input>', {type: 'text', name: 'invitee', placeholder: 'Choose your Guests', class: 'invitee', id: 'invitee'}))
  }

  function createDescriptionForm() {
    $('#inputForm').append($('<input>', {type: 'text', name: 'invitee', placeholder: 'Create your Event Title', class: 'desc', id: 'desc'}))
    $('#inputForm').append($('<input>', {type: 'text', name: 'desc', placeholder: 'Create your Event Description', class: 'desc', id: 'desc'}))
    $('#inputForm').append($('<button>', {name: 'button', class: 'submitButton'}).text('ADD'))
  }

  $(document).on('click', '#invitesToggle', function() {
    $('.times').hide()
    $('.invitee').show()
    $('.desc').hide()
  })

  $(document).on('click', '#timesToggle', function() {
    $('.times').show()
    $('.invitee').hide()
    $('.desc').hide()
  })

  $(document).on('click', '#descriptionToggle', function() {
    $('.times').hide()
    $('.invitee').hide()
    $('.desc').show()
  })
});
