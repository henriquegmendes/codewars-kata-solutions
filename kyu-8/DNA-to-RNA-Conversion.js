// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a funciton which translates a given DNA string into RNA.

// For example:

// DNAtoRNA("GCAT") returns ("GCAU")

function DNAtoRNA(dna) {
  let newGenetic = '';
  for (let i = 0; i < dna.length; i += 1) {
    if (dna[i] === 'T') {
      newGenetic += 'U';
    } else {
      newGenetic += dna[i];
    }
  }
  return newGenetic;
}

function DNAtoRNA2(dna) {
  return dna.split('T').join('U');
}

console.log(DNAtoRNA('TTTTTTTT'));
console.log(DNAtoRNA2('TTTTTTTT'));
