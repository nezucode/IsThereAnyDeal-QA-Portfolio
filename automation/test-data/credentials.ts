export const credentials = {
  validUser: {
    email: "fkdnd@tiffincrane.com",
    password: "Qwerty12",
    repeatpassword: "Qwerty12"
  },

  invalidPassword: {
    email: "fkdnd@tiffincrane.com",
    password: "Qwerty9"
  },

  unregisteredUser: {
    email: "dexter@gmail.com",
    password: "Qwerty11"
  },

  unverifiedUser: {
    email: "hefix49157@itquoted.com",
    password: "admin123",
  },

  emptyEmail: {
    email: "",
    password: "Qwerty12"
  },

  emptyPassword: {
    email: "fkdnd@tiffincrane.com",
    password: ""
  },

  newUser: {
    email: `testuser${Date.now()}@gmail.com`,
    password: "TestPass12",
    repeatpassword: "TestPass12"
  }


};

export const expectedMessages = {
  invalidLogin: "The email and password combination is incorrect",
  emptyField: "Please fill in this field.",
};
