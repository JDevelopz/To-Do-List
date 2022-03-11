
exports.getDate = function getDate (){
// make a variable for today date, today name date / day as what is between the ''
const today = new Date();
// making options for weekday. day and with month
const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  hour: 'numeric',
  minute: 'numeric'
};
// variable for day. todat + localeDateString in en-US, with the options above.
return today.toLocaleDateString('en-US', options);

};
