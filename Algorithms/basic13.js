// 1. Print all the integers from 1 to 255.
// function print_1_to_255(){
//     for(let i = 1; i <=255; i ++){
//         console.log(i)
//     }
// }
// print_1_to_255()

// 2. Print all odd integers from 1 to 255.
// function print_odds_1_to_255(){
//     for(let i = 1; i <=255; i ++){
//         if(i % 2 != 0){
//             console.log(i)
//         }
//     }
// }

//3. print_odds_1_to_255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// function print_ints_and_sum_0_to_255(){
//     let sum = 0;
//     for(let i = 1; i <=255; i ++){
//         sum += i
//         console.log("i: " + i + "; sum: "+ sum)
//     }
// }
// print_ints_and_sum_0_to_255()

// 4. Iterate and Print List
// Iterate through a given list, printing each value
// let lst = [1,2,3,4,5,6,7,8];
// function print_list_vals(arr){
//     for(let i = 0; i < arr.length; i ++){
//         console.log(arr[i])
//     }
// }
// print_list_vals(lst)

// //with for of loop
// function printListVals(arr){
//     for(num of arr){
//         console.log(num)
//     }
// }
// printListVals(lst)

// 5. Find and Print Max
// Given a list, find and print its largest element.
// let lst = [1,2,3,4,5,6,7,8];

// function print_max_of_list(lst){
//     let max = lst[0]
//     for(let i = 1; i < lst.length; i ++){
//         if(lst[i] > max){
//             max = lst[i]
//         }
//     }
//     console.log(max);
// }
// print_max_of_list(lst)

// 6. Get and Print Average
// Analyze a list’s values and print the average.
// let lst = [1,2,3,4,5,6,7,8];

// function print_average_of_list(lst){
//     sum = 0;
//     for(let i = 0; i < lst.length; i++){
//         sum += lst[i];
//     }
//     console.log(sum/lst.length);
// }
// print_average_of_list(lst)

// 7. List with Odds
// Create a list with all the odd integers between 1 and 255 (inclusive).
// function return_odds_list_1_to_255() {
//   let lst = new Array();
//   for (let i = 1; i <= 255; i++) {
//     if (i % 2 != 0) {
//       lst.push(i);
//     }
//   }
//   return lst;
// }
// console.log(return_odds_list_1_to_255());

// 8. Square the Values
// Square each value in a given list, returning that same list with changed values.
// let lst = new Array(1,2,3,4,5,6,7,8,9,10)
// function square_list_vals(lst){
//     for(let i = 0; i < lst.length; i ++){
//         lst[i] *= lst[i];
//     }
//     return lst;
// }

// console.log(square_list_vals(lst))

// 9. Greater than Val
// Given a list and a value, count and print the number of list values greater than val.
let lst = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let val = 5;
function greater_than_val(lst, val) {
  let greaterLst = new Array();
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] > val) {
      greaterLst.push(lst[i]);
    }
  }
  console.log(
    "count: " + greaterLst.length + ", list of values: " + greaterLst
  );
  console.log(`count: ${greaterLst.length}, list of values: ${greaterLst}`)
}
greater_than_val(lst, val);



// 10. Zero Out Negative Numbers
// Return the given list, after setting any negative values to zero.
// let lst = new Array(1,2,-3,-4,-5,6,7,8,9,10)
// function zero_out_list_negatives(lst){
//     for(let i = 0; i < lst.length; i ++){
//         if(lst[i] < 0){
//             lst[i] = 0;
//         }
//     }
//     return lst;
// }
// console.log(zero_out_list_negatives(lst))

// 11. Max, Min, Average
// Given a list, print the max, min and average values for that list.
// let lst = new Array(1,2,-3,-4,-5,6,7,8,9,10)
// function max_min_average(lst){
//     let max = lst[0];
//     let min = lst[0];
//     let sum = 0;
//     let average = 0;
//     let max_min_average = new Array();
//     for(let i = 0; i < lst.length; i ++){
//         sum += lst[i];
//         if(lst[i] > max){
//             max = lst[i]
//         }else if(lst[i] < min){
//             min = lst[i]
//         }
//     }
//     average = sum/lst.length
//     max_min_average.push(max)
//     max_min_average.push(min)
//     max_min_average.push(average)
//     console.log(max_min_average)

// }
// max_min_average(lst)

// 12. Shift List Values
// Given a list, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the list.
// let lst = new Array(1,2,-3,-4,-5,6,7,8,9,10)
// function shift_list_vals_left(lst){
//     for(let i = 1; i < lst.length; i ++){
//         lst[i-1] = lst[i];
//     }
//     lst[lst.length -1] = 0;
//     console.log(lst);
// }
// shift_list_vals_left(lst)

// 13. Swap String For List Negative Values
// Given a list of integers or floats, replace any negative values with the string 'Dojo'.
// let lst = new Array(1,2,-3,-4,-5,6,7,8,9,10)
// function swap_string_for_negatives(lst){
//     for(let i = 0; i < lst.length; i ++){
//         if(lst[i] < 0){
//             lst[i] = "Dojo";
//         }
//     }
//     console.log(lst)
// }
// swap_string_for_negatives(lst)



