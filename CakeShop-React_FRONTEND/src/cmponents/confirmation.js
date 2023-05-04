import React from "react";
import AfterLoginNavBar from "./AfterLoginNavBar";
import Footer from "./Footer";

class confirmation extends React.Component {
  render() {
    return (
      <body>
        <AfterLoginNavBar />
        <div class="p-3 mb-2 bg-secondary text-white">
          <h1 style={{ textAlign: "center" }}>
            Your order placed successfully, THANK YOU!
          </h1>
          <img
            src="https://media.istockphoto.com/photos/rainbow-cupcake-with-thank-you-sign-picture-id1224185670?k=20&m=1224185670&s=612x612&w=0&h=sm1alL6GN8RgHSJ_78RwuBpXtwhEQHXXzf8tjbm5Pn8="
            style={{ width: "100%", height: "80vh", objectFit: "fill" }}
          />
        </div>
        <Footer />
      </body>
    );
  }
}
export default confirmation;
