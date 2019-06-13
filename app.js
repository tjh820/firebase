var firebaseConfig = {
   apiKey: "AIzaSyB7_c5SFtFFwc52dm29WNCzfKdHCE9o9Q4",
   authDomain: "crane-2bd76.firebaseapp.com",
   databaseURL: "https://crane-2bd76.firebaseio.com",
   projectId: "crane-2bd76",
   storageBucket: "",
   messagingSenderId: "993037148950",
   appId: "1:993037148950:web:46aa12384bdd27b5"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//on click listener
$("button").on("click", function () {
   var newTrain = {
      name: $("#train-name").val().trim(),
      firstTrain: $("#first-train").val().trim(),
      destination: $("#destination").val().trim(),
      frequency: $("#frequency").val().trim(),



   }
   //pushing data to db
   database.ref().push(newTrain)
   //get current date in use for creating the time
   var currentDate = moment().format("MM/DD/YYYY")
   var startTime = moment(currentDate + " " + newTrain.firstTrain)
   
//adds freq to startTime until u reach the current time
   while (startTime.isBefore(moment())){
      startTime.add(newTrain.frequency, "minutes")
   }
   
//train time from now
 var newTime = startTime.diff(moment(), "minutes");



//formatting data & appending it to table

   var trainData = $("<tr>").append("<td>" + newTrain.name + "</td>")
   trainData.append("<td>" + newTrain.destination + "</td>")
   trainData.append("<td>" + newTrain.frequency + "</td>")
   trainData.append("<td>" + startTime.format("hh:mm a") + "</td>")
   trainData.append("<td>" + newTime + "</td>")

   $("#trains").append(trainData);


});