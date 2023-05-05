// A function that uses destructuring to extract specific properties from an object
function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

// An example object to test the fullName function
const person = {
  firstName: "Gan",
  lastName: "Dold",
  age: 30,
};

export const asyncFunc = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async function executed successfully");
    }, 1000);
  });
};

export const arrowFunc = () => {
  return "Arrow function executed successfully";
};

// Export the destructuring-related functions and objects
export { fullName, person };
