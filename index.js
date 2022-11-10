const ListNode =  require('./ListNode')

//  ListNode implementation looks like the folllowing
// 
// class ListNode {
//     constructor(x) {
//         this.value = x;
//         this.next = null;
//     }
//
// }
//

module.exports = function mergeLinkedLists(l1, l2) {
    let tempHead = null;
    let head = null;

    if(l1==null || l2==null){
        return l1 ? l1 : l2;
    }

    if(l1.value > l2.value){
        tempHead = new ListNode(l2.value);
        l2 = l2.next;
    }else{
        tempHead = new ListNode(l1.value);
        l1 = l1.next;
    }

    head = tempHead;

    while(l1 && l2){
        if(l1.value > l2.value){
            tempHead.next = new ListNode(l2.value);
            tempHead = tempHead.next;
            l2 = l2.next;
        }else{
            tempHead.next = new ListNode(l1.value);
            tempHead = tempHead.next;
            l1 = l1.next;
        }
    }

    while(l1){
        tempHead.next = new ListNode(l1.value);
        tempHead = tempHead.next;
        l1 = l1.next;
    }

    while(l2){
        tempHead.next = new ListNode(l2.value);
        tempHead = tempHead.next;
        l2 = l2.next;
    }

    return head;
}