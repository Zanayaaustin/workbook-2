var x1,x2,y1,y2, presqrt,distance;
x1 = 2;
x2 = 5;
y1 = 9;
y2 = 7;


presqrt = Math.pow((x2-x1), 2) + Math.pow ((y2-y1), 2);

distance = Math.sqrt(presqrt);

console.log(distance);
