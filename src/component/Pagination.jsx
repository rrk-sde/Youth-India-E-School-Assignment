import React from 'react'
import ReactPaginate from 'react-paginate';


const Pagination = ({ info, pageNumber, setPageNumber }) => {

    // console.log(info.pages);

    return (
        // <div>{props.info}</div>

        <ReactPaginate className=' flex flex-wrap gap-4 justify-center py-6 items-center my-4'
            previousLabel="Prev"
            previousClassName="bg-blue-400 px-2 py-1 rounded-sm hover:bg-blue-500" nextClassName="bg-blue-400 px-2 py-1 rounded-sm hover:bg-blue-500" breakClassName="bg-blue-400 px-2 py-1 rounded-sm hover:bg-blue-500"
            pageClassName="bg-blue-400"
            pageLinkClassName="text-white px-2 py-1 rounded-sm hover:bg-blue-500"
            nextLabel="Next"
            previousLinkClassName="text-white" nextLinkClassName="text-white" breakLinkClassName="text-white" activeClassName="bg-blue-800 px-2 py-1 rounded-sm" activeLinkClassName="text-white rounded-sm"
            pageCount={Math.ceil(info.pages)}
            onPageChange={(data) => setPageNumber(data.selected + 1)} containerClassName="pagination" marginPagesDisplayed={2} pageRangeDisplayed={2} forcePage={pageNumber - 1} />
    )
}

export default Pagination;