function getEligibleDrivingLicence(age,ob) {
   setTimeout(function() {
       if(age>18)
       {
           ob("eligible");
       }
       else{
           ob("not eligible");
       }
   }, 10000);
}

function getGetAge(birthYear, currentYear, ob) {
    setTimeout(function () {
        let result = currentYear - birthYear;
        getEligibleDrivingLicence(result,ob);
    }, 10000);

}

let age = getGetAge(1996, 2020, showAge);

function showAge(age) {
    if (age == 'eligible' ) {
        console.log("eligible licence");
    }
    else {
        console.log('not eligible licence');
    }
}