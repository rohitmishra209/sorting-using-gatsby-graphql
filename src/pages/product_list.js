import React from "react";
import Header from "../components/header"

export default () =>
<div>
<Header />
  <div>
  <img src="../image/laptop1.jpeg" />
  <a href="/laptop1"><h3>laptop1</h3></a>
    <p class="price">$19.99</p>
    <p>Some text about the laptop1..</p>
    <p><button>Add to Cart</button></p>
  </div>

  <div>
  <img src="../image/laptop1.jpeg"/>
  <a href="/laptop2"><h3>laptop2</h3></a>
    <p class="price">$19.99</p>
    <p>Some text about the laptop2..</p>
    <p><button>Add to Cart</button></p>
  </div>

  <div>
  <img src="./image/laptop1.jpeg"/>
  <a href="/laptop3"><h3>laptop3</h3></a>
    {/* <a><h3>laptop3</h3></a> */}
    <p class="price">$19.99</p>
    <p>Some text about the laptop3..</p>
    <p><button>Add to Cart</button></p>
  </div>
</div>