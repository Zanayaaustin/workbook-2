var length, width, boxes, area, tiles;

length = 12;
width = 10;

area = length*width;

tiles = area*1.1;

boxes =(tiles/12);

console.log( Math.ceil(boxes));