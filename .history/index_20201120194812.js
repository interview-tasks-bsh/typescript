

const fields = collections.data[0].fields;

for (let field in fields) {
  delete fields[field].id;
}

console.log(fields);
