const values = [10, 20, 30, 40, 50];
const n = values.length; // n is 5

for (let i = 0; i < n; i++) {
    const v3 = values[(i + 2) % n];
    console.log(`For i = ${i}, v3 = ${v3}`);
}
