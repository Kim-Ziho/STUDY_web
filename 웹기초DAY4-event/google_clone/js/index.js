// 토글버튼 클릭시에 이벤트 발생
const toggleButton = document.querySelector(".toggle-button");
const body = document.querySelector("body");
const headerNav = document.querySelector(".header-nav");
const bookmarkWrapper = document.querySelector(".bookmark-wrapper");
const texts = document.querySelectorAll(".text");

toggleButton.addEventListener("click", function () {
  console.log("다크모드 버튼이 눌렸어요!");
  toggleButton.textContent = "다크모드";
  // 버튼클릭시마다 classList의 toggle로 class추가
  toggleButton.classList.toggle("toggle-button-darkmode");
  body.classList.toggle("body-background-darkmode");
  headerNav.classList.toggle("text-darkmode");
  // bookmarkWrapper.classList.toggle("text-darkmode");
  for (let i = 0; i < texts.length; i++) {
    texts[i].classList.toggle("text-darkmode");
  }
  // classList의 contains
  if (toggleButton.classList.contains("toggle-button-darkmode")) {
    toggleButton.textContent = "일반모드";
  }
});

// 구글 이동
const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keyup", function (e) {
  console.log(e);
  // e.code === "Enter" 일 때 특정 위치로 이동시킨다.
  if (e.code === "Enter") {
    console.log("가즈아");
    // 유효성 검사
    // 빈값인 경우 검색어를 입력하지않았다고 얘기해주기!
    if (!e.target.value) {
      alert("검색어를 입력하지 않았습니다!");
      return;
    }
    // https://www.google.com/search?q=내용
    const target = "https://www.google.com/search?q=";
    // 첫번째 그냥 이동
    // location.href = target + e.target.value;
    // 두번째 새탭 이동
    window.open(target + e.target.value);
  }
});
