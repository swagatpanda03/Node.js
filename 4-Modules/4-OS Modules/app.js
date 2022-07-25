const os = require('os');

const userInfo = os.userInfo();
console.log(userInfo);

const upTime = os.uptime();
console.log(`Uptime: ${upTime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
};

console.log(currentOS);