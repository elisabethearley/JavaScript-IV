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
        console.log(`${student.name} receives a ${subject}`);
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
       for( i = 0; i < favSubs.length; i++) {
        console.log(favSubs[i]);
       }
    }
    PRAssignment(subject) {
        console.log(`${student.name} has a submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
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
        console.log(`${name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode(student, subject) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }
}