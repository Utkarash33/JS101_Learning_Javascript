let a =22;
let b=222;
let c=22;
 if((a!=b) && (a!=c) && (b!=c))
 {
   if (a>b&&a>c)
{
  console.log("a is the greatest")
}else if (b>a&&b>c)
{
  console.log("b is the greatest")
} else if (c>a&&c>b)
 
{
  console.log("c is the greatest")
}
 }
 else if ((a==b)&&(a==c))
{
  console.log("All numbers are equal")
} else if (a==b)
{
  console.log("a and b are equal")
} else if (b==c)
{
  console.log("b and c are equal")
} else if (a==c)
{
  console.log("a and c are equal")
}