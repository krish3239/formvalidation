let f=document.getElementById("first");
let l=document.getElementById("last");
let a=document.getElementById("ages");
let address=document.getElementById("address");
let tel=document.getElementById("telephone");
let em=document.getElementById("emailss");
let b=document.getElementById("btn");
let fo=document.getElementById("ff");
let agr=document.getElementById('agree');
let dis=document.getElementsByClassName('dis');
let gf=document.getElementById('females');
let gm=document.getElementById('males');


let df=document.getElementById("dfname");
let dl=document.getElementById("dlname");
let dag=document.getElementById("dage");
let dad=document.getElementById("daddress");
let dcon=document.getElementById("dcontact");
let demai=document.getElementById("demail");
let degen=document.getElementById("dgender")

fo.addEventListener('submit',(e)=>{
  let al=/^[A-Za-z]+$/;
  let num=/^[0-9]+$/;
  if(f.value===''||l.value===''||a.value===''||address.value===''||tel.value===''||e.value==='')
  {
    //e.preventDefault();
    alert("all fields are mandatory");
  }
  else if(!f.value.match(al))
  {
    //e.preventDefault();
    f.style.borderColor='red';
    alert("only alphabets are allowed");
  }
  else if(!l.value.match(al))
    {
      //e.preventDefault();
      alert("only alphabets are allowed");
      l.style.borderColor='red';
    }
  else if(a.value<=18||a.value>=100)
  {
     //e.preventDefault();
      alert("enter valid age");
      a.style.borderColor='red';
  }
  else if(!tel.value.match(/^[0-9]+$/)||tel.value.length!=10)
  {
      //e.preventDefault();
      alert("enter valid number");
      tel.style.borderColor='red';
  }
  else if(agr.checked==false)
  {
    //e.preventDefault();
    alert("no")
    agr.style.borderColor='red'
  }
  else{
    //e.preventDefault();
    df.innerHTML="first name is  "+f.value;
    dl.innerHTML="last name "+l.value;
    dag.innerHTML="entered age is "+a.value;
    dad.innerHTML="entered address is "+address.value;
    dcon.innerHTML="contact "+tel.value;
    demai.innerHTML="email is"+em.value;
    if(gf.checked==true)
    {
      degen.innerHTML=gf.value;
    }
    else if(gm.checked==true){
      degen.innerHTML=gm.value;
    }

    
  }
})

