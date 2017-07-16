var computers =[
    { name: 'Apple', ram: 24 },
    { name: 'Asus', ram: 4 },
    { name: 'Acer', ram: 32 }
];
// eski method
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];
    if(computer.ram < 16 ){
        allComputersCanRunProgram = false;
    }else {
        onlySomeComputersCanRunProgram = true;
    }
}

console.log(allComputersCanRunProgram)
console.log(onlySomeComputersCanRunProgram)

// Yeni
// Tum bilgisayarlar 16 gb ramden fazla ram'e mi sahip
computers.every((computer) => {
    return computer.ram > 16;
});

// Bazi bilgisayarlar 16 gb ramden fazla ram'e mi sahip
computers.some((computer) => {
    return computer.ram > 16;
});