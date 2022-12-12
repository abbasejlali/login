const validation = (data) => {
  const errors = {};

  if (!data.name) {
    errors.name = "name required";
  } else {
    delete errors.name;
  }

  if (!data.email) {
    errors.email = "email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "email not valide";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "password required";
  } else if (data.password.lenghth < 6) {
    errors.password = "The entered value is less than 6";
  } else {
    delete errors.password;
  }

  if (!data.confingpass) {
    data.confingpass = "confingpass required";
  } else if (data.confingpass !== data.password) {
    data.confingpass = "The entered values ​​are not equal";
  } else {
    delete errors.confingpass;
  }

  if (data.isaccepted) {
    delete data.isaccepted;
  } else {
    data.isaccepted = "isaccepted required";
  }

  return errors;
};

export default validation;
