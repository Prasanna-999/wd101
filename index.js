let userForm=document.getElementById("u-form");
const retent=()=>{
    let ent=localStorage.getItem("u-details");
    if(ent){
        ent=JSON.parse(ent);
    }
    else{
        ent=[];
    }
    return ent;
}
let UserDet=retent();
const dispent=()=>{
    const ent=retent();
    let tableEntries='';
    for(const entry of ent){
        const namecell=`<td>${entry.name}</td>`;
        const emailcell=`<td>${entry.email}</td>`;
        const passwordcell=`<td>${entry.password}</td>`;
        const dobcell=`<td>${entry.dob}</td>`;
        const acceptTermscell=`<td>${entry.acceptedTermsAndConditions ? 'true':'false'}</td>`;

        const row=`<tr>${namecell}${emailcell}${passwordcell}${dobcell}${acceptTermscell}</tr>`;
        tableEntries +=row;
    }
    const table=`<table><tr><th>Name</th><th>Email</th><th>Password</th><th>Dob</th><th>Accepted terms?</th></tr>${tableEntries}</table>`
    let details=document.getElementById("u-details");
    details.innerHTML=table;
    
}
const saveUserForm=(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndConditions = document.getElementById("acceptTerms").checked;
    
    const entry={
        name,
        email,password,
        dob,
        acceptedTermsAndConditions
    };
    UserDet.push(entry);
    localStorage.setItem("u-details",JSON.stringify(UserDet));
    dispent();
}
userForm.addEventListener("submit", saveUserForm);
dispent();
