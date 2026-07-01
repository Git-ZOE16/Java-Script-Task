function Queue(){

    const queue = [];

    function isEmpty(){
        if(queue.length == 0) return true
        return false;
    }

    function enqueue(item){
        queue.push(item);
    }

   function dequeue(){
        return queue.shift();
   }

   function front(){
        return queue[0];
    }

    function rear(){
        return queue[queue.length - 1];
    }

    function getSize(){
        return queue.length;
    }

    function getValues(){
        return [...queue];
    }


    return{isEmpty, enqueue, dequeue, front, rear, getSize, getValues}
}

module.exports = Queue;