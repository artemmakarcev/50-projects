const activityEl = document.getElementById("activity");
const activityBtn = document.getElementById("activityBtn");

activityBtn.addEventListener("click", generateActivity);

generateActivity();

// USING ASYNC/AWAIT
async function generateActivity() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("http://www.boredapi.com/api/activity/", config);

  const data = await res.json();

  activityEl.innerHTML = data.activity;
}

// USING .then()
// function generateActivity() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadactivity.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       activityEl.innerHTML = data.activity
//     })
// }
