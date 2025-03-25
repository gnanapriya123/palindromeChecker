document.getElementById('check-btn').addEventListener("click",function(){
    const input=document.getElementById('text-input').value.trim();
    const resultDiv=document.getElementById('result');

    if(input=='')
    {
        alert('Please input a value');
        return;
    }

    const normalizedInput=input.toLowerCase().replace(/[^a-z0-9]/g,'');
    const isPalindrome=normalizedInput==normalizedInput.split('').reverse().join('');

    if(isPalindrome)
    {
        resultDiv.textContent=`${input} is a palindrome.`;
    }
    else
    {
        resultDiv.textContent=`${input} is not a palindrome.`;
    }
});