import chalk from 'chalk';
import validator from 'validator';

const email = validator.isEmail('niraj@qw.com');
console.log(email ? chalk.green.inverse(email) : chalk.red.inverse(email));

// Custom password validation function
const isPasswordValid = (password) => {
  const minLength = 6; // example: minimum length of 6 characters
  const hasNumber = /\d/; // example: must contain at least one number

  return password.length >= minLength && hasNumber.test(password);
};

const password = '1236';
const isPassword = isPasswordValid(password);
console.log(isPassword ? chalk.green.inverse(isPassword) : chalk.red.inverse(isPassword));
