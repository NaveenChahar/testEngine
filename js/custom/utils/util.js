
var config = {
    apiKey: "AIzaSyCf6JdhznXzNHaCzNIkGrakCJK48oBck-k",
    authDomain: "testengine-fdb51.firebaseapp.com",
    databaseURL: "https://testengine-fdb51.firebaseio.com",
    projectId: "testengine-fdb51",
    storageBucket: "testengine-fdb51.appspot.com",
    messagingSenderId: "681080557381"
  };
  firebase.initializeApp(config);

  function* autoGen(){
    var counter=1;
    while(true){
      yield counter;
      counter++;
    }

  }

  