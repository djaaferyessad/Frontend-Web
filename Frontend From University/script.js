function Validation(){
var nom=document.formulaire.nomE.value ;
var age=document.formulaire.Age.value ;
var adress = document.formulaire.adress.value ;
var password1= document.formulaire.password1.value ;
var password2= document.formulaire.password2.value ;
var sexe = document.formulaire.Sexe.value ;
var Wilaya = document.formulaire.wilaya.value ;
var anne = document.formulaire.Annee.value ;

if(nom == "")
{
    alert(" the name is empty !" ) ;
    return false ;
}
if (age <18 || age>32)
{
    alert("the age must be between 18 and 32 ") ;
    return false ;
}
if ( adress == "")
{
    alert("write your address please") ;
    return false ;
}
if (password1 != password2)
{
    alert("please check ur password") ;
    return false ;
}
if(password1.length<8)
{
    alert("your password is less the 8 characters") ;
    return false ;
}
if(!confirm("\n confirme voter choix de Sexe? "))
{
    return false ;
}
if (!confirm("wilaya : " + Wilaya + "\n confirm voter wilaya ? "))
{
    return false ;
}
if (!confirm("Année : " + anne + "\n confirm voter année ? "))
{
    return false ;
}





}