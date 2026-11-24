// Say What Actually Broke — make.fun bounty u-po-pu-say-what-actually-broke-a2c153b5
// Prints one line of error copy: the brutal truth about what went wrong,
// funny on a single read, and shippable in a dialog. At most 200 characters.

const LINE =
  "Your file didn't save — the server ran out of disk space, and the only person who knew how to clean it up left in 2019.";

// The competition's rule, enforced at run time: one line, at most 200 chars.
if (LINE.length > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(
    `Error copy must be a single line of at most 200 characters (got ${LINE.length}).`,
  );
}

console.log(LINE);
console.log(`(${LINE.length} characters)`);
