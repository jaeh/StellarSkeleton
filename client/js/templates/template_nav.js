Template.nav.menuItems = function () {
  mIs = [
    {url: "/", text: "home"},
    {url: "/dbcollection", text: "dbcollection"}
  ];
  
  if(Session.get('user')) {
    mIs.push({url: '/home/logout', text: 'Logout'});
  }
  return mIs;
};

