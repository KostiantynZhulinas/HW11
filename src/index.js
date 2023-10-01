// function logArguments(fn) {
//     return function (...args) {
//       console.log('Arguments:', args);
//       return fn(...args);
//     };
//   }

//   function add(a, b) {
//     return a + b;
//   }
  
//   const decoratedAdd = logArguments(add);
  
//   const result = decoratedAdd(5, 15);
//   console.log('Result:', result);


function validate(fn, validator) {
    return function (...args) {
      if (validator(...args)) {
        return fn(...args);
      } else {
        throw new Error('Невідповідний аргумент');
      }
    };
  }
  
  function areAllNumbers(...args) {
    return args.every(arg => typeof arg === 'number');
  }
  
  function addNumbers(a, b) {
    return a + b;
  }
  
  const validatedAddNumbers = validate(addNumbers, areAllNumbers);
  
  try {
    console.log(validatedAddNumbers(5, 15));
    console.log(validatedAddNumbers(5, '15'));
  } catch (error) {
    console.error(error.message);
  }
  