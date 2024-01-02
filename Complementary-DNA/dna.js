let DNAcomplements = {
  A: "T",
  T: "A",
  G: "C",
  C: "G",
};

function DNAStrand(dna) {
  return dna
    .split("")
    .map((element) => DNAcomplements[element])
    .join("");
}
console.log("1st test:", DNAStrand("ATTGCCCCGC")); // Output: "TAACG"
console.log("2nd test:", DNAStrand("GTAT")); // Output: "CATA"
console.log("3rd test:", DNAStrand("AAGG")); // Output: "TTCC"
console.log("4th test:", DNAStrand("CGCG")); // Output: "GCGC"
console.log("5th test:", DNAStrand("TATA")); // Output: "ATAT"

// So, basically this function takes a string and matches it with its opposite DNA base pair.
