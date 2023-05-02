let garage = [];

/*
Do not change newCar for base mode!
HINT: You will need to gather the input values and then call this function, passing in those input values.
*/
function newCar(yearInput, makeInput, modelInput){
  console.log('in newCar:', yearInput, makeInput, modelInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput
  }
  garage.push(newCarObject);
  $( '#yearInput' ).val( "" );
  $( '#makeInput' ).val( "" );
  $( '#modelInput' ).val( "" );
  return true;
} // end newCar

$( document ).ready( function() {
  $( '#addCarButton' ).click( function(){
    const yearInput = $( '#yearInput' ).val();
    const makeInput = $( '#makeInput' ).val();
    const modelInput = $( '#modelInput' ).val();
    newCar( yearInput, makeInput, modelInput );
    garageDisplay();
    console.log( garage );
  });

});

function garageDisplay(){
  let el = $( '#showGarage' );
  el.empty();

  for( let car of garage ){
    el.append( `<li>` + car.year + ` ` + car.make + ` ` + car.model + `</li>` );
  }
} // end garageDisplay

/* initial test
console.log( garage );
newCar( 1991, 'Plymouth', 'Horizon' );
console.log( garage ); */

console.log( garage );
