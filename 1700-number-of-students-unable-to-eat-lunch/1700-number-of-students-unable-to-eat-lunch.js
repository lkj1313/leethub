/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let zeroS = 0;
    let oneS = 0;

    for(const p of students){
        if(p===0){
            zeroS++;
        } else{
            oneS++;
        }
    }

    for(const sd of sandwiches){
        if(sd===0){
            if(zeroS===0){
                return oneS;
            } else{
                zeroS--;
            }
        }
        if(sd===1){
            if(oneS===0){
                return zeroS;
            } else{
                oneS--;
            }
        }
        
    }
    return 0;

};