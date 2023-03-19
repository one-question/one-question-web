export const addPopStateEvent = () => {
  if (localStorage.getItem("currentUrl")) {
    window.addEventListener("popstate", (e) => {
      if (localStorage.getItem("currentUrl") === "inprogress") {
        if (e) {
          alert("Onething 은 이미 결정되었습니다. 이제 되돌릴 수 없습니다.");
          window.history.go(1);
        }
      }
    });
  }
};
