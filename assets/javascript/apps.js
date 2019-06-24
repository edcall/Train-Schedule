



$("#btn1").on("click", function () {

    var tFrequency = 3;

    // Time is 3:30 AM
    var firstTime = "03:30";
    train_times = [
        {
            firstTrain: 3,
            "trainName": "",
        }


    ]

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    append(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    append("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    append("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    append(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    append("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    ("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));