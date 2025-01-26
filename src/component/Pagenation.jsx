function Pagenation({pageInfo,handlePageChange}){
    return (
        <div className="d-flex justify-content-center">
        <nav>
            <ul className="pagination">
              {/* 上一頁 */}
              <li className={`page-item ${!pageInfo.has_pre && 'disabled'}`}>
                <a
                  onClick={() => handlePageChange(pageInfo.current_page - 1)}
                  className="page-link"
                  href="#"
                >
                  上一頁
                </a>
              </li>

              {/* 頁碼列表 */}
              {Array.from({ length: pageInfo.total_pages }).map((_, index) => (
                <li
                  key={index} // 為每個分頁加上唯一的 key
                  className={`page-item ${
                    pageInfo.current_page === index + 1 && 'active'
                  }`}
                >
                  <a
                    onClick={() => handlePageChange(index + 1)}
                    className="page-link"
                    href="#"
                  >
                    {index + 1}
                  </a>
                </li>
              ))}

              {/* 下一頁 */}
              <li className={`page-item ${!pageInfo.has_next && 'disabled'}`}>
                <a
                  onClick={() => handlePageChange(pageInfo.current_page + 1)}
                  className="page-link"
                  href="#"
                >
                  下一頁
                </a>
              </li>
            </ul>
        </nav>
      </div>
        
    )
}
export default Pagenation;