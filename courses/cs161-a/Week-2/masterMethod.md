Master Method:

-Black box for running time of a recursive algorithm.
-Only works when each recursive call is of equal size.

-Base case; T(n)  <= a constant, for all sufficiently small n. Constant time.
-For all larger n:
    T(N)< aT(N/b) + O(N^d)
    , the sub-case is a fraction.

    a = number of recurive calls >= 1
    b = factor by which the input shrinks, >1
    d = exponent assuming running time of the 'combine step', outside of recursive calls

    these are all independent of N.

    3 cases: compare A (number of recursive calls), and b^d power (shrink factor ^ work done outside of each call)

    O(n^d logn)if A = B^D , case 1
    O(n^d) if A < B^D, case 2
    O(n^logb(a)) if A > B^D, case 3

    Next video: put MM to use by instantiating for 6 different examples...