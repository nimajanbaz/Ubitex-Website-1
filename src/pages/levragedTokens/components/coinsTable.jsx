import axios from "axios";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { LongBadge, ShortBadge } from "../../../components/badge";
import MarketsTableSkeleton from "../../../components/skeleton/marketsTableSkeleton";
import { Table } from "../../../components/table";
import { GET_LEVERAGED_CRYPTO_INFO_URL } from "../../../config/api.config";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function PaginatedItems({ itemsPerPage, items }) {

  const columns = useMemo(
    () => [
      {
        Header: "نام / نماد	",
        accessor: "nameFa",
        Cell: (props) => {
          const { logo, symbol, nameFa } = props.row.original;
          return (
            <div className="flex space-x-2 space-x-reverse">
              <div className="w-10">
                <img src={logo} alt={nameFa} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span>{symbol}</span>
                  {symbol.endsWith("3L") ? (
                    <LongBadge />
                  ) : symbol.endsWith("3S") ? (
                    <ShortBadge />
                  ) : null}
                </div>
                <span className="text-sm">{nameFa}</span>
              </div>
            </div>
          );
        },
      },
      {
        Header: "خرید (تومان)",
        accessor: "buyPriceTMN",
        Cell: (props) => {
          const { buyPriceTMN } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>
                {buyPriceTMN.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                })}
              </span>
            </div>
          );
        },
      },
      {
        Header: "فروش (تومان)",
        accessor: "sellPriceTMN",
        Cell: (props) => {
          const { sellPriceTMN } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>
                {sellPriceTMN.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                })}
              </span>
            </div>
          );
        },
      },
      {
        Header: "آخرین معامله (تومان)",
        accessor: "lastPriceTMN",
        Cell: (props) => {
          const { lastPriceTMN } = props.row.original;
          return (
            <div className="flex items-center text-sm">
              <span>
                {lastPriceTMN.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                })}
              </span>
            </div>
          );
        },
      },
      {
        Header: "تغییرات 24 ساعت",
        accessor: "change",
        Cell: (props) => {
          const { change } = props.row.original;
          return (
            <div className="flex items-center">
              <span
                className={`flex items-center text-sm px-3 py-2 rounded bg-opacity-10 ${
                  change > 0
                    ? "bg-emerald-600 text-emerald-600"
                    : "bg-red-600 text-red-600"
                }`}>
                %{change}
              </span>
            </div>
          );
        },
      },
      {
        Header: "",
        accessor: "action",
        Cell: (props) => {
          return (
            <div className="flex space-x-3 space-x-reverse">
              <Link to="/redirect-to-platform">
                <button className="text-[#f39200] cursor-pointer transition-all px-5 py-2 bg-[#f39200] bg-opacity-0 hover:bg-opacity-20 rounded-md text-sm">
                  معامله
                </button>
              </Link>
            </div>
          );
        },
      },
    ],

    []
  );

  const Items = ({ currentItems }) => {
    return <Table columns={columns} data={currentItems} showIndex />;
  };

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col gap-5">
      {currentItems ? (
        <>
          <Items currentItems={currentItems} />
          <ReactPaginate
            className="flex flex-row-reverse gap-3 justify-start"
            pageLinkClassName="hover:bg-opacity-20 bg-opacity-0 bg-[#f39200] hover:text-[#f39200] px-2 py-1 rounded transition-all"
            nextLinkClassName="hover:bg-opacity-20 flex bg-opacity-0 bg-[#f39200] hover:text-[#f39200] text-gray-400 px-2 py-1 rounded transition-all"
            previousLinkClassName="hover:bg-opacity-20 flex bg-opacity-0 bg-[#f39200] hover:text-[#f39200] text-gray-400 px-2 py-1 rounded transition-all"
            activeClassName='text-[#f39200] rounded transition-all'
            nextLabel={<MdOutlineKeyboardArrowLeft />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={<MdOutlineKeyboardArrowRight />}
            breakLabel="..."
            renderOnZeroPageCount={null}
          />
        </>
      ) : null}
    </div>
  );
}

const LeveragedCoinsTable = () => {
    const [markets, setMarkets] = useState();
  
    useEffect(() => {
      const getData = async () => {
        await axios
          .get(GET_LEVERAGED_CRYPTO_INFO_URL)
          .then((res) => {
            const all = res.data;
            setMarkets(all);
          })
          .catch((err) => console.log(err));
      };
      getData();
    }, []);

    
  return (
    <>
      <div className="flex flex-col mx-auto mt-10">
        <h3 className="text-2xl text-[#f39200] font-semibold text-right mb-10">
          توکن‌های لوریج دار یوبیتکس
        </h3>
        {markets ? (
          <div className="max-md:overflow-scroll">
            <PaginatedItems itemsPerPage={8} items={markets} />
            <div className="flex mx-auto justify-center items-center  mt-9 mb-5">
              <Link
                to={"/markets"}
                className="text-[#f39200] cursor-pointer transition-all text-lg px-6 py-3 bg-[#f39200] bg-opacity-10 hover:bg-opacity-20 rounded-md">
                <span>مشاهده همه بازارهای یوبیتکس</span>
              </Link>
            </div>
          </div>
        ) : (
          <MarketsTableSkeleton />
        )}
      </div>
    </>
  );
};

export default LeveragedCoinsTable;
