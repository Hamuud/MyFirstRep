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