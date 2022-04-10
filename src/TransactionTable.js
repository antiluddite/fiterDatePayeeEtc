import React from "react";
import { entities } from "./data";

export default function TransactionTable({ filtered }) {
  // The part where the filtering should happen
  // The filters data is up in App and you'll have to bring it down here through props
  // Once you get it down here, you can use it to filter, just like you did in the last challenge

  //   const filters = {
  //     startDate: null,
  //     endDate: null,
  //     categoryId: null,
  //     payee: null
  // }

  // const { id, date, payee, categoryId, notes, amount } = props;
  // const filters = { categoryId, payee};

  // const transactions = entities.filter(
  //   (t) => t.categoryId === categoryId && t.payee === payee
  // );

  const obj = {
    categoryId: undefined,
    payee: "Amazon",
    startDate: new Date("01-01-2022"),
    endDate: null
  };

  const isNullUndefEmptyStr = Object.values(obj).every((value) => {
    // 👇️ check for multiple conditions
    if (value === null || value === undefined || value === "") {
      return true;
    }
    return false;
  });

  console.log(isNullUndefEmptyStr); // 👉️ true

  const filteredTransactions = entities.filter(
    (t) =>
      t.date >= filtered.startDate &&
      t.date <= filtered.endDate &&
      t.categoryId === filtered.categoryId &&
      t.payee === filtered.payee
  );

  // console.log("this is filtered on TransactionTable.js")
  // console.log(filtered)

  // console.log("this is entities on TransactionTable.js")
  // console.log(entities)

  // console.log("this is filteredTransactions on TransactionTable.js")
  // console.log(filteredTransactions)

  // console.log("filtered.startDate on transactionTable " + filtered.startDate)
  // console.log("filtered.endDate on transactionTable " + filtered.endDate)

  // console.log(props);
  // const heroes = [
  //   { name: 'Batman' },
  //   { name: 'Joker' }
  // ];
  // const names = heroes.map(
  //   function({ name }) {
  //     return name;
  //   }
  // );
  // names; // => ['Batman', 'Joker']
  // const transactions = entities.filter(
  //   (t) => t.categoryId === categoryId && t.payee === payee
  // );

  //working on start and end date:
  //https://stackoverflow.com/questions/31977724/how-to-filter-json-data-by-date-range-in-javascript
  // var startDate = new Date("2021-02-23");
  // var endDate = new Date("2021-04-25");

  // var resultProductData = transactions.filter(d => {
  //   var date = new Date(d.date);
  //   return (date >= startDate && date <= endDate);
  // });
  // console.log(resultProductData)

  //https://www.youtube.com/watch?v=MlLQb01tcdU
  // const dates = entities.date;
  // dates.filter(dateFilter);
  // dates.dateFilter(dateFilter);
  // function dateFilter(date) {
  //   return date >= "2021-08-27" && date <= "2019-08-29";
  // }
  //******
  // filterDate = entities.filter(dateFilter)
  // dateFilter(date) => {
  //  date >= '2021-08-27' && dates <= '2021-08-29';
  // console.log(filterDate);
  // console.log(dates);

  // crappy code for showing the transactions
  return (
    <ul>
      {filteredTransactions.map((t) => (
        <li>
          Date: {t.date.toUTCString()}
          <br />
          Payee: {t.payee}
          <br />
          CategoryId: {t.categoryId}
          <br />
          Notes: {t.notes}
          <br />
          Amount: {t.amount}
          <br />
          <br />
        </li>
      ))}
    </ul>
  );
}
