const ListNode = require("../ListNode");
const mergeLinkedLists = require("../index");

const assert = require('assert').strict


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

let l3 = null;
let l4 = e12;

let l5 = e7;
l5.next = e8;

let l6 = new ListNode(-1)
l6.next = new ListNode(0)

describe("Merge L1 and L2", function() {
    it('is merged', function() {
        let merged = mergeLinkedLists(l1, l2);

        assert.equal(merged.toJSON(), "[1,2,3,4,5,6]")
    })
})

describe("Merge L2 and L1", function() {
    it('is merged', function() {
        let merged = mergeLinkedLists(l2, l1);

        assert.equal(merged.toJSON(), "[1,2,3,4,5,6]")
    })
})

describe("Merge L3 and L4", function() {
    it('is merged', function() {
        let merged = mergeLinkedLists(l3, l4);

        assert.equal(merged.toJSON(),"[12]")
    })
})

describe("Merge L4 and L3", function() {
    it('is merged', function() {
        let merged = mergeLinkedLists(l4, l3);

        assert.equal(merged.toJSON(),"[12]")
    })
})

describe("Merge L5 and L6", function() {
    it('is merged', function() {
        let merged = mergeLinkedLists(l5, l6);

        assert.equal(merged.toJSON(),"[-1,0,7,8]")
    })
})

describe("Merge L6 and L5", function() {
    it('is merged', function() {
        let merged = mergeLinkedLists(l6, l5);

        assert.equal(merged.toJSON(),"[-1,0,7,8]")
    })
})


describe("Merge L6 and L6", function() {
    it('is merged', function() {
        let merged = mergeLinkedLists(l6, l6);

        assert.equal(merged.toJSON(),"[-1,-1,0,0]")
    })
})

