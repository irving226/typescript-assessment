const args = process.argv.slice(2).join(' ');

const start = parseInt(args.split('start=')[1].split(' ')[0], 10);
const floors = args.split('floor=')[1].split(',').map(Number);

let current = start;
let travelTime = 0;
const path = [start];

for (const floor of floors) {
    travelTime += Math.abs(floor - current) * 10;
    path.push(floor);
    current = floor;
}

console.log(`${travelTime} ${path.join(',')}`);