const user_id = document.getElementById("user_id").value;
const habit_id =document.getElementById("habit_id").value;


// document.getElementById("myBtn").addEventListener("click", displayDate);
// const date = moment().format('YYYY MM DD, H:mm:ss');
// console.log(date)
// const backToDate = new Date (jsonDate);
// console.log(backToDate)

// function displayDate() {
//   document.getElementById("add").innerHTML = Date();
//   console.log(Date);
// }

const response = await fetch(`/api/entry/admin-get-all`, {
    method: 'POST',
    body: JSON.stringify({ user_id, habit_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });