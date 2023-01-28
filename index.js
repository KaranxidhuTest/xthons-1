let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((contest) => {
    idata = "";
    num = 250;
    for (item in contest) {
        console.log(contest[item])
      idata += `
        <div class="card">
        <img src="https://source.unsplash.com/${num++}x150/?coding">
        <h1>${contest[item].name}</h1>
        <p><b>Starting on</b>: ${contest[item].start_time}</p>
        <p><b>Ending on</b>: ${contest[item].end_time}</p>
        <p><b>Duration</b>: ${parseInt((contest[item].duration)/(3600*24))} dayss</p>
        <p><b>Duration</b>: ${parseInt((contest[item].duration)/3600)} hours</p>
        <a href="${contest[item].url}" class="button">Visit Now</a>
    </div>
        `;
    }
    document.getElementsByClassName("cards-container")[0].innerHTML = idata
  })
