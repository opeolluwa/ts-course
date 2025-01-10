export abstract class Person {
  private firstName: string;
  private lastName: string;
  private email: string;
  private occupation: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    occupation: string = ""
  ) {
    this.firstName = this.normalizeUserInput(firstName);
    this.lastName = this.normalizeUserInput(lastName);
    this.email = this.normalizeUserInput(email);
    this.occupation = this.normalizeUserInput(occupation);
  }

  private normalizeUserInput(input: string): string {
    return input.toLowerCase().trim();
  }

  public bookCar(): void {
    console.log(`${this.firstName} ${this.lastName} booked a car`);
  }

  public cancelBooking(): void {
    console.log(`${this.firstName} ${this.lastName} canceled a car booking`);
  }

  public makePayment(): void {
    console.log(`${this.firstName} ${this.lastName} made a payment`);
  }

  public rescheduleBooking(): void {
    console.log(`${this.firstName} ${this.lastName} rescheduled a booking`);
  }

  public trackCarMovement(): void {
    console.log(`${this.firstName} ${this.lastName} tracked a car movement`);
  }
}
