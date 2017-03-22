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

    auth: {
      redirect: true,
      redirectUrl: 'https://timesync-c310e.firebaseapp.com/create.html',
      responseMode: 'form_post'
    }
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
      localStorage.setItem('access_token', authResult.accessToken);

    });
  });
});
