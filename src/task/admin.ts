import { Person } from "./person";

export class Admin extends Person {
  constructor(firstName: string, lastName: string, email: string) {
    super(firstName, lastName, email, "Admin");
  }
}
