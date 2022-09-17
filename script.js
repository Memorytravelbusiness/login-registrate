{
const sigButton = document.getElementById('sig');
const signButton = document.getElementById('sign');
const container = document.getElementById('container');

sigButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
}

var xhr = new XMLHttpRequest();
xhr.open('GET',
    'https://www.googleapis.com/drive/v3/about?fields=user&' +
    'access_token=' + params['access_token']);
xhr.onreadystatechange = function (e) {
  console.log(xhr.response);
};
xhr.send(null);

//  * Create form to request access token from Google's OAuth 2.0 server.
//  */
function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': '794781427005-4tv045lv55nfc12tg9evluc8i46k44c1.apps.googleusercontent.com',
                'redirect_uri': 'https://memorytravelbusiness.github.io/inicio-memorytravel/',
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

{ "web" = { "client_id": "794781427005-4tv045lv55nfc12tg9evluc8i46k44c1.apps.googleusercontent.com", "project_id": "alpine-air-362623", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "redirect_uris": ["https://memorytravelbusiness.github.io/login/"] } };

