function sBrkts(x) {
  if (x[0] == "(" && x[x.length - 1] == ")") {
    console.log(true);
  } else if (x[0] == "[" && x[x.length - 1] == "]") {
    console.log(true);
  } else if (x[0] == "{" && x[x.length - 1] == "}") {
    console.log(true);
  } else {
    console.log(false);
  }
}

sBrkts(`[Hello, World]`);
sBrkts(`{Hello, World]`);
