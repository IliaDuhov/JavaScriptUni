//объект двумя способами
let student=new Object();
let student1={
    name:"Ilia",
    age:19,
    //два метода
    giveName:function(){
        alert(this.name);
    },
    giveAge:function(){
        alert(this.age);
    },
};
student1.giveName();
student1.giveAge();
//Создать конструктор для создания студентов ИНПИТ. Подумайте какие методы и свойства у них общие, какие отличаются. Что вы вынесете в прототип конструктора
var Studentik=function(name, age, country, dep){
    this.name=name;
    this.age=age;
    this.country=country;
    this.dep=dep;
}

Studentik.prototype.getInst=function(){ //автоматчески выполняется для всех, созданных по конструкции
    console.log("Мой институт "+this.dep);
}
Studentik.prototype.sp='ИФСТ'; //свойства в прототипе
var Studentik1=new Studentik('Ilia', 19, "Russia", 'ПИТ');
var Studentik2=new Studentik('Misha', 17, "Dagestan", 'ПИТ');
Studentik1.getInst();
console.log(Studentik1.sp);
