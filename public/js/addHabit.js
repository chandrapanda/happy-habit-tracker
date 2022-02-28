const addEntry = async function (event) {
  const habit_id = event.currentTarget.dataset.id;
  console.log(habit_id);

  await fetch(`/api/entry`, {
    method: "POST",
    body: JSON.stringify({ habit_id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

document.querySelector("#myBtn").addEventListener("click", addEntry);