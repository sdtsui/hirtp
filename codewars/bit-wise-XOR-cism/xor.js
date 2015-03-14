function swapper(a, b) {
//Note to self: think of it like overlapping venn diagrams.
  a = a^b;
  b = a^b;
  a = a^b
  return [a, b]
}