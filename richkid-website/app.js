document.addEventListener("DOMContentLoaded", Init);
function Init(){
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar-navigator_menu");
  // Display Mobile Menu
  const mobileMenu = () => {
    menuLinks.classList.toggle("active");
    console.log("Pressed Toggle");
  };
  menu.addEventListener("click", mobileMenu);

  const myForm = document.getElementById("myForm");

  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let customer = new Object()
      const formData = new FormData(myForm);
      customer.fullName = formData.get("fullName");
      customer.title = formData.get("title");
      customer.email = formData.get('email');
      customer.phone = formData.get('phone');
      customer.jobTitle = formData.get('jobTitle');
      customer.company = formData.get("company");
      customer.buisness = formData.get("buisness");

      const jsonFormat = JSON.stringify(customer);
      sessionStorage.setItem(customer.phone, jsonFormat);
      console.log(`New Contact To Return: ${jsonFormat} (Added To Session Storage)`);
  })
}





