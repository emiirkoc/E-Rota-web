console.log("APP BAŞLADI");

const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

function showPage(pageId){

  pages.forEach(page=>{
    page.classList.remove("active");
  });

  const targetPage = document.getElementById(pageId);

  if(targetPage){
    targetPage.classList.add("active");
  }

  navButtons.forEach(btn=>{
    btn.classList.remove("active");

    if(btn.dataset.page === pageId){
      btn.classList.add("active");
    }
  });

}

navButtons.forEach(button=>{

  button.addEventListener("click",()=>{

    showPage(button.dataset.page);

  });

});
