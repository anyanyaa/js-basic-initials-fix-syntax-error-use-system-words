function askInfo(message) {
  let name;

  do {
    name = prompt(message);

    if (name === null) {
      return null;
    }
  } while (name.trim() === '' || /\d/.test(name));

  return name;
}

function askInfoNumber(message) {
  let number;

  do {
    number = prompt(message);

    if (number === null) {
      return null;
    }
  } while (isNaN(number) || number.trim() === '');

  return +number;
}


function questioner(){
  const name = askInfo('Enter your name');
  if(name === null){
    alert('You cancelled')
    return
  }

  const lastName = askInfo('Enter your last name');
  if(lastName === null){
    alert('You cancelled')
    return
  }

  const age = askInfoNumber('Enter your age');
  if(age === null){
    alert('You cancelled')
    return
  }

  alert(`Hi ${name} ${lastName}, your age is ${age}`);

}

questioner()

