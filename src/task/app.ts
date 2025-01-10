import { Driver } from "./driver";

const alex = new Driver("Alex", "Green", "alex-green@gmail.com");
alex.bookCar()
alex.cancelBooking()
alex.makePayment()
console.log(alex.rating)
alex.rescheduleBooking()
alex.trackCarMovement()