// There is a sentence which has a mistake in its ordering.

// The part with a capital letter should be the first word.

// Please build a function for re-ordering


// Examples
// >>> re_ordering('ming Yao')
// 'Yao ming'

// >>> re_ordering('Mano donowana')
// 'Mano donowana'

// >>> re_ordering('wario LoBan hello')
// 'LoBan wario hello'

// >>> re_ordering('bull color pig Patrick')
// 'Patrick bull color pig'

function reOrdering(text) {
  return text.split(' ').reduce((acc, e) => {
    if (e[0] === e[0].toUpperCase()) {
      acc.unshift(e);
    } else {
      acc.push(e);
    }
    return acc;
  }, []).join(' ');
}

console.log(reOrdering('wario LoBan hello'));
