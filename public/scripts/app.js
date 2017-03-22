window.addEventListener('load', function() {

  var options = {
    // allowedConnections: ['google', 'linkedin'],
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
    //   redirectUrl: 'http://localhost:5000/create.html',
    //   responseMode: 'form_post'
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

      // $.ajax({
      //     url : "/users/",
      //     type: "POST",
      //     data : {
      //       name: profile.nickname,
      //       email: profile.email
      //     },
      //     success: function(data)
      //     {
      //       console.log(data);
      //
      //     },
      //     error: function (err)
      //     {
      //       console.log(err);
      //     }
      // });

      localStorage.setItem('accessToken', authResult.accessToken);
      localStorage.setItem('profile', JSON.stringify(profile));
      window.location.href = "/create.html"
      console.log(profile)


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
