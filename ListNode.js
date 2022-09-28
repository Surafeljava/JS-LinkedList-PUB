module.exports = class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }

    toJSON(){
        let ll = this;
        let arr = []
        while(ll !== null) {
            arr.push(ll.value)
            ll = ll.next
        }
        return JSON.stringify(arr);
    }
}