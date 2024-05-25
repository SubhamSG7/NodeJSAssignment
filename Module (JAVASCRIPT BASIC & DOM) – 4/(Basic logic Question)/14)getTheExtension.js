function extensionFile(filename){
    return filename.split(".").pop();  // split will seperate the string after the it finds the dot inside 
    //and array and pop will pick out the last element of the array
}

let filename="file.txt"
console.log(extensionFile(filename));