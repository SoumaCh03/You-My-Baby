let Conf = confirm (`Do you Love Me?`)
if(Conf==true){
  alert(`I Love You Too`)
}
else{
  do{
    Conf = confirm(`How dare you dare to disrespect me?`)
    if(Conf==true){
      alert(`I Love You Too`)
      break;
    }
  } while(Conf==false)
}