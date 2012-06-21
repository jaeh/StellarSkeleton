Meteor.methods({
  insertDbCollection: insertDbCollection,
  updateDbCollection: updateDbCollection,
  removeDbCollection: removeDbCollection,
  dbCollectionAddClick: dbCollectionAddClick
});

function insertDbCollection(args) {
  if(user = checkAuth(args.auth)) {
    if(args && args.name) {
      slug = slugify(args.name);
      
      itemId = DbCollection.insert({
        name: args.name,
        slug: slug,
        clicks: 0
      });
      return itemId;
    }
    throw new Meteor.Error(666, 'Missing args');
    return false;
  }
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
}

function dbCollectionAddClick(args) {
  if(user = checkAuth(args.auth)) {
    if(args && args._id) {
      item = DbCollection.findOne({_id: args._id});
      if(item) {
        clicks = item.clicks + 1;
        itemId = DbCollection.update({_id: args._id},{$inc: {clicks: 1}});
        return itemId;
      }
    }
    throw new Meteor.Error(666, 'Missing args');
    return false;
  }
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
}


function updateDbCollection(args) {
  if(user = checkAuth(args.auth)) {
  
    if(args && args._id && args.name) {
      
      slug = slugify(args.name);
      itemId = DbCollection.update({_id: args._id},{$set: {
        name: args.name,
        slug: slug,
        clicks: args.clicks
      }});
  
      return itemId;
    }
    throw new Meteor.Error(666, 'Missing args');
    return false;
  }
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
}


function removeDbCollection(args) {
  if(user = checkAuth(args.auth)) {
    if(args && args._id) {
      DbCollection.remove({_id: args._id});
      return true;
    }
    throw new Meteor.Error(666, 'Missing args');
    return false;
  }
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
}
