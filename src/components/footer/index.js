import React from "react";

function Footer() {
  return (
    <div className="mt-auto">
      <footer className="d-flex justify-content-around p-2">
        <h4 className="my-auto text-center fw-bold">Dreams don't work unless you do!</h4>
        <ul className="list-inline my-auto text-center">
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/BlerandIsm">GitHub</a></li>
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/blerand-ismaili-bba-56884b80/">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
