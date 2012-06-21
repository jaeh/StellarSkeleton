function standardHandler(error, response) {
  if(error) {
    if(error.error && error.error == 401) {
      Stellar.redirect('/');
      StellarSkeleton.alert('error', error.reason);
      console.log("error: "+error.error+" - "+error.reason);
      return false;
    }
    
    if(error.reason && error.error) {
      StellarSkeleton.alert('error', error.reason);
      console.log("error: "+error.error+" - "+error.reason);
    }
    
    StellarSkeleton.alert('error', 'There was an error updating that');
    console.log("error: There was an error updating that");
  }
}
