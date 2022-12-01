import React, { useEffect, useMemo, useState } from "react";
import { Table } from "../../../components/table";
import { trading_fee_data } from "../../../data/fee";
import { FaUserTimes, FaUserCheck, FaGem } from "react-icons/fa";
import { IoCheckmarkDone, IoClose } from "react-icons/io5";

const TradingFee = () => {
  const columns = useMemo(
    () => [
      {
        Header: "سطح کاربری",
        accessor: "level",
        Cell: (props) => {
          const { level, levelDescripton } = props.row.original;
          return (
            <div
              className={`flex flex-col cursor-pointer justify-center items-center ${
                level == 1
                  ? "text-emerald-600"
                  : level == 2
                  ? "text-red-600"
                  : "text-amber-400"
              }`}>
              <span className="text-2xl">
                {level == 1 ? (
                  <FaUserCheck />
                ) : level == 2 ? (
                  <FaUserTimes />
                ) : (
                  <FaGem />
                )}
              </span>
              <span>سطح {level}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {levelDescripton}
              </span>
            </div>
          );
        },
      },
      {
        Header: "برداشت ارزی",
        accessor: "cryptoWithdrawal",
        Cell: (props) => {
          const { cryptoWithdrawal, cryptoWithdrawalDescripton } =
            props.row.original;
          return (
            <div
              className={`flex flex-col justify-center items-center space-y-2 cursor-pointer ${
                cryptoWithdrawal ? "text-emerald-600" : "text-red-600"
              }`}>
              <div
                className={`flex items-center space-x-1 space-x-reverse px-4 py-2 rounded-md bg-opacity-10 ${
                  cryptoWithdrawal ? "bg-emerald-600" : "bg-red-600"
                }`}>
                <span className="text-2xl">
                  {cryptoWithdrawal ? <IoCheckmarkDone /> : <IoClose />}
                </span>
                <span>{cryptoWithdrawal ? "فعال" : "غیرفعال"}</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {cryptoWithdrawalDescripton}
              </span>
            </div>
          );
        },
      },
      {
        Header: "برداشت ریالی",
        accessor: "tomanWithdrawal",
        Cell: (props) => {
          const { tomanWithdrawal, tomanWithdrawalDescripton } =
            props.row.original;
          return (
            <div
              className={`flex flex-col justify-center items-center space-y-2 cursor-pointer ${
                tomanWithdrawal ? "text-emerald-600" : "text-red-600"
              }`}>
              <div
                className={`flex items-center space-x-1 space-x-reverse px-4 py-2 rounded-md bg-opacity-10 ${
                  tomanWithdrawal ? "bg-emerald-600" : "bg-red-600"
                }`}>
                <span className="text-2xl">
                  {tomanWithdrawal ? <IoCheckmarkDone /> : <IoClose />}
                </span>
                <span>{tomanWithdrawal ? "فعال" : "غیرفعال"}</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {tomanWithdrawalDescripton}
              </span>
            </div>
          );
        },
      },
      {
        Header: "واریز ارزی",
        accessor: "cryptoDeposit",
        Cell: (props) => {
          const { cryptoDeposit, cryptoDepositDescripton } = props.row.original;
          return (
            <div
              className={`flex flex-col justify-center items-center space-y-2 cursor-pointer ${
                cryptoDeposit ? "text-emerald-600" : "text-red-600"
              }`}>
              <div
                className={`flex items-center space-x-1 space-x-reverse px-4 py-2 rounded-md bg-opacity-10 ${
                    cryptoDeposit ? "bg-emerald-600" : "bg-red-600"
                }`}>
                <span className="text-2xl">
                  {cryptoDeposit ? <IoCheckmarkDone /> : <IoClose />}
                </span>
                <span>{cryptoDeposit ? "فعال" : "غیرفعال"}</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {cryptoDepositDescripton}
              </span>
            </div>
          );
        },
      },
      {
        Header: "واریز ریالی",
        accessor: "tomanDeposit",
        Cell: (props) => {
          const { tomanDeposit, tomanDepositDescripton } = props.row.original;
          return (
            <div
            className={`flex flex-col justify-center items-center space-y-2 cursor-pointer ${
                tomanDeposit ? "text-emerald-600" : "text-red-600"
            }`}>
            <div
              className={`flex items-center space-x-1 space-x-reverse px-4 py-2 rounded-md bg-opacity-10 ${
                tomanDeposit ? "bg-emerald-600" : "bg-red-600"
              }`}>
              <span className="text-2xl">
                {tomanDeposit ? <IoCheckmarkDone /> : <IoClose />}
              </span>
              <span>{tomanDeposit ? "فعال" : "غیرفعال"}</span>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {tomanDepositDescripton}
            </span>
          </div>
          );
        },
      },
      {
        Header: "بازار معاملاتی",
        accessor: "pair",
        Cell: (props) => {
          const { pair } = props.row.original;
          return (
            <div className="flex items-center text-sm cursor-pointer flex-col">
              <span>{pair}</span>
            </div>
          );
        },
      },
      {
        Header: "کارمزد معامله",
        accessor: "tradigFee",
        Cell: (props) => {
          const { tradigFee } = props.row.original;
          return (
            <div className="flex items-center text-sm cursor-pointer flex-col">
              <span>{tradigFee}</span>
            </div>
          );
        },
      },
    ],

    []
  );

  return (
    <>
      <div className="my-10 p-10 rounded-lg dark:bg-[#051a36] bg-gray-100">
        <Table columns={columns} data={trading_fee_data} titleCenter/>
      </div>
    </>
  );
};

export default TradingFee;
