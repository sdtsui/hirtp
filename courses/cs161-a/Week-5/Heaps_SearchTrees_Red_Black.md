Heaps vs Search Trees:
  Heap: Parent smaller.
  Search: Left smaller.


Successors/Predecessors: look at subtrees.
  Followed Parent Pointers

In order traversal: recursively go, left subtree, self, right subtree


RB Tree:

-No 2 Red in a row: Consequences:
  -Red node has only black children
  -Red node has only black parents

-Any path must have same number of black nodes..

Goal: Height Guarantees

_________
Advanced Concept: Rotations:
The POint: 
-Constant work, only local operations...guarantee rebalancing an entire tree...


Left Rotation: switch parent/child

Right rotation is simply the inverse of the above...

Laudable Properties: 
  -constant time
  -preserve the search tree properties


____________
Insert:
  -Insert as usual
  -Recolor and/or perform rotations until invariants are restored...

  Case 1: Double Red X/Y
    -Insert as usual
    -Try coloring X red
    -if X's parent is black, done
    -Else Y is Red, Y has a black parent, W

    Recoloring: either restores conditions, or propagates double redupward
      -If W is the root nod


  Case 2: 
  -Must use...Recoloring and Rotations... 2-3 rotations + some recoloring is always sufficient.
    -text book or open source implementation...


In essence:
-Handling a double red:
  -No invariants broken
  -Propagate up, fixed.
  -Propagate up, root. Just recolor root black.
  -Propagate up, uncle of Parent is black, or null: Some rotation/recoloring hell.









_____________
Summary/Execute:
https://class.coursera.org/algo-007/lecture/149


Inserting a red...
  -If no parent: Recolor to Blck
  -Parent is Black: Done.
  -Parent is Red: Check:
    -(Must be Black) Blackparent:
      -Has Red Child (i.e., Uncle is Red): Re-color both Parent & Uncle Black AND  Grandparent Red
        -Make grandparent the new node to check for double black: Recurse...
      -Has Black Child: Sub-Cases problematic. Figure it out! (O logN)


_____________
Delete: Painful


https://www.cs.purdue.edu/homes/ayg/CS251/slides/chap13c.pdf

http://matt.might.net/articles/red-black-delete/