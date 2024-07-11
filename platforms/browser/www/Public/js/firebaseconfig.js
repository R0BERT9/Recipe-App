const firebaseConfig = {
    apiKey: "AIzaSyAakVhZOi0nrsNczq0j4DMNYwqyeFq3wrk",
    authDomain: "recipe-app-9746b.firebaseapp.com",
    projectId: "recipe-app-9746b",
    storageBucket: "recipe-app-9746b.appspot.com",
    messagingSenderId: "396098960375",
    appId: "1:396098960375:web:71aac2fab47c326c648cf2"
  };
  
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const storage = firebase.storage(); // Inicializa el servicio de almacenamiento
  