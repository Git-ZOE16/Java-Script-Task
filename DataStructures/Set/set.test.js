const set = require('./set');

test("test that Set is Empty", () => {
    const mySet = set();
    expect(mySet.isEmpty()).toBe(true);
});

test("test that i can add an item to the Set", () => {
    const mySet = set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);
    expect(mySet.isEmpty()).toBe(false);
});

test("test that i can remove an item from the Set", () => {
    const mySet = set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);

    const result = mySet.remove(1);
    expect(result).toBe(true);
});

test("test that set has a value that exists", () => {
    const mySet = set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);

    const result = mySet.hasValue(2);
    expect(result).toBe(true);
});

test("test to know how many items are stored in the set", () => {
    const mySet = set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);

    const result = mySet.getSize();
    expect(result).toEqual(3);
});

test("test to return all stored items in the set", () => {
    const mySet = set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);

    const result = mySet.getValues();
    expect(result).toEqual([1,2,3]);
});

test("test to clear all stored items in the set", () => {
    const mySet = set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);

    mySet.remove(1);
    mySet.remove(2);
    mySet.remove(3);

    expect(mySet.isEmpty()).toBe(true);
});