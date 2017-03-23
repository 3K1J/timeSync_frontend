window.addEventListener('load', function() {

  var options = {

    allowSignUp: false,
    languageDictionary: {
      title: 'Welcome!'
    },
    theme: {
      logo: './images/auth-logo.png',
      primaryColor: '#009688'
    },
    // auth: {
    //   redirect: true,
    //   redirectUrl: '/loading.html'
    // }
  };

  var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, options);

  // buttons
  var btn_login = document.getElementById('btn-login');



  btn_login.addEventListener('click', function() {
    lock.show();
  });


  lock.on("authenticated", function(authResult) {
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        return;
      }

      console.log(profile.name)


      $.ajax({
          url : "https://time-synk.herokuapp.com/users",
          type: "POST",
          data: {
            name: profile.name,
            email: profile.email
          },
          success: function(user)
          {
            localStorage.setItem('accessToken', authResult.accessToken);
            profile.id = user[0].id
            console.log(profile);
            console.log(profile.id);
            console.log(user[0]);
            localStorage.setItem('profile', JSON.stringify(profile));
          },
          error: function (err)
          {
            console.log(err);
          }
      }).then(function() {
        window.location.href = "/profile.html"
      })





    });
  });
});

  // Verify that there's a token in localStorage

  // var token = localStorage.getItem('accessToken');
  // if (token) {
  //   showLoggedIn();
  // }
  //
  // // Display the user's profile
  // function showLoggedIn() {
  //   var profile = JSON.parse(localStorage.getItem('profile'));
  //   document.getElementById('nick').textContent = profile.nickname;
  // }
