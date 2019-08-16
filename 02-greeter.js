// get arguments from commandline
const name = process.argv[2];

// check if there is a name
if (name) {
  // if there is a name, give back greeting
  console.log(`Hello ${name}.`);
} else {
  // if there is no name, request name as commandline argument the next time
  console.log(`Sorry, no input.`);
}
