DbCollectionController = new Stellar.Controller('dbcollection');

DbCollectionController.index = function() {
  if(is_admin()) {
    page = {
      title: "DbCollection",
      slug: "dbcollection",
      body: "showing the DbCollection",
      footer: "Thats the dbcollection example."
    };
    
    dbCollection = DbCollection.find();
    dbCollectionCount = dbCollection.count();
    
    Stellar.render('dbcollection_page', {page: page, dbCollection: dbCollection, dbCollectionCount: dbCollectionCount});
  }
};
