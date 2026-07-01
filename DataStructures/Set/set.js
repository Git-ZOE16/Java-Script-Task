function Set(){

    const set = []

    function isEmpty(){
        if(set.length == 0) return true
        return false;
    }

    function add(item){
        set.push(item);
    }

    function remove(item){
        if(set.includes(item)){
            const index = set.indexOf(item);
            set.splice(index, 1);
            return true;
        }
        return false;
    }

    function hasValue(item){
        if(set.includes(item)){
            return true;
        }
        return false;
    }

    function getSize(){
        return set.length;
    }

    function getValues(){
        return set;
    }

    return { isEmpty, add, remove, hasValue, getSize, getValues };
}


module.exports = Set;