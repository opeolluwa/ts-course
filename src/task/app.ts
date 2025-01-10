import { Admin } from "./admin";
import { Driver } from "./driver";
import { Student } from "./student";

const alex = new Driver("Alex", "Green", "alex-green@gmail.com");
alex.bookCar();
alex.cancelBooking();
alex.makePayment();
console.log(alex.rating);
alex.rescheduleBooking();
alex.trackCarMovement();
alex.introduce();
alex.requestForPayment();

const bob = new Student("Bob", "Maxims", "bob@mailer.com");
bob.bookCar();
bob.cancelBooking();
bob.makePayment();
bob.rescheduleBooking();
bob.trackCarMovement();

const jane = new Admin("Jane", "Robbins", "jr@mailer.com");
jane.bookCar();
jane.cancelBooking();
jane.makePayment();
jane.rescheduleBooking();
jane.trackCarMovement();
