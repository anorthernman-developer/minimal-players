// test fixtures: 1.5 s stereo 16-bit WAV (44.1k) and 1.25 s mono 16-bit AIFF (48k)
const fs=require('fs');
function wav(sec,rate){const n=Math.round(sec*rate),b=Buffer.alloc(44+n*4);b.write('RIFF',0);b.writeUInt32LE(36+n*4,4);b.write('WAVEfmt ',8);b.writeUInt32LE(16,16);b.writeUInt16LE(1,20);b.writeUInt16LE(2,22);b.writeUInt32LE(rate,24);b.writeUInt32LE(rate*4,28);b.writeUInt16LE(4,32);b.writeUInt16LE(16,34);b.write('data',36);b.writeUInt32LE(n*4,40);
for(let i=0;i<n;i++){const v=Math.round(Math.sin(2*Math.PI*440*i/rate)*12000*(1-(i%(rate/4))/(rate/4)));b.writeInt16LE(v,44+i*4);b.writeInt16LE(v,46+i*4)}return b}
function aiff(sec,rate){const n=Math.round(sec*rate),comm=Buffer.alloc(26),ssnd=Buffer.alloc(16+n*2);
comm.write('COMM',0);comm.writeUInt32BE(18,4);comm.writeInt16BE(1,8);comm.writeUInt32BE(n,10);comm.writeInt16BE(16,14);
// 80-bit extended rate
let e=Math.floor(Math.log2(rate));comm.writeUInt16BE(16383+e,16);comm.writeUInt32BE(Math.round(rate*2**(31-e))>>>0,18);
ssnd.write('SSND',0);ssnd.writeUInt32BE(8+n*2,4);for(let i=0;i<n;i++)ssnd.writeInt16BE(Math.round(Math.sin(2*Math.PI*330*i/rate)*12000),16+i*2);
const body=Buffer.concat([Buffer.from('AIFF'),comm,ssnd]),h=Buffer.alloc(8);h.write('FORM',0);h.writeUInt32BE(body.length,4);return Buffer.concat([h,body])}
fs.writeFileSync('test.wav',wav(1.5,44100));fs.writeFileSync('test.aif',aiff(1.25,48000));
