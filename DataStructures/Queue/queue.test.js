const queue = require("./queue");

test("test that Queue is Empty", () => {
    const myQueue = queue();
    expect(myQueue.isEmpty()).toBe(true);
});

test("test that i can enqueue an item into the Queue", () => {
    const myQueue = queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    myQueue.enqueue(5);
    expect(myQueue.isEmpty()).toBe(false);
});

test("test that i can dequeue an item from the Queue", () => {
    const myQueue = queue();

    myQueue.enqueue(1);
    myQueue.enqueue(2);
    
    expect(myQueue.isEmpty()).toBe(false);
});

test("test to check the item at the front of the Queue", () => {
    const myQueue = queue();

    myQueue.enqueue(1);
    myQueue.enqueue(2);

    const result = myQueue.front();
    expect(result).toBe(1);
});

test("test to check the item at the back of the Queue", () => {
    const myQueue = queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);

    const result = myQueue.rear();
    expect(result).toBe(2);
});

test("test to check how many items are the Queue", () => {
    const myQueue = queue();

    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);


    const result = myQueue.getSize();
    expect(result).toBe(3);
});

test("test to return all items in the Queue", () => {
    const myQueue = queue();

    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);

    const result = myQueue.getValues();
    expect(result).toEqual([1,2,3]);
});

test("test to clear all items from the Queue", () => {
    const myQueue = queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);

    myQueue.dequeue();

    const result = myQueue.isEmpty();
    expect(result).toBe(false);
});
