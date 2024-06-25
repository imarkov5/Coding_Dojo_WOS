//Predict 1:
var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

`
Var    |   Value                                                                                 Console
_________________________________________________________________________________________       _________
num    |  0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6                                                           8
                                                                                                    6
                                                                                                    7
                                                                                                    5
                                                                                                    3
                                                                                                    0
                                                                                                    9                                                                                                 
`
// Predict 2:
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

`
Var    |   Value                                                                                 Console
_________________________________________________________________________________________       _________
   i   |  0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6                                                           "That is odd!"
                                                                                                    "That is odd!"
                                                                                                    8
                                                                                                    4
                                                                                                    2
                                                                                                    0
                                                                                                    "That is odd!"
`
// Predict 3:
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);
`
Var    |   Value                                                                                 Console
_________________________________________________________________________________________       _________
  i    |  0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7                                                    [-1
       |                                                                                           -3
arr    |  -1, -3, -8, 5, "Zero", 2, -4, 1                                                          -8
       |                                                                                            5
newArr |  -5, -2, -1                                                                                "Zero"                                                                                         5
                                                                                                    2
                                                                                                   -4
                                                                                                    1]
                                                                                                   [-5
                                                                                                   -2
                                                                                                   -1]
`
