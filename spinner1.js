setTimeout(() => process.stdout.write('\r|     '), 100);

setTimeout(() => process.stdout.write('\r/     '), 400);

setTimeout(() => process.stdout.write('\r-     '), 600);

 // Need to escape the backslash since it's a special character.
setTimeout(() => process.stdout.write('\r\\     '), 900);


setTimeout(() => process.stdout.write('\r|     '), 1200);

setTimeout(() => process.stdout.write('\r/     '), 1500);

setTimeout(() => process.stdout.write('\r-     '), 1700);


// Need to escape the backslash since it's a special character.
setTimeout(() => process.stdout.write('\r\\     '), 1900);

setTimeout(() => process.stdout.write('\r|     '), 2000);