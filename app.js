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


$("button").on("click", function () {
   var newTrain = {
      name: $("#train-name").val().trim(),
      firstTrain: $("#first-train").val().trim(),
      destination: $("#destination").val().trim(),
      frequency: $("#frequency").val().trim(),



   }
   database.ref().push(newTrain)
   console.log(newTrain);
   var currentDate = moment().format("MM/DD/YYYY")

   var startTime = moment(currentDate + " " + newTrain.firstTrain)
   console.log(startTime)
   var trainTime = startTime

   while (trainTime.isBefore(moment())){
      trainTime.add(newTrain.frequency, "minutes")
   }
   






   var trainData = $("<tr>").append("<td>" + newTrain.name + "</td>")
   trainData.append("<td>" + newTrain.destination + "</td>")
   trainData.append("<td>" + newTrain.frequency + "</td>")
   trainData.append("<td>" + trainTime.format("hh:mm") + "</td>")

   $("#trains").append(trainData);


});