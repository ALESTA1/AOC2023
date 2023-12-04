const readline = require('readline');
const fs = require('fs');

const filePath = 'path/to/your/file.txt';

const fileStream = fs.createReadStream('input.txt');

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity, 
});

// Event listener for each line read
var ans = 0;
var arr = Array(200010).fill(0)
var id = 0
rl.on('line', (line) => {
  //console.log(`Line from file: ${line}`);
  const temp = line.split(':')
  const x = temp[1].split('|')
  var p = 0;  
  id = id+1
  const y =x[0].split(' ')
  const z = x[1].split(' ')

  y.forEach(e => {
    if(e!=' '){
      //console.log(e)
      z.forEach(num=>{
        if(parseInt(e)===parseInt(num))p=p+1
      })
    }    
  })
  
  arr[id] = arr[id]+1
  for(var i=id+1;i<=id+p;i++)arr[i] += arr[id]


});

// Event listener for end of file
rl.on('close', () => {
  console.log('End of file reached.');
  for(var i=1;i<=id;i++){
    console.log(i, arr[i])
    ans = ans + arr[i]}
  console.log(ans);  
});


