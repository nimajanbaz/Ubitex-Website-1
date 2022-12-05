import React, { useEffect, useMemo, useState } from "react";
import { Table } from "../../../components/table";
import { IoCheckmarkDone, IoClose } from "react-icons/io5";
import axios from "axios";
import MyDialog from "../../../components/dialog";
import { RiSearch2Line } from "react-icons/ri";

const Text = () => {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <span>
          درحال حاضر برداشت ارز مورد نظر بنا به دلایلی نظیر: <br /> "بروزرسانی
          شبکه از طرف توسعه دهنده" <br /> "بروزرسانی شبکه از طرف یوبیتکس" <br />
          و... غیرفعال میباشد.
        </span>
        <span>
          برای اطلاع از زمان فعال سازی مجدد برداشت این ارز، اطلاعات موجود در این
          صفحه را بررسی کنید یا از طریق تیکت یا چت آنلاین شناور پایین صفحه با
          کارشناسان پشتیبانی یوبیتکس در ارتباط باشید.
        </span>
      </div>
    </>
  );
};

const TransferFee = () => {
  const [data, setData] = useState([]);
  const [tableFilter, setTableFilter] = useState([]);

  const [loading, setLoading] = useState(false);
  const [dialogOptions, setDialogOptions] = useState({
    title: "",
    text: "",
    buttonText: "",
    dialogOpen: false,
  });

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await axios
        .get("https://api.ubitextest.ir/api/PublicApi/WithdrawFee")
        .then((res) => {
          setData(res.data);
          setTableFilter(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    getData();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "نام / نماد	",
        accessor: "symbol",
        Cell: (props) => {
          const { symbol, icon } = props.row.original;
          return (
            <div className="flex space-x-3 space-x-reverse items-center">
              <div className="w-9">
                <img src={icon} alt={symbol} />
              </div>
              <div className="flex flex-col">
                <span>{symbol}</span>
              </div>
            </div>
          );
        },
      },
      {
        Header: "شبکه انتقال",
        accessor: "transferChain",
        Cell: (props) => {
          const { chains: transferChain } = props.row.original;
          return (
            <div
              className={`flex flex-col justify-center items-center space-y-2`}>
              {transferChain.map((chain) => {
                return (
                  <>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {chain.chain}
                    </span>
                  </>
                );
              })}
            </div>
          );
        },
      },
      {
        Header: "حداقل برداشت",
        accessor: "minWithdraw",
        Cell: (props) => {
          const { chains: minWithdraw } = props.row.original;
          return (
            <div
              className={`flex flex-col justify-center items-center space-y-2`}>
              {minWithdraw.map((chain) => {
                return (
                  <>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {chain.minWithdraw}
                    </span>
                  </>
                );
              })}
            </div>
          );
        },
      },
      {
        Header: "کارمزد برداشت",
        accessor: "withdrawFee",
        Cell: (props) => {
          const { chains: withdrawFee } = props.row.original;
          return (
            <div
              className={`flex flex-col justify-center items-center space-y-2`}>
              {withdrawFee.map((chain) => {
                return (
                  <>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {chain.withdrawFee}
                    </span>
                  </>
                );
              })}
            </div>
          );
        },
      },
      {
        Header: "کارمزد واریز",
        accessor: "depositFee",
        Cell: () => {
          return (
            <div
              className={`flex flex-col justify-center items-center space-y-2`}>
              <span>رایگان</span>
            </div>
          );
        },
      },
      {
        Header: "وضعیت برداشت",
        accessor: "withdrawStatus",
        Cell: (props) => {
          const { chains: withdrawStatus, symbol } = props.row.original;
          return (
            <div
              className={`flex flex-col justify-center items-center space-y-2 cursor-pointer text-sm`}>
              {withdrawStatus.map((chain) => {
                return (
                  <div
                    className={`flex items-center space-x-1 space-x-reverse px-4 py-2 rounded-md bg-opacity-10 ${
                      chain.minWithdraw > 0
                        ? "bg-emerald-600 text-emerald-600"
                        : "bg-red-600 text-red-600"
                    }`}
                    onClick={() =>
                      setDialogOptions({
                        title: `وضعیت برداشت ${symbol} روی شبکه ${chain.chain}`,
                        text:
                          chain.minWithdraw > 0 ? (
                            "برداشت ارز مورد نظر در یوبیتکس فعال میباشد"
                          ) : (
                            <Text />
                          ),
                        dialogOpen: true,
                        buttonText:
                          chain.minWithdraw > 0 ? "بستن" : "متوجه شدم",
                      })
                    }>
                    <span className="text-xl">
                      {chain.minWithdraw > 0 ? (
                        <IoCheckmarkDone />
                      ) : (
                        <IoClose />
                      )}
                    </span>
                    <span>{chain.minWithdraw > 0 ? "فعال" : "غیرفعال"}</span>
                  </div>
                );
              })}
            </div>
          );
        },
      },
    ],

    []
  );

  function handleDebounceFn(e) {
    const val = e.target.value;
    if (typeof val === "string" && (val.length >= 1 || val.length === 0)) {
      setTableFilter(data.filter((d) => d.symbol.includes(val.toUpperCase())));
    }
  }

  return (
    <>
      <MyDialog
        title={dialogOptions.title}
        text={dialogOptions.text}
        buttonText={dialogOptions.buttonText}
        dialogOpen={dialogOptions.dialogOpen}
        onDialogClose={() =>
          setDialogOptions((prev) => ({
            ...prev,
            ...{ dialogOpen: false },
          }))
        }
        fullwidthButton
      />
      <div className="my-10 p-10 rounded-lg dark:bg-[#051a36] bg-gray-50">
        {!loading ? (
          <>
            <div class="relative w-full mb-10">
              <div class="absolute right-0 flex items-center pr-3 pointer-events-none top-1/3">
                <span className="w-5">
                  <RiSearch2Line />
                </span>
              </div>
              <input
                type="text"
                onChange={handleDebounceFn}
                className="w-1/4 px-3 py-2 pr-9 bg-gray-50 dark:bg-transparent border-2 border-gray-200 dark:border-[#072750] rounded-md appearance-none focus:border-[#f39200] dark:focus:border-[#f39200] focus:outline-none"
                placeholder="جستجو..."
              />
            </div>
            <Table columns={columns} data={tableFilter} titleCenter />
          </>
        ) : (
          <div className="my-10 flex justify-center items-center">
            <p>درحال بارگزاری...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TransferFee;
