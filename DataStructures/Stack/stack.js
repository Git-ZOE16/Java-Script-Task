// let count = 0;


function Stack() {

    const stack = [];

    return {
        isEmpty() {
            return stack.length === 0;
        },

        push(item) {
            stack.push(item);
            return stack.length;
        },

        pop() {
            return stack.pop();
        },

        peek() {
            return stack[stack.length - 1];
        },

        getSize() {
            return stack.length;
        },

        getValues() {
            
            return [...stack]; 
        }
        
    };
}

module.exports = Stack;