function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const personValues = {
  firstName: "Gan",
  lastName: "Dold",
  age: 30,
};

const person = {
  ...personValues,
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

export { fullName, person };
