const url = 'https://randomuser.me/api/';

const getUser = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      dob: { age },
      location,
    } = person;
    const {
      street: { number, name },
    } = location;

    // these should match with dataset attribute in html
    return {
      image,
      phone,
      email,
      password,
      age,
      name: `${first} ${last}`,
      street: `${number} ${name}`,
    };
  } catch (error) {
    console.log(error);
  }
};

export default getUser;
