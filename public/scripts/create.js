$(document).ready(() => {

  var eventID = 0

  createTimesForm()
  createPeopleForm()
  createDescriptionForm()
  $('#saveButton').hide()

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
    $('#inputForm').append($('<input>', {type: 'text', name: 'invitee', placeholder: 'Create your Event Title', class: 'desc', id: 'title'}))
    $('#inputForm').append($('<input>', {type: 'text', name: 'desc', placeholder: 'Create your Event Description', class: 'desc', id: 'desc'}))
    $('#mainCreate').append($('<button>', {class: 'submitCreateButton', id: "submitCreateButton"}).text('CREATE LINK'))
    $('#mainCreate').append($('<button>', {class: 'submitCreateButton', id: "saveButton"}).text('SAVE EVENT CHANGES'))
    $('#mainCreate').append($('<div>', {class: 'linkRead', id: "linkRead"}).text('Test'))
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
      $('#chosenTimes').append($('<div>', {class: 'timeChoice', id: 'timeChoice'}))
      $('.timeChoice').last().append($('<div>', {class: 'sendDate'}).text($('#date').val()))
      $('.timeChoice').last().append($('<div>', {class: 'timeDiv containCenterColumn startEnd', id: 'startEndContainerChoice'}))
      $('.timeChoice').last().append($('<button>', {class: 'deleteButton', id: 'deleteButton'}).text('X'))
      $('.timeDiv').last().append($('<div>', {class: 'sendStart', id: 'sendStart'}).text($('#start').val()))
      $('.timeDiv').last().append($('<div>', {class: 'sendEnd', id: 'sendEnd'}).text($('#end').val()))
    }
  })

  $(document).on('click', '.deleteButton', function () {
    $(this).parent().remove()
  })

  $(document).on('click', '.invDeleteButton', function () {
    $(this).parent().remove()
  })

  $(document).on('click', '#personCreateButton', function () {
    var person = $('#invitee').val()
    if (!person) {
      $('#personDiv').addClass('error')
    }
    var counter = $('div > .invChoice').length
    $('#chosenPeople').append($('<div>', {class: 'invChoice', id: 'invChoice' + counter}))
    $('#invChoice'+counter).append($('<div>', {class: 'inv', id: 'inv'+counter}).text($('#invitee').val()))
    $('#invChoice'+counter).append($('<button>', {class: 'invDeleteButton', id: 'invDeleteButton' + counter}).text('X'))
  })

  $(document).on('click', '#saveButton', function() {
    $.get('https://time-synk.herokuapp.com/dates/' + eventID, function (data) {
      var dbArr = []
      data.forEach((e) => {
        dbArr.push(e.id)
      })
      var currentArr = []

      console.log(dbArr);
    })
  })

  $(document).on('click', '#submitCreateButton', function () {

    var eventSend = {}
    eventSend.body = $('#desc').val()
    eventSend.title = $('#title').val()
    eventSend.user_id = 22
    $.post('https://time-synk.herokuapp.com/events', eventSend)
    .then(function (data) {
      var id = data[0].id
      eventID = id
      $('#linkRead').text('https://time-synk.herokuapp.com/sent.html?id='+id)
      $('#submitCreateButton').hide()
      $('#saveButton').show()

      $('.timeChoice').each(function() {
        $this = $(this)
        var dateSend = {}
        dateSend.event_id = id
        dateSend.date = $this.find('.sendDate').text()
        dateSend.start = $this.find('.sendStart').text()
        dateSend.end = $this.find('.sendEnd').text()
        $.post('https://time-synk.herokuapp.com/dates', dateSend)
         .then(function(dataDate) {
          
         })
      })

      $('.invChoice').each(function() {
        $this = $(this)
        var invSend = {}
        invSend.name = $this.find('.inv').text()
        invSend.email = ''
        $.post('https://time-synk.herokuapp.com/users', invSend)
          .then(function(dataInv) {

        })
      })
    })
  })


});
