// const user_id = document.getElementById("user_id").value;
// const habit_id = document.getElementById("habit_id").value;


// document.getElementById("myBtn").addEventListener("click", displayDate);
// const date = moment().format('YYYY MM DD, H:mm:ss');
// console.log(date)
// const backToDate = new Date (jsonDate);
// console.log(backToDate)

// function displayDate() {
//   document.getElementById("add").innerHTML = Date();
//   console.log(Date);
// }

const addEntry = async function(event) {
  const habit_id = event.currentTarget.dataset.id
  console.log(habit_id);

  await fetch(`/api/entry`, {
      method: 'POST',
      body: JSON.stringify({habit_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
}

  document
  .querySelector('#myBtn')
  .addEventListener('click', addEntry
  );