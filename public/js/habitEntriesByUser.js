async function habitEntriesByUser() {
    const habit_id = document.getElementById('myBtn').dataset.id

    await fetch(`/api/entry/tracking/${habit_id}`, {
        method: 'GET',
        body: JSON.stringify({habit_id}),
        headers: {
        'Content-Type': 'application/json',
      },
    });
};

habitEntriesByUser();