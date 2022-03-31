// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce((acc, brand) => {
    brand.shoes.map((shoe) => acc.push(shoe));
    return acc;
  }, []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const total = dogs.reduce((acc, dog) => {
    acc += dog.age;
    console.log(acc);
    return acc;
  }, 0);
  return total / dogs.length;
  // dogs.reduce((acc, dog) => acc += dog.age, 0) / dogs.length
  // acc defaults to first value if not defined
};
