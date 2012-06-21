HomeController = new Stellar.Controller('home');

HomeController.index = function() {
  page = {
    title: "home",
    slug: "home",
    body: "Welcome to the Stellar Skeleton",
    footer: "We hope you will enjoy your stay :)"
  };
  
  Stellar.render('static_page', {page: page});
};

HomeController.show = function() {
  Stellar.redirect('/');
}

HomeController.logout = function() {
  //tell the server the user logged out
  Meteor.call('logoutUser', Session.get('auth'));
  //pass null here to completely delete the cookie
  Stellar.session.updateKey(null);
  //set the user and auth to false
  Session.set('user', false);
  Session.set('auth', false);
  //redirect to the startpage
  Stellar.redirect('/');
};
