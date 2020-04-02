
const hello = 'hello';

// const $btnConfirm = document.querySelector('.btnConfirm');

// const getDday = () => {
//   const $inputDate = document.querySelector('.inputDate');

//   let today = new Date();
//   const year = today.getFullYear();
//   let month = today.getMonth() + 1;
//   let day = today.getDate();
//   month = month < 10 ? '0' + month : month;
//   day = day < 10 ? '0' + day : day;
//   today = year + '-' + month + '-' + day;
//   $inputDate.setAttribute('min', today);


//   let [myYear, myMonth, myDay] = $inputDate.value.split('-');
//   const toDay = new Date();
//   myYear = +myYear;
//   myMonth = +myMonth - 1;
//   myDay = +myDay;
//   const dDay = new Date(myYear, myMonth, myDay);
//   const gap = dDay.getTime() - toDay.getTime();
//   let result = Math.ceil(gap / (1000 * 60 * 60 * 24));
//   result = result <= 0 ? result * -1 : result;
//   console.log('D-' + result);
// }
