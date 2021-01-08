alert("Welcome to My CALCULATOR")
a=prompt("Enter the Operation You want to perform: \n(1) for ADDITION\n(2) for SUBTRACTION\n(3) for MULTIPLICATION\n(4) for DIVISION ")
if (a==1){
    b=Number(prompt("Enter first number: "))
    c=Number(prompt("Enter second number: "))
    d=b+c
    alert("Sum: "+d)
}
else if(a==2){
    b=Number(prompt("Enter first number: "))
    c=Number(prompt("Enter second number: "))
    d=b-c
    alert("Result: "+d)
}
else if(a==3){
    b=Number(prompt("Enter first number: "))
    c=Number(prompt("Enter second number: "))
    d=b*c
    alert("Product: "+d)
}
else if(a==4){
    b=Number(prompt("Enter first number: "))
    c=Number(prompt("Enter second number: "))
    d=b/c
    alert("Result: "+d)
}
else{
    alert("Error: Wrong Selection")
    alert("For further operation refresh the page")
}