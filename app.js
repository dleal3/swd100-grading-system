var input = document.getElementById('input');
var grade = document.getElementsByClassName('grade');



var span = "";
var gradeArray = [];
var average = 0;
var sumArr = 0;



function calculateGrade(){
    
    var gradeValue = document.getElementById('input').value;
    var inputGrade = input.value;
    
    if(inputGrade <= 100){
        span = "A";
    }
    
    if(inputGrade <= 89){
        span = "B";
    }
    
    if(inputGrade <= 79){
        span ="C";
    }
    
    if(inputGrade <=69){
        span ="D";
    }
    
    if(inputGrade <=59){
        span ="F";
    }
    
    
    document.getElementById('grade-letter').innerHTML = span;
    document.getElementById('average').innerHTML = average; 
    
    document.getElementById('input').value = '';
    
    
    
    for (i = 0; i < gradeArray.length; i++) {
      sumArr += +gradeArray[i];
      console.log(sumArr);
   }
    
    
}