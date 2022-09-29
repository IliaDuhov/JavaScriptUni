//создаём массивы
let array =[1,2,3,4,5,6,7,8];
let array2=new Array(9,10,11,);
let array3=Array.from({ length: 5 }, (v, k) => k);//генерирует последовательность чисел! создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.

//выводим пятый элемент, меняем 
console.log(array[5]);
array[5]=66;

//выводим длинну масиива
function show(){
    var text=array.length;
    document.getElementById("text").innerHTML=text;//меняет содержимое страницы
}
function hide(){
    document.getElementById("text").innerHTML="";
}

//выводим элементы массивы двумя способами
console.log(array);
for(let a of array){
    console.log("element of array "+a);
}

//создайте 2 массива. Объедините их в один и выведите на экран полученный массив
let arr1=[1,2,true,4,5,];
let arr2=[6,7,8,"OK",10,"Not OK",12];
let arr3=arr1.concat(arr2);
console.log(arr3);

//Удалите последний член получившегося массива и выведите это значение на экран
let last=arr3[arr3.length-1];
arr3.pop();
console.log(last);

//Добавьте новый элемент в начало вашего объединенного массива
arr3.unshift(0);
console.log(arr3);

//Запросите массив значений, выведите на экран новый массив значений, где каждый член массива представляет извлеченный квадратный корень из соответствующего исходного значения. Не забудьте обработать нечисловые значения и пустые строки

var n=prompt("Введите количество элементов массива: ");
let ARR=[];
for(let i=0; i<n; i++){
    var el=prompt("Введите элемент массива: ");
    ARR[i]=el;
}
var result  = ARR.map(function(item) {
    var number = parseFloat(item);
    return isNaN(number)? item : number;//определяет, является ли переданное значение NaN.не имеет проблемы принудительного преобразования параметра в число. Это значит, что в него безопасно передавать значения, которые обычно превращаются в NaN, но на самом деле NaN не являются
});
console.log(result);
result.forEach(function(a,i,arr){
    if(typeof(a)=="number"){
        arr[i]=Math.sqrt(a);
    }else{
        arr[i]=a;
    }
});
console.log(result);

//Получите сегодняшнюю дату и выведите ее на экран; Выведите сегодняшнюю дату в формате 11 ноября 2016 года

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');//заполняет текущую строку другой строкой (несколько раз, если нужно) так, что итоговая строка достигает заданной длины. Заполнение осуществляется в начале (слева) текущей строки.
var mm = String(today.getMonth()).padStart(2, '0'); //January is 0!
if(mm==0){
    mm="января";
}else if(mm==1){
    mm="февраля";
}else if(mm==2){
    mm="марта";
}else if(mm==3){
    mm="апреля";
}else if(mm==4){
    mm="мая";
}else if(mm==5){
    mm="июня";
}else if(mm==6){
    mm="июля";
}else if(mm==7){
    mm="августа";
}else if(mm==9){
    mm="сентября";
}else if(mm==10){
    mm="октября";
}else if(mm==11){
    mm="ноября";
}else if(mm==12){
    mm="декабря";
}
var yyyy = today.getFullYear();
today = dd + ' ' + mm + ' ' + yyyy +' года';
alert(today);

//напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50
function multiNumb(num1,num2){
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.round(rand);
      }
      let Num1=randomInteger(0,50);
      let Num2=randomInteger(0,50);
      let N=Num1*Num2;
      return N;
}
let res=multiNumb(0,50);
alert(res);


