var arr = ['Sunday'] ;
arr.push('Monday');
for(var i=0;i<arr.length;i++)
{console.log(i);}
for (var i=0;i<arr.length;i++)
{console.log(arr[i]);}

var userName = prompt('what is your name ?');
while(userName !== 'Dima')
{userName=prompt("what\'s your name ?");
}


var index=0;
do {
    console.log(index);
    index++;
} while (index < 50);