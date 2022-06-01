const me = {
    name: "A",
    age: 26,
    gender : 'male',
};

const someone = {
    name: "B",
    age: 27,
    gender : 'female',
};

function addMilitaryStateIfMale(person){
    if(person.gender ==='male'){
        person.militaryState = false;
    }
}

addMilitaryStateIfMale(me);
addMilitaryStateIfMale(someone);

console.log(me);
console.log(someone);

function parseBoolean(value) {
    if(value === true){
        return "참";
    } else if(value === false) {
        return "거짓";
    }
}

if( me.militaryState !== undefined){
    console.log(parseBoolean(me.militaryState));
}
if(someone.militaryState !== undefined){
    console.log(parseBoolean(me.militaryState));
}

//논리 연산자 &&를 사용 

me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
someone.militaryState !== undefined && console.log(parseBoolean(someone.militaryState));

