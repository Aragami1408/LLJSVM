const createMemory = require('./create-memory');
const CPU = require('./cpu');
const instructions = require('./instructions');

const memory = createMemory(256);
const writableBytes = new Uint8Array(memory.buffer);

const cpu = new CPU(memory);

// mov 0x1234, r1
writableBytes[0] = instructions.MOV_LIT_R1;
writableBytes[1] = 0x12;
writableBytes[2] = 0x34;

// mov 0xABCD, r2
writableBytes[3] = instructions.MOV_LIT_R2;
writableBytes[4] = 0xAB; 
writableBytes[5] = 0xCD;

// add r1, r2
writableBytes[6] = instructions.ADD_REG_REG;
writableBytes[7] = 2;
writableBytes[8] = 3;


// cpu.debug();
cpu.step();
// cpu.debug();
cpu.step();
// cpu.debug();
cpu.step();
// cpu.debug();