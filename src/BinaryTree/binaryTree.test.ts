import {describe, expect, it} from '@jest/globals';
import BinaryTree from "./BinaryTree";

describe("BinaryTree", function () {

  it("init binary tree", () => {
    const treeSet = new BinaryTree([5,2,1,3,7,6,8]);
    expect(treeSet.root);
  });

  it("if not find - return false", () => {
    const treeSet = new BinaryTree([5,2,1,3,7,6,8]);
    const find = treeSet.has(53); 
    expect(find === false);
  });

  it("can find element", () => {
    const treeSet = new BinaryTree([5,2,1,3,7,6,8]);
    const find = treeSet.has(7); 
    expect(find === true);
  });

  it("can find link to node", () => {
    const treeSet = new BinaryTree([5,2,1,3,7,6,8]);
    const find = treeSet.find(7); 
    expect(find?.key === 7);
  });

  it("can insert new node", () => {
    const treeSet = new BinaryTree([5,2,1,3,7,6,8]);
    treeSet.insert(12,12);
    const find = treeSet.find(12); 
    expect(find?.key === 12);
  });

});
