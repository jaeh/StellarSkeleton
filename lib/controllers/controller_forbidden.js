ForbiddenController = new Stellar.Controller("forbidden");

ForbiddenController.index = function() {
   page = {
    title: "Forbidden",
    slug: "forbidden",
    body: "You can only access the page you tried to access if you are logged in.",
    footer: "The login form is in the right sidebar ->"
  };
  
  Stellar.render('static_page', {page: page});
}
