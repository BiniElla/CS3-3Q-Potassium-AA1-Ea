const pi = 3.14;
let r = 6.378e6;
let c = 2 * pi * r;
let s = 4 * pi * (r ** 2);
let v = 4 / 3 * pi * (r ** 3);

document.write('The radius of the sphere is ', + r );
document.write("<br></br>");
document.write('The circumference is ', + c);
document.write("<br></br>");
document.write('The surface area is ', + s);
document.write("<br></br>");
document.write('The volume is ', + v);
