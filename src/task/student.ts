import { Person } from "./person";

export class Student extends Person {
  constructor(firstName: string, lastName: string, email: string) {
    super(firstName, lastName, email, "Student");
  }
}
