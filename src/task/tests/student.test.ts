import { Student } from "../student";
import { describe, expect, test } from "@jest/globals";

const student = new Student("Adeoye", "Adefemi", "adefemi@mailer.com");

test("Should book a car", ()=>{
    expect(student.bookCar()).toBeCalled()
})