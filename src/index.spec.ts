import Person from "."

it("should return Felipe", () => {
  const person = new Person()
  expect(person.sayMyName()).toBe("Felipe")
})
