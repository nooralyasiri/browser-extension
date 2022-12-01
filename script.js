// this is how you fetch info from an api and include it in your browser extension/site 
async function fetchData() {
  const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
  const record=await res.json();
  document.getElementById("date").innerHTML=record.data[0].date;
  document.getElementById("areaName").innerHTML=record.data[0].areaName;
  document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
  document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}
fetchData(); 

function fetchCatImage(){
  let image=document.getElementById("cat-image")
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(res => res.json())
  .then(.json => image.src = json[0].url)
}

function btnClick(){
  let button = document.getElementById("new-cat-btn")
  button.addEventListener("click", fetchCatImage)
  button.addEventListener("click", fetchCatImage)
}

document.addEventListener("DOMContentLoaded", () => {
  fetchCatImage()
  btnClick()
})
