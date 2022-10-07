import React, { useEffect } from "react";
import "./Login.css";
import starImg from "./imgs/stars.png";
import moonImg from "./imgs/moon.png";
import midImg from "./imgs/mid.png";
import land from "./imgs/lower.png";
function Login() {
  useEffect(() => {
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountain = document.getElementById("mid");
    let message = document.getElementById("text");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      stars.style.left = "-" + value * 0.25 + "px";
      moon.style.top = value * 1.05 + "px";
      mountain.style.top = "-" + value * 0.25 + "px";
      message.style.marginRight = value * 5 + "px";
    });
  });

  return (
    <div>
      <header>
        <a href="#" className="logo">
          Jinx
        </a>

        <ul>
          <li className="active">Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </header>

      <section>
        <img src={starImg} id="stars" />
        <img src={moonImg} id="moon" />
        <img src={midImg} id="mid" />
        <h2 id="text">Welcome To Jinx</h2>
        <a href="#" className="Btn">
          Login
        </a>
        <img src={land} id="land" />
      </section>

      <div className="sec">
        <h2>Invite-Only Place</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque
          inventore hic accusantium, repudiandae quod et dolorum itaque quasi
          porro beatae? Placeat quisquam voluptates magni unde mollitia
          obcaecati, minus voluptate, dolorem sunt est iste ad odio aliquid
          ipsum velit veniam.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          molestiae consequatur consequuntur vero voluptates itaque cupiditate
          aliquid atque laborum ipsam facere perspiciatis, magnam veniam rerum,
          iste eaque doloremque a et est reprehenderit animi! Nam, consectetur
          ducimus. Recusandae dignissimos, iste voluptate architecto nam harum
          facilis, totam esse at non, maxime labore!
        </p>
        <br />
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          ipsam repudiandae iste at et eaque, excepturi vel voluptate porro
          mollitia iusto cupiditate? Debitis maiores beatae neque ipsa molestiae
          provident, ad quae in vel vitae possimus deserunt! Ea magni, velit id
          modi tempora ut similique dignissimos itaque numquam quos unde nihil
          animi voluptate? Pariatur cum, officiis molestias obcaecati fuga
          itaque omnis. Inventore molestiae neque eligendi! Rerum repellendus,
          velit exercitationem non eaque doloremque delectus omnis cupiditate.
          Est voluptas fugiat, repudiandae obcaecati veniam ducimus, non
          temporibus reiciendis minus pariatur officiis tempore nemo itaque
          numquam. Excepturi suscipit consectetur quos exercitationem, optio
          fugit itaque repellendus.
        </p>
      </div>
    </div>
  );
}

export default Login;
