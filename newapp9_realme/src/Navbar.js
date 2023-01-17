import React from "react";
import Orangehover from "./Orangehover";
import "./Orangehover.css";
const Navbar = (props) => {
  return (
    <>
      {" "}
      {props.children}
      <nav className="d-flex flex-row justify-content-between bg-white navb">
        <img
          className="image"
          src="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661452708/realme/realmelogo_wywvzz.png"
          height={45}
          alt="logo"
        />
      

        {/* <div className='flexr'> */}
        <Orangehover>
          <p className="navrs">Realme Smartphones</p>
        </Orangehover>
        <Orangehover>
          <p className="navns">Narzo Smartphones</p>
        </Orangehover>
        <Orangehover>
          <p>realme Tv</p>
        </Orangehover>
        <Orangehover>
          <p>Tab/Laptop</p>
        </Orangehover>
        <Orangehover>
          <p>Audio</p>
        </Orangehover>
        <Orangehover>
          <p>Smartlife</p>
        </Orangehover>
        <Orangehover>
          <p>Accesories & Lifestyle</p>
        </Orangehover>
        {/* </div>  */}

        <img
          height={40}
          className="pr-3 "
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDIxIDMgQyAxMS42MjEwOTQgMyA0IDEwLjYyMTA5NCA0IDIwIEMgNCAyOS4zNzg5MDYgMTEuNjIxMDk0IDM3IDIxIDM3IEMgMjQuNzEwOTM4IDM3IDI4LjE0MDYyNSAzNS44MDQ2ODggMzAuOTM3NSAzMy43ODEyNSBMIDQ0LjA5Mzc1IDQ2LjkwNjI1IEwgNDYuOTA2MjUgNDQuMDkzNzUgTCAzMy45MDYyNSAzMS4wNjI1IEMgMzYuNDYwOTM4IDI4LjA4NTkzOCAzOCAyNC4yMjI2NTYgMzggMjAgQyAzOCAxMC42MjEwOTQgMzAuMzc4OTA2IDMgMjEgMyBaIE0gMjEgNSBDIDI5LjI5Njg3NSA1IDM2IDExLjcwMzEyNSAzNiAyMCBDIDM2IDI4LjI5Njg3NSAyOS4yOTY4NzUgMzUgMjEgMzUgQyAxMi43MDMxMjUgMzUgNiAyOC4yOTY4NzUgNiAyMCBDIDYgMTEuNzAzMTI1IDEyLjcwMzEyNSA1IDIxIDUgWiI+PC9wYXRoPjwvc3ZnPg=="
        />
      </nav>
    </>
  );
};

export default Navbar;
