function updateWebviews() {
    var webview = document.querySelector("webview");
    webview.style.height = document.documentElement.clientHeight + "px";
    webview.style.width = document.documentElement.clientWidth + "px";
    webview.addEventListener('permissionrequest', function(e) {
        if (e.permission === 'download') {
            e.request.allow();
        }
    });
    webview.addEventListener('newwindow', function(e) {
        e.preventDefault();
        var url = e.targetUrl;
        chrome.app.window.create(
            '../webview.html', {
                // hidden: true
            }, // only show window when webview is configured
            function(appWin) {
                appWin.contentWindow.addEventListener('DOMContentLoaded',
                    function(e) {
                        // when window is loaded, set webview source
                        var webview = appWin.contentWindow.
                        document.querySelector('webview');
                        webview.src = url;
                        // now we can show it:
                        appWin.show();
                    }
                );
            });
    });
}

onload = updateWebviews;
window.onresize = updateWebviews;
