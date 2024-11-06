// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let formEl = document.getElementById("bookmarkForm");
let siteNameEl = document.getElementById("siteNameInput");
let siteUrlEl = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let ulEl = document.getElementById("bookmarkList");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

function elementBlur(element, paragraph) {
    element.addEventListener("blur", () => {
      if (element.value === "") 
        paragraph.textContent ="Required*";
    });
}
elementBlur(siteNameEl, siteNameErrMsgEl);
elementBlur(siteUrlEl, siteUrlErrMsgEl);

siteNameEl.addEventListener("change", (e) => {
    let value=e.target.value;
  if (value==="") {
    siteNameErrMsgEl.textContent="Required*"
  }
});
siteUrlEl.addEventListener("change", (e) => {
    let value=e.target.value;
  if (value=== "") {
    siteUrlErrMsgEl.textContent = "Required*";
  }
});
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (siteNameEl.value === "" && siteUrlEl.value === "") {
    siteNameErrMsgEl.textContent = "Required*";
    siteUrlErrMsgEl.textContent = "Required*";
  }
  siteNameEl.addEventListener("blur", () => {
    if (siteNameEl.value !== "") siteNameErrMsgEl.textContent = "";
  });
  siteUrlEl.addEventListener("blur", () => {
    if (siteUrlEl.value !== "") siteUrlErrMsgEl.textContent = "";
  });

  let siteName=siteNameEl.value;
  let siteUrl=siteUrlEl.value;
  let liEl=document.createElement('li')
  liEl.classList.add('bookmark')
  ulEl.appendChild(liEl)

  let liHead=document.createElement('h1')
  liHead.textContent=siteName
  liEl.appendChild(liHead)

  let liAncor=document.createElement('a')
  liAncor.textContent=siteUrl
  liAncor.href=siteUrl
  liAncor.target="_blank"
  liEl.appendChild(liAncor)
});
