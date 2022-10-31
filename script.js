function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sumOfNumbers = 0;
    for (let i = 0; i < initialArray.length; i++){
    if (typeof (initialArray[i]) === 'number'){
        sumOfNumbers = sumOfNumbers + initialArray[i];
    }
   }
   console.log(sumOfNumbers);
}
   calculateSumOfArray();

   function printPowsOf2(numberOfTask) {
        if(typeof (numberOfTask) === 'number') {
            for (let i = 1; i < numberOfTask; i = i*2){
                console.log(i);
            }
    }
}
   printPowsOf2("302");
   printPowsOf2(null);
   printPowsOf2(128);
   printPowsOf2(60);

   function printSeasonByMonth(month) {
    switch(month){
        case "DECEMBER":
        case "JANUARY":
        case "FEBRUARY":
            console.log("it's Winter now")
            break;
        case "MARCH":
        case "APRIL":
        case "MAY":
            console.log("it's Spring now")
            break;
        case "JUNE":
        case "JULY":
        case "AUGUST":
            console.log("it's Summer now")
            break;
        case "SEPTEMBER":
        case "OCTOBER":
        case "NOVEMBER":
            console.log("it's Autum now")
            break;
            default:
                console.log("it's not a month")
    }
   }
    
   printSeasonByMonth("FEBRUARY");
   printSeasonByMonth("NOVEMBER");
    printSeasonByMonth("JULY");
    printSeasonByMonth("APRIL");

    function calculateWordsInString(string) {
        let count = 1;
        for (let i = 0; i < string.length - 1; i++){
            if (string[i] === " " && string[i+1] != " "){
            count += 1;
            }
        }
        console.log(count);
       }
       calculateWordsInString("Easy string for count");
       calculateWordsInString("Easy");
       calculateWordsInString("Some string with a triple   space");
       calculateWordsInString("Some?  string, with a triple   space");