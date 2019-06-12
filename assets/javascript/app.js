var firebaseConfig = {
    apiKey: "AIzaSyBQ4hwU_BKw5Py6Afdf5UyRdheIPeMGHrY",
    authDomain: "trainscheduleproject-18d88.firebaseapp.com",
    databaseURL: "https://trainscheduleproject-18d88.firebaseio.com",
    projectId: "trainscheduleproject-18d88",
    storageBucket: "",
    messagingSenderId: "667608258919",
    appId: "1:667608258919:web:5720e885792c876f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  //button for adding trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();

  // grabs user data
  var trainInput = $("#add-train-input").val().trim();
  var destInput = $("#destination-input").val().trim();
  var startInput = $("#start-input").val().trim(); 
  var frequencyInput = $("#frequency-input").val().trim();

  //Create local "temporary" object for holding train data

  var newTrain = {
    Train: trainInput,
    Destination: destInput,
    Start: startInput,
    Frequency: frequencyInput,
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.Train);
  console.log(newTrain.Destination);
  console.log(newTrain.Start);
  console.log(newTrain.Frequency);

  alert("Train Added Successfully");

 // clears input
  $("#add-train-input").val("");
  $("#destination-input").val("");
  $("#start-input").val("");
  $("#frequency-input").val("");
})

// Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

// Store everything into a variable.
  var trainInput = childSnapshot.val().Train;
  var destInput = childSnapshot.val().Destination;
  var startInput = childSnapshot.val().Start;
  var ferequencyInput = childSnapshot.val().Frequency;

// Log trian Info
console.log(trainInput);
console.log(destInput);
console.log(startInput);
console.log(ferequencyInput);  

 // Calculate frequency

 var newRow = $("<tr>").append(
    $("<td>").text(trainInput),
    $("<td>").text(destInput),
    $("<td>").text(startInput),
    $("<td>").text(ferequencyInput),
    
  );
  $("#train-table > tbody").append(newRow);

})
