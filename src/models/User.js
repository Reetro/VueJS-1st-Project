
class User {
  constructor(name, email, contacted = false, acceptedContactes = false) {
    this.name = name
    this.email = email
    this.contacted = contacted
    this.acceptedContactes = acceptedContactes
  }
}


export default User
