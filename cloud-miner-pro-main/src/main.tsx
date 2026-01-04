import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Define Facebook types globally since the SDK is loaded externally
declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

// Initialize the Facebook SDK and then render the App
window.fbAsyncInit = function() {
    window.FB.init({
      appId      : 'YOUR_FACEBOOK_APP_ID', // يجب استبدال هذا بمعرف التطبيق الفعلي
      cookie     : true,
      xfbml      : true,
      version    : 'v18.0' // تحديث الإصدار حسب الحاجة
    });

    // Render the React App only after the FB SDK is initialized
    createRoot(document.getElementById("root")!).render(<App />);
};

// Load the Facebook SDK asynchronously
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));