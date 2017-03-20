$(document).ready(() => {
  $(".button-collapse").sideNav();

  $('#timepicker').pickatime({
    default: 'now',           // default time, 'now' or '13:14' e.g.
    fromnow: 0,            // set default time to * milliseconds from now
    donetext: 'Done',      // done button text
    autoclose: false,      // auto close when minute is selected
    ampmclickable: false,  // set am/pm button on itself
    darktheme: false,      // set to dark theme
    twelvehour: true,      // change to 12 hour AM/PM clock from 24 hour
    vibrate: true,         // vibrate the device when dragging clock hand
    container: '',         // default will append clock next to input
    submit:''              // complete in 24 hour format
  });

  

});
