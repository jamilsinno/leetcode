/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let count: number = 0;

    if (root === null) {
        return 0;
    } 

    if (low <= root.val && root.val <= high) {
        count += root.val;
    }

    return count + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
};