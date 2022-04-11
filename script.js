//Write a number as reverse
const num = 12345;
const reverse = (num) => parseInt (String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reverse(num));


//Write a function that returns a passed string with letters in alphabetical order.
function alpha(string){
    let arr = string.split("");
    res = arr.sort().join("");
    return res;
}

console.log(alpha("icecream"));

// Write a function that accepts a string as a parameter and converts the first letter of each word of the string to uppercase.
function uppercase(string)
{
    let firstarray = string.split(' ');
    let newarray = [];
    
for(let i = 0; i < firstarray.length; i++){
    newarray.push(firstarray[i].charAt(0).toUpperCase()+firstarray[i].slice(1));
}
return newarray.join(' ');
}
console.log(uppercase("tomorrow is test day"));


// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function prime(num)
{
    if (num === 1)
{
    return false;
}
else if(num === 2)
{
    return true;
}else
{
    for(var i = 2; i < num; i++)
    {
    if(num % i === 0)
    {
        return false;
    }
    return true;  
    }
}
console.log(prime(5));
}


// Write a function to extract unique characters from a string.
function uniquecharacter(string1)
{
    let str = string1;
    let characters="";
    for (let i = 0;i < str.length; i++)
{

if(characters.indexOf(str.charAt(i))==-1)
{
    characters += str[i];  

    }
}
    return characters;  
}  
console.log(uniquecharacter("JavaScriptwashardbutwe'vemadeit!"));



