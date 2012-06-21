Template.dbcollection_page.events = {
  'click button.click' : addClick
};


function addClick(e) {
  if(e.preventDefault) {
    e.preventDefault();
  }
  
  target = $(e.target);
  args = {
    _id: target.attr('data-id'),
    auth: Stellar.session.getKey()
  };
             
  Meteor.call('dbCollectionAddClick', args, standardHandler);
}

