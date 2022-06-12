import Link from "next/link";

const Nav = () => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb mb-0">
      <div className="container">
        <ol className="d-flex align-items-center mb-0 p-0">
          <li className="breadcrumb-item">
            <Link href="#">
              <a className="text-success">Home</a>
            </Link>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Nav;
