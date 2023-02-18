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

function evaluateTree(root: TreeNode | null): boolean {
    const isTrue = (node) => {
        if (node.val === 0) {return false}
        if (node.val === 1) {return true}
        if (node.val === 2) {
            return isTrue(node.left) || isTrue(node.right)
        }
        if (node.val === 3) {
            return isTrue(node.left) && isTrue(node.right)
        }
    }

    return isTrue(root)
};