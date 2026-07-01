const Stack = require("./stack");

test("test that Stack is empty", () => {
    const myStack = Stack(); 
    expect(myStack.isEmpty()).toBe(true);
});

test("test that i can push an item to the stack", () => {
    const myStack = Stack();
    const result = myStack.push(1); 
    expect(result).toBe(1);
});

test("test that i can pop an items from the stack", () => {
    const myStack = Stack();
    myStack.push(10);
    myStack.push(20);
    
    const result = myStack.pop(); 
    expect(result).toBe(20);
});

test("test that i can peek at the top of stack without removing it", () => {
    const myStack = Stack();
    myStack.push(10);
    myStack.push(20);

    const result = myStack.peek();
    expect(result).toBe(20);
    expect(myStack.getSize()).toBe(20 ? 2 : 2); 
});

test("test to check the size of stack currently", () => {
    const myStack = Stack();
    myStack.push(10);
    myStack.push(20);

    const result = myStack.getSize();
    expect(result).toBe(2);
});

test("test to return all values stored in stack", () => {
    const myStack = Stack();
    myStack.push(10);
    myStack.push(20);

    const result = myStack.getValues();
    expect(result).toEqual([10, 20]);
});

test("test to clear all values from the stack", () => {
    const myStack = Stack();
    myStack.push(10);
    
    myStack.pop(); 
    
    const result = myStack.isEmpty();
    expect(result).toBe(true);
});

