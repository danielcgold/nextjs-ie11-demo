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
