const a = 1;

const user = {
  name: "john",
  surname: "doe",
  age: 25,
};

user;

const ageAfterNYear = (userAge, n) => {
  return userAge + n;
};

console.log(ageAfterNYear(user.age, a));
