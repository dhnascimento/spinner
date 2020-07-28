const frames = ["\r|         ", 
                "\r/         ",
                "\r-         ",
                "\r\\        ",
                "\r|         ", 
                "\r/         ",
                "\r-         ",
                "\r\\        ",
                "\r|         "
                ];

let TimeCounter = 100;

for(const frame of frames) {
  setTimeout(() => process.stdout.write(frame), TimeCounter);
  TimeCounter += 200;
};
