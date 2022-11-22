const person = {
  firstName: 'Marvin',
  lastName: 'Loreto',
  hobby: 'Pokemon Catching'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("This person's full name is:", fullName);

person.job = 'Barista';
console.log("This person's current job is:", person.job);

person.previousJob = null;
console.log("This person's previous job was:", person.previousJob);

console.log(person);
