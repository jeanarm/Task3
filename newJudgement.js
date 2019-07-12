let points=[80,100,80,80,70,90];
let sum=0;
function get_achievement(points){
    for(let i=0;i<6;i++){
        sum=sum+points[i];
    }
    let percent=(sum*100)/600;
    if(percent>=80) {
        console.log('your grade is A');
    
}
else if(percent>=60&& percent<80){
    console.log('your grade is B');
}
else if (percent>=40&& percent<60){
    console.log('your grade is C');
}
else{
    console.log('your grade is D');
}
}


let number=points.length;
function get_pass_or_fail(points){
    let judge="Passed";
    for(i=0;i<number;i++){
        if(points[i]<60){
           judge="Failed" ;
        }
    }
   console.log(judge);

}
function Judgement(points){
let achievement=get_achievement(points);
let status=get_pass_or_fail(points);

}
Judgement(points);