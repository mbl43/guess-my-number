const random_num = Math.floor(Math.random() * 21);
console.log(random_num);
const displayresult=document.querySelector('.mid')
function check() {
  const input_number = document.querySelector(".input-number").value;
  console.log(input_number);
  

  const userguess=Number(input_number)
  if (userguess===random_num) {
    displayresult.textContent=`Success You Won! 🎉 Number: ${random_num}`
    document.body.style.backgroundColor="purple";
   document.querySelector(".modal").style.display="block"
    console.log("success");
  } else if (userguess < random_num) {
     displayresult.textContent=`Too Low 📉`
    console.log("Low ");
  } else {
     displayresult.textContent=`Too High 📈`
    console.log("High ");
  }
}

document.getElementById("checkbtn").addEventListener("click", function (e) {
  e.preventDefault();
  check(); 
});

document
  .querySelector(".input-number")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      check(); // Call check function when Enter is pressed
    }
  });
function reset()
{
    location.reload()
}
document.querySelector('.close').addEventListener('click',function ()
{
   document.querySelector(".modal").style.display="none"
})