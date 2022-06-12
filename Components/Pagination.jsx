const Pagination = ({ postPerPage, totalPosts,Paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="col-6 col-md-3 mb-3">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {pageNumbers.map((page) => (
            <li key={page} className="page-item">
              <a onClick={()=>Paginate(page)} className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
