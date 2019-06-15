function ListNode(val) {
  this.val = val;
  this.next = null;
 }

var addTwoNumbers = function(l1, l2) {
  let l1Str = "";
  let l2Str = "";
  while (l1.next !== null) {
    l1Str += l1.val.toString();
    l1 = l1.next;
  }

  while (l2.next !== null) {
    l2Str += l2.val.toString();
    l2 = l2.next;
  }

  let sum = (parseInt(l1Str.split("").reverse().join("")) + parseInt(l2Str.split("").reverse().join(""))).toString();

  let resultNodeList = new ListNode(sum[sum.length - 1]);
  let resultHead = resultNodeList;
  for (let i = sum.length - 2;i >= 0;i--) {
    resultNodeList.next = new ListNode(sum[i]);
    resultNodeList = resultNodeList.next;
  }

  return resultHead;
};
