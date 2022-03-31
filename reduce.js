export const getSneaks = (brands) => {
  return brands.reduce((acc, brand) => {
    brand.shoes.map((shoe) => acc.push(shoe));
    return acc;
  }, []);

  // return brands.reduce((acc, brand) => [...acc, ...brand.shoes], [])
};

export const getAverageAge = (dogs) => {
  const total = dogs.reduce((acc, dog) => {
    acc += dog.age;
    console.log(acc);
    return acc;
  }, 0);
  return total / dogs.length;

  // return dogs.reduce((acc, dog) => acc += dog.age, 0) / dogs.length
  // acc defaults to first value if not defined
};
