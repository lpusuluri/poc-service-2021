class User {
  constructor({ id, firstName, lastName, email }) {
    this.customerId = id;
    this.firstName = firstName || null;
    this.lastName = lastName || null;
    this.email = email || null;
  }
}

export { User };
