/**
 * Created by amarinas on 3/5/17.
 */
var person = {
    name : "Charlie",
    distance_traveled : 0,
    say_name : function(){
        console.log(person.name);
    },
    say_something : function(phrase){
        console.log(`${person.name} says: ${phrase}`);
    },
    walk : function(){
        console.log(`${person.name} is walking!`);
        person.distance_traveled += 3;
        return person;
    },
    run : function(){
        console.log(`${person.name} is running!`);
        person.distance_traveled += 10;
        return person;
    },
    crawl : function(){
        console.log(`${person.name} is crawling!`);
        person.distance_traveled += 1;
        return person;
    },
    chewGum:function(){
        console.log("i stuck a gum in my hair and i had to cut my hair out");
    }
}


function ninjaConstructor(name, cohort){
    var ninja = {}
    var belts = ["yellow", "red", "black"]
    ninja.name = name;
    ninja.cohort = cohort;
    ninja.beltLevel = 0;
    ninja.levelUp = function(){
        if (ninja.beltLevel < 2){
            ninja.beltLevel += 1;
            ninja.belt = belts[ninja.beltLevel];
        }
        return ninja
    }
    ninja.belt = belts[ninja.beltLevel];
    return ninja;
}