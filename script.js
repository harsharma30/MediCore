const patients = [
  {name:"Raju", disease:"Fever"},
  {name:"Sohan", disease:"Diabetes"},
  {name:"Pooja", disease:"Cardiac"}
];

const patientList = document.getElementById("patientList");
const search = document.getElementById("search");

function render(list){
  patientList.innerHTML = "";
  list.forEach(p=>{
    const div = document.createElement("div");
    div.className="row";
    div.innerHTML = `<strong>${p.name}</strong> - ${p.disease}`;
    patientList.appendChild(div);
  });
}

search.addEventListener("input", ()=>{
  const val = search.value.toLowerCase();
  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(val) ||
    p.disease.toLowerCase().includes(val)
  );
  render(filtered);
});

render(patients);
