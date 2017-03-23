$(document).ready(() => {



  var arr = window.location.search.split('=')
  id = arr[arr.length-1];
  createChoices()

  function createChoices() {
    $.get('https://time-synk.herokuapp.com/events/' + id, function(data) {
      $('#sentMain').append($('<div>', {class: 'greeting', id: 'greeting'}).text('USER has asked for you to outline your availability across the below times/dates.'))
      $('#sentMain').append($('<div>', {class: 'greeting hero', id: 'title'}).text(data.title))
      $('#sentMain').append($('<div>', {class: 'greeting', id: 'desctiption'}).text(data.body))
      $('#sentMain').append($('<div>', {class: 'voteContainerWhole', id: 'votes'}))
    })
    .then(() => {
      $.get('https://time-synk.herokuapp.com/dates/' + id, function(data) {
        console.log(data);
        counter = 1
        for (i = 0; i < data.length; i++) {
          $('#votes').append($('<div>', {class: 'votes voteContianer redColor', id: 'vote' + counter}))
          $('#vote' + counter).append($('<div>', {class: 'sendDate vote', id: data[i].id}).text(data[i].date))
          $('#vote' + counter).append($('<div>', {class: 'sendStart vote'}).text(data[i].start))
          $('#vote' + counter).append($('<div>', {class: 'sendEnd vote'}).text(data[i].end))
          counter++
        }
      })
      .then(()=> {
        $('#sentMain').append($('<select>'))
        $('select').append($('<option>', {id: 'test', text: 'Choose your Name', selected: 'selected'}))
        $('#sentMain').append($('<button>', {class: 'sendBackButton', id: 'sendBack'}).text('SEND RESPONSE'))
        $.get('https://time-synk.herokuapp.com/events/'+id+'/users', function(data) {
          console.log(data);
          for (i = 0; i < data.length; i++) {
            $('select').append($('<option>', {text: data[i].userName, id: data[i].userID}))
            $('select').material_select();
          }
        })
        $('select').material_select();
      })
    })
  }

  $(document).on('click', '.sendDate', function() {
    console.log('ping');
    $(this).parent().toggleClass('greenColor')
  })

  $(document).on('click', '#sendBack', function() {
    var sendObj = {}
    $('.votes').each(function() {
      
      $this = $(this)
      if ($this.hasClass('greenColor')) {
        sendObj.date_id = parseInt($this.find('.sendDate').attr('id'))
        sendObj.user_id = parseInt($('select option:selected').attr('id'))
        $.post('https://time-synk.herokuapp.com/dates_users', sendObj)
        .then((data) => {
          console.log('sent');
        })
        console.log(sendObj);
      }
    })
    $(this).prop('disabled', true)
  })
})
