import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";

const pages = [
  {
    content: (
      <div
        style={{
          backgroundColor: "rgb(245,245,245)",
          width: "100%",
          minHeight: "100vh",
          borderRadius: "32px 0 0 32px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            position: "fixed",
            top: 0,
            padding: "32px",
            borderRadius: "32px 0 0 0",
          }}
        >
          Header
        </div>
        <div style={{ paddingLeft: "32px" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            consequuntur doloribus eius error esse eveniet ipsam ipsum iusto
            labore maiores natus neque nostrum odio quam quisquam, reprehenderit
            sed vitae, voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            eius esse facere id itaque quia sed vitae. Cupiditate, dignissimos
            fuga harum id natus numquam quam quisquam repellendus sapiente
            tempora unde!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum
            dicta dolore eos eveniet facere, fuga hic incidunt ipsam magnam
            molestias natus nesciunt nihil, nisi quibusdam, sint temporibus
            veritatis voluptatibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            consequuntur doloribus eius error esse eveniet ipsam ipsum iusto
            labore maiores natus neque nostrum odio quam quisquam, reprehenderit
            sed vitae, voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            eius esse facere id itaque quia sed vitae. Cupiditate, dignissimos
            fuga harum id natus numquam quam quisquam repellendus sapiente
            tempora unde!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum
            dicta dolore eos eveniet facere, fuga hic incidunt ipsam magnam
            molestias natus nesciunt nihil, nisi quibusdam, sint temporibus
            veritatis voluptatibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            consequuntur doloribus eius error esse eveniet ipsam ipsum iusto
            labore maiores natus neque nostrum odio quam quisquam, reprehenderit
            sed vitae, voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            eius esse facere id itaque quia sed vitae. Cupiditate, dignissimos
            fuga harum id natus numquam quam quisquam repellendus sapiente
            tempora unde!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum
            dicta dolore eos eveniet facere, fuga hic incidunt ipsam magnam
            molestias natus nesciunt nihil, nisi quibusdam, sint temporibus
            veritatis voluptatibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            consequuntur doloribus eius error esse eveniet ipsam ipsum iusto
            labore maiores natus neque nostrum odio quam quisquam, reprehenderit
            sed vitae, voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            eius esse facere id itaque quia sed vitae. Cupiditate, dignissimos
            fuga harum id natus numquam quam quisquam repellendus sapiente
            tempora unde!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum
            dicta dolore eos eveniet facere, fuga hic incidunt ipsam magnam
            molestias natus nesciunt nihil, nisi quibusdam, sint temporibus
            veritatis voluptatibus!
          </p>
        </div>
      </div>
    ),
    label: "one page",
    icon: <PhoneIcon />,
    link: "/onepage",
  },
  {
    content: <div>two</div>,
    label: "two page",
    icon: <FavoriteIcon />,
    link: "/treepage",
  },
  {
    content: <div>two</div>,
    label: "two page",
    icon: <FavoriteIcon />,
    link: "/fourpage",
  },
];

function App() {
  return (
    <div>
      <Nav pages={pages} />
    </div>
  );
}

export default App;
