import "./styles.css";
import TransactionTable from "./TransactionTable";

export default function App() {
  // The filters data has now moved into the App component

  // const filters = { categoryId: 0, payee: "Ullrich Group" };
  const filters = {
    startDate: new Date("07-22-2021"),
    endDate: new Date("09-26-2021")
  };

  //now if there are null or undefined transaction properites
  // const filters = {
  //   categoryId: undefined,
  //   payee: "Amazon",
  //   startDate: new Date("01-01-2022"),
  //   endDate: null
  // };

  // const filters = {
  //   startDate: new Date("07-22-2021"),
  //   endDate: null
  // };
  // const filters = {
  //   startDate: new Date("2021-05-12"),
  //   endDate: new Date("2021-05-14"),
  //   payee: "Ullrich Group",
  //   categoryId: 0,
  // }
  // const filters = { startDate: new Date ("Mon Sep 26 2021 17:21:54 GMT-0700"), endDate: new Date ("Fri Jul 22 2021 06:08:54 GMT-0700") };

  // console.log("this is filters on App.js")
  // console.log(filters);

  // console.log("this is filters.date on App.js")
  // console.log(filters.date)
  // console.log(entities.date)

  // const { categoryId, payee } = filters;
  // You need to get the filters data down to the TransactionTable through props
  return (
    <div>
      <TransactionTable filtered={filters} />
    </div>
  );
}

//  { id, categoryId, payee, notes, date, amount }
