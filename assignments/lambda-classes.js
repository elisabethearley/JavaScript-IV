// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, and I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instAttrs) {
        super(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}!`);
    }
}

class Student extends Person {
    constructor(studAttrs) {
        super(studAttrs);
        this.previousBackground = studAttrs.previousBackground;
        this.className = studAttrs.className;
        this.favSubjects = studAttrs.favSubjects;
    }
    listsSubjects(favSubs) {
       for( let i = 0; i < favSubs.length; i++) {
        console.log(favSubs[i]);
       }
    }
    PRAssignment(student, subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(student, subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
    constructor(pms) {
        super(pms);
        this.gradClassName = pms.gradClassName;
        this.favInstructor = pms.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const liz = new Person({
    name: 'Liz',
    age: 33,
    location: 'Atlanta'
})

const david = new Person({
    name: 'David',
    age: 23,
    location: 'Miami'
})

const marianne = new Instructor({
    name: 'Marianne',
    age: 45,
    location: 'Seattle',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: "Don't let it get you down!"
})

const thomas = new Instructor({
    name: 'Thomas',
    age: 53, 
    location: 'Washington, D.C.',
    specialty: 'Node.js',
    favLanguage: 'Javascript',
    catchPhrase: 'Hang in there champ'
})

const rossen = new Student({
    name: 'Rossen',
    age: 23,
    location: 'Birmingham',
    previousBackground: 'Plumber',
    className: 'WEBPT7',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
})

const calina = new Student({
    name: 'Calina',
    age: 31,
    location: 'Detroit',
    previousBackground: 'Ballet Dancer',
    className: 'WEBPT6',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
})

const aaron = new ProjectManagers({
    name: 'Aaron',
    age: 43,
    location: 'Wisconsin',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: "You got this!",
    gradClassName: 'WEBPT1',
    favInstructor: 'Dan'
})

const elisha = new ProjectManagers({
    name: 'Elisha',
    age: 31,
    location: 'Savannah',
    specialty: 'Node.js',
    favLanguage: 'Javascript',
    catchPhrase: 'Where you think you going? Get back here and learn!',
    gradClassName: 'WEBPT2',
    favInstructor: 'Josh'
})

liz.speak();
david.speak();

marianne.demo('React.');
thomas.grade(rossen, 'Node.js');

rossen.listsSubjects(rossen.favSubjects);
rossen.PRAssignment(rossen, 'JavaScript.');
calina.PRAssignment(calina, 'HTML.');
calina.sprintChallenge(calina, 'JavaScript-IV.');

aaron.standUp('Webpt7');
elisha.debugsCode(calina, 'CSS');

console.log(liz);
console.log(marianne);
console.log(thomas.catchPhrase);
console.log(rossen.previousBackground);
console.log(calina);
console.log(aaron.location, aaron.favInstructor);
console.log(elisha.specialty, '-', elisha.favLanguage, '-', elisha.catchPhrase);


