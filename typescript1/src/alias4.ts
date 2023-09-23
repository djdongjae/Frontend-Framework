type Person = {readonly name : string, age : number, email : string};

const p1 : Person = {name : "홍길동", age : 16, email : "hong@skhu.net"};
const p2 : Person = {name : "임꺽정", age : 19, email : "lim@skhu.net"};

p1.age = 17;
p1.name = "Hong, Gil-dong";

console.log(p1);
console.log(p2);

export {}