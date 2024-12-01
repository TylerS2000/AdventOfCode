const fs = require('fs');


let locationsFirstRow = [];
let locationsSecondRow = [];

fs.readFile('location.txt', 'utf8',(err,data)=>{
    let row = 0;
    let numString = '';
    for(item in data){
        if(data[item]>='0'&& data[item]<='9'){
            numString+=data[item];
        }else if(data[item-1]>='0'&&data[item-1]<='9'){
            row>0?locationsSecondRow.push(numString):locationsFirstRow.push(numString);
            row>'0'?row='0':row='1';
            numString = '';
        }
    }
    // push final item not covered by loop
    locationsSecondRow.push(numString)

    locationsFirstRow = locationsFirstRow.sort()
    locationsSecondRow = locationsSecondRow.sort();

    let result = 0 
    for(item in locationsFirstRow){
        // find occurences of item from left list in right list then multiply
        let filteredNumber = locationsSecondRow.filter((num)=>num === locationsFirstRow[item])
        result += (filteredNumber.length * locationsFirstRow[item])
        
    }
})
