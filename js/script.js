/* typing animation */
var typed = new Typed(".typing", {
  strings: ["", "Game Client", "Unity Client", "Unreal Client"],
  typeSpeed: 100,
  BackSpeed: 100,
  loop: true,
});
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if(navList[j].querySelector("a").classList.contains("active")){
        addBackSection(j);
        //allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth < 1200){
      asideSectionTogglerBtn();
    }
  });
};
function removeBackSection(){
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num){
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element){
  for(let i = 0; i < totalNavList; i++){
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click",function() {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click",() => {
        asideSectionTogglerBtn();
      });

function asideSectionTogglerBtn(){
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for(let i = 0; i < totalSection; i++){
    allSection[i].classList.toggle("open");
  }
}

document.addEventListener('scroll', function () {
  // 모든 섹션과 사이드바 메뉴 항목을 선택
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.aside .nav li a');

  let index = sections.length;

  // 현재 스크롤 위치가 어느 섹션에 있는지 확인
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  // 모든 링크에서 active 클래스 제거
  navLinks.forEach((link) => link.classList.remove('active'));

  // 해당 섹션에 맞는 링크에 active 클래스 추가
  navLinks[index].classList.add('active');
});


function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'flex';
  document.body.classList.add('no-scroll');
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
  document.body.classList.remove('no-scroll');
}