const ListNode = require("./ListNode");
const mergeLinkedLists = require("./index");

let e1 = new ListNode(1)
let e2 = new ListNode(2)
let e3 = new ListNode(3)
let e4 = new ListNode(4)
let e5 = new ListNode(5)
let e6 = new ListNode(6)
let e7 = new ListNode(7)
let e8 = new ListNode(8)
let e9 = new ListNode(9)
let e10 = new ListNode(10)
let e11 = new ListNode(11)
let e12 = new ListNode(12)

let l1 = e1;
e1.next = e2;
e2.next = e3;

let l2 = e4;
e4.next = e5;
e5.next = e6;

mergeLinkedLists(l1,l2)