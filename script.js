function onSignIn(googleUser)
{
  let profile = googleUser.getBasicProfile();
  auth(action = "login", profile);
}
function auth(action, profile)
{

  let data = { UserAction: action };
  if (profile)
  {
    data = {
      UserName: profile.getGivenProfile(),
      UserLastName: profile.getFamilyprofile(),
      UserEmail: profile.getEmail(),
      UserAction: action,
    };
    }
}
$, ajax(
  {
    type: "POST",
    url: "../users/user.php",
    data: data,
    success: function (data)
    {
      console.log(data);
      }
}
)