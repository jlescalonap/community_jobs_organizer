import Person from "@/index"

it("should return Felipe", () => {
  const person = new Person()
  expect(person.sayMyName()).toBe("Felipe")
})
