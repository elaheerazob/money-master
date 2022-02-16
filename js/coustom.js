document.getElementById('calculet').addEventListener('click',function(){
    //food
    const foodInput=document.getElementById('food');
    const foodtext=Number(foodInput.value);
    //rend
    const rendinput=document.getElementById('rend');
    const rendText=Number(rendinput.value);
    //Clothes
    const clothesInput=document.getElementById('clothes');
    const clothesText=Number(clothesInput.value);

    //clear
    foodInput.value ='';
    rendinput.value ='';
    clothesInput.value ='';
    //totalexpness
    const totalExpness=document.getElementById('totalexpness')
    const totalExpnessText =Number(totalExpness.innerText);
    
    const totalAmount= foodtext + rendText + clothesText;
    totalExpness.innerText =totalAmount;

    //income
    const income=document.getElementById('income');
    const incomeText=Number(income.value);
    //totalBalance
    const balance=document.getElementById('balance');
    

    const finalBlance= incomeText - totalAmount;
    balance.innerText = finalBlance;

    //income clear fild
    income.value ='';

})

//save
