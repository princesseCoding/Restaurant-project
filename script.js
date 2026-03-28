
// =======================
// RESTAURANT
// =======================

function openPopup(){
document.getElementById("popup").style.display="flex";
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

function showDetails(titre, description, prix, image){

document.getElementById("platTitre").innerText = titre;
document.getElementById("platDescription").innerText = description;
document.getElementById("platPrix").innerText = prix;
document.getElementById("platImage").src = image;

document.getElementById("detailsPopup").style.display = "flex";
}

function closeDetails(){
document.getElementById("detailsPopup").style.display = "none";
}

function showCategory(type){

let content = document.getElementById("categoryContent");

if(type==="boissons"){
content.innerHTML=`
<div class="plat">
<img src="images/milkshake.jpg">
<h3>Milkshake</h3>
<p>3€</p>
<button class="btn">Commander</button>
</div>

<div class="plat">
<img src="images/boisson.jpg">
<h3>Fanta</h3>
<p>3€</p>
<button class="btn">Commander</button>
</div>
`;
}

if(type==="desserts"){
content.innerHTML=`
<div class="plat">
<img src="images/donut.jpg">
<h3>Donut</h3>
<p>4€</p>
<button class="btn">Commander</button>
</div>
`;
}

if(type==="menus"){
content.innerHTML=`
<div class="plat">
<img src="images/burger5.jpg">
<h3>Menu Burger</h3>
<p>10€</p>
<p>Burger + Frites + Boisson</p>
<button class="btn">Commander</button>
</div>
`;
}

}


// =======================
// EMPLOYES
// =======================

let rowToDelete = null;

function addEmployee(){

let prenom = document.getElementById("prenom").value;
let nom = document.getElementById("nom").value;
let adresse = document.getElementById("adresse").value;
let service = document.getElementById("service").value;

let valid = true;

// reset erreurs
document.getElementById("errPrenom").innerText="";
document.getElementById("errNom").innerText="";
document.getElementById("errAdresse").innerText="";
document.getElementById("errService").innerText="";

// validation
if(prenom===""){
document.getElementById("errPrenom").innerText="Champ obligatoire";
valid=false;
}

if(nom===""){
document.getElementById("errNom").innerText="Champ obligatoire";
valid=false;
}

if(adresse===""){
document.getElementById("errAdresse").innerText="Champ obligatoire";
valid=false;
}

if(service===""){
document.getElementById("errService").innerText="Choisir un service";
valid=false;
}

if(!valid) return;

// ajouter ligne
let table = document.getElementById("tableBody");

table.innerHTML += `
<tr>
<td>EMP${Math.floor(Math.random()*1000)}</td>
<td>${prenom}</td>
<td>${nom}</td>
<td>${adresse}</td>
<td>${service}</td>
<td>
<button class="btn btn-danger btn-sm" onclick="openConfirm(this)">Supprimer</button>
</td>
</tr>
`;

// toast
showToast("Employé ajouté !");
clearForm();

// fermer modal
let modal = bootstrap.Modal.getInstance(document.getElementById('addModal'));
modal.hide();
}

function openConfirm(btn){
rowToDelete = btn;
let modal = new bootstrap.Modal(document.getElementById("confirmModal"));
modal.show();
}

function confirmDelete(){

if(rowToDelete){
rowToDelete.parentElement.parentElement.remove();
showToast("Employé supprimé !");
}

let modal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
modal.hide();
}

function showToast(message){

let toastEl = document.getElementById("toast");
toastEl.querySelector(".toast-body").innerText = message;

let toast = new bootstrap.Toast(toastEl);
toast.show();
}

function clearForm(){
document.getElementById("prenom").value="";
document.getElementById("nom").value="";
document.getElementById("adresse").value="";
document.getElementById("service").value="";
}