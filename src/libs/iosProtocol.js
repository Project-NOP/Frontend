exports.push = (view, present, url, showNavigation) => {
  console.log(view);
  console.log(present);
  console.log(url);
  window.webkit.messageHandlers.message.postMessage({
    view,
    present_type: present,
    url,
    show_navigation: showNavigation,
    token: document.querySelector("html").getAttribute("token")
  });
};
exports.back = () => {
  window.webkit.messageHandlers.back.postMessage({});
};
