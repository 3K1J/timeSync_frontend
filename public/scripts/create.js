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
    $('#mainCreate').addClass('containCenterColumn')
    $('#mainCreate').append($('<div>', {id: 'createPageMain'}))
    $('#mainCreate').append($('<div>', {class: 'createInputs containCenterColumn', id: 'inputForm'}))
    $('#createPageMain').append($('<button>', {name: 'createTimesTab', id: 'timesToggle', class: 'createButton tab'}).text('Times'))
    $('#createPageMain').append($('<button>', {name: 'createInvitesTab', id: 'invitesToggle', class: 'createButton tab'}).text('People'))
    $('#createPageMain').append($('<button>', {name: 'createDescriptionTab', id: 'descriptionToggle', class: 'createButton tab'}).text('Description'))
    $('#inputForm').append($('<div>', {id: 'dateDiv', class: 'divContainer'}))
    $('#dateDiv').append($('<input>', {type: 'date', class: 'datepicker', placeholder: 'Please choose a Date', class: 'times', id: 'date'}))
    $('#inputForm').append($('<div>', {id: 'startDiv', class: 'divContainer'}))
    $('#startDiv').append($('<input>', {type: 'text', name: 'startTime', placeholder: 'Please choose a Start Time', id: 'start', class: 'times'}))
    $('#inputForm').append($('<div>', {id: 'endDiv', class: 'divContainer'}))
    $('#endDiv').append($('<input>', {type: 'text', name: 'endTime', placeholder: 'Please choose an End Time', id: 'end', class: 'times'}))
    $('#inputForm').append($('<button>', {name: 'timeButton', class: 'createButton times', id:'timeCreateButton'}).text('CREATE TIME'))
    $('#mainCreate').append($('<div>', {class: 'createInputs times', id: 'chosenTimes'}))
  }

  function createPeopleForm() {
    $('#inputForm').append($('<div>', {id: 'personDiv', class: 'divContainer'}))
    $('#personDiv').append($('<input>', {type: 'text', name: 'invitee', placeholder: 'Choose your Guests', class: 'invitee', id: 'invitee'}))
    $('#inputForm').append($('<button>', {name: 'inviteeButton create', class: 'invitee createButton', id: 'personCreateButton'}).text('ADD PERSON'))
    $('#mainCreate').append($('<div>', {class: 'createInputs invitee', id: 'chosenPeople'}))
  }

  function createDescriptionForm() {
    $('#inputForm').append($('<input>', {type: 'text', name: 'invitee', placeholder: 'Create your Event Title', class: 'desc', id: 'desc'}))
    $('#inputForm').append($('<input>', {type: 'text', name: 'desc', placeholder: 'Create your Event Description', class: 'desc', id: 'desc'}))
    $('#mainCreate').append($('<button>', {class: 'submitCreateButton', id: "submitCreateButton"}).text('CREATE LINK'))
  }

  function flairError(ele) {

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

  $(document).on('click', '#timeCreateButton', function() {
    var date = $('#date').val()
    var start = $('#start').val()
    var end = $('#end').val()
    if (!date) {
      $('#dateDiv').addClass('error')
    } else {
      $('#dateDiv').removeClass('error')
    }
    if (!start) {
      $('#startDiv').addClass('error')
    } else {
      $('#startDiv').removeClass('error')
    }
    if (!end) {
      $('#endDiv').addClass('error')
    } else {
      $('#endDiv').removeClass('error')
    }
    // if (end >= start) {
    //   $('#startDiv').addClass('error')
    //   $('#endDiv').addClass('error')
    // } else {
    //   $('#startDiv').removeClass('error')
    //   $('#endDiv').removeClass('error')
    //   var toggle = true
    // }
    if (date && start && end) {
      var counter = $('div > .timeChoice').length
      $('#chosenTimes').append($('<div>', {class: 'timeChoice', id: 'timeChoice' + counter}))
      $('#timeChoice'+counter).append($('<div>').text($('#date').val()))
      $('#timeChoice' + counter).append($('<div>', {class: 'containCenterColumn startEnd', id: 'startEndContainerChoice' + counter}))
      $('#timeChoice'+counter).append($('<button>', {class: 'deleteButton', id: 'deleteButton' + counter}).text('X'))
      $('#startEndContainerChoice'+counter).append($('<div>').text($('#start').val()))
      $('#startEndContainerChoice'+counter).append($('<div>').text($('#end').val()))

    }
  })

  $(document).on('click', '.deleteButton', function () {
    id = $(this).attr('id').slice(12)
    $('#timeChoice'+id).remove()
  })

  $(document).on('click', '.invDeleteButton', function () {
    id = $(this).attr('id').slice(15)
    $('#invChoice'+id).remove()
  })

  $(document).on('click', '#personCreateButton', function () {
    var person = $('#invitee').val()
    if (!person) {
      $('#personDiv').addClass('error')
    }
    var counter = $('div > .invChoice').length
    $('#chosenPeople').append($('<div>', {class: 'invChoice', id: 'invChoice' + counter}))
    $('#invChoice'+counter).append($('<div>').text($('#invitee').val()))
    $('#invChoice'+counter).append($('<button>', {class: 'invDeleteButton', id: 'invDeleteButton' + counter}).text('X'))
  })
});
