'use strict'

let n = parseInt(process.argv[2])

const parensPrinter = (n) => {
  let solutionsTotal = 0

  const parensAdder = (open, close, string) => {
    if(open === n && close === n){
	    console.log(string)
	    solutionsTotal++
	  }
    if(open < close){
      return
    }

    if(close < n){
      parensAdder(open, close+1, string+'}')
    }
    
    if(open < n){
      parensAdder(open+1, close, string+'{')
    }
  }
  parensAdder(0,0,'')
  console.log(`${n} Pairs, Total Solutions: ${solutionsTotal}`)
}
parensPrinter(n)