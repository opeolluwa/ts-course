import { Person } from "./person";

export class Driver extends Person {
  public rating: number;

  constructor(firstName: string, lastName: string, email: string) {
    super(firstName, lastName, email, "Driver");
    this.rating = this.generateRandomRating();
  }
  private generateRandomRating(): number {
    let rating = Math.round(Math.random() * 10);
    while (rating > 5 || rating == 0) {
      rating = Math.round(Math.random() * 10);
    }
    return rating;
  }

  public introduce(): void {
    console.log(
      `${this.firstName} ${this.lastName} ${this.rating}`
    );
  }
  public requestForPayment(): void {
    console.log(`${this.firstName} ${this.lastName} requested for payment`);
  }
}
