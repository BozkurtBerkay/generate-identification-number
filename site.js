let identificationNumber = [""];
  
function createIdentificationNumber()
{
    identificationNumber = createFirstNineRakams();

    identificationNumber[9] = (singleSum(identificationNumber) - doubleSum(identificationNumber)) % 10;
    identificationNumber[10] = beforeSum(identificationNumber) % 10;
    
    var identificationNumbers = identificationNumber.toString();
   
    document.getElementById('identificationNo').innerHTML = identificationNumbers.replace(/[,]/g, "");

}

function createFirstNineRakams()
{
    identificationNumber.length = 9;
    identificationNumber[0] = Math.floor(Math.random() * 9) + 1;

    for(i = 1 ; i < 9 ; i++){
        identificationNumber[i] = Math.floor(Math.random() * 9);
    }
    return identificationNumber;
}

function singleSum(array)
{
    let singleSum = 0;
    for (i = 0; i < array.length; i += 2)
    {
        singleSum += array[i];
    } 
    return singleSum * 7;
}


function doubleSum(array)
{
    let doubleSum = 0;

    for (i = 1; i < array.length; i += 2)
    {
        doubleSum += array[i];
    } 
    return doubleSum;
}

function beforeSum(array)
{
    let beforeSum = 0;

    for(i = 0 ; i < array.length; i++){
        beforeSum += array[i]
    }

    return beforeSum;
}
