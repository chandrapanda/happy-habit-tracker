// ADD AN ENTRY
const addEntry = async function(event) {
  const habit_id = event.currentTarget.dataset.id
  // console.log(habit_id);

  await fetch(`/api/entry`, {
      method: 'POST',
      body: JSON.stringify({habit_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  window.location.reload();
}

  document
  .querySelector('#addBtn')
  .addEventListener('click', addEntry
  );

  // DELETE AN ENTRY
  const deleteEntry = async function(event) {
    if (event.target.matches('.delete-Btn')) {
    
    const habit_id = event.target.dataset.id
    console.log(habit_id);

    await fetch(`/api/entry/${habit_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.location.reload();
  }
}

  document
  .querySelector('.habit-container')
  .addEventListener('click', deleteEntry
  );