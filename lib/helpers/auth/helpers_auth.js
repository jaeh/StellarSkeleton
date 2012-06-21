function is_admin() {
  var auth = Session.get('user');
  
  if(!auth || auth.role != 'admin') {
    Stellar.redirect('/forbidden');
    return false;
  }
  return true;
}
