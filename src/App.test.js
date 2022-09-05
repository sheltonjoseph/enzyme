import React from "react";
import App from "./App";
import AccountBalance from "./Components/AccountBalance";
import Notification from "./Components/Notification";
import { render , screen} from '@testing-library/react'
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import toJson from "enzyme-to-json"


const userBalance ={
  balance:1100,
  savingBalance:103
}
describe("rendering Components",()=>{
  test("renders App Component without crashing" ,()=>{
     render(<App/>);
     const headerText = screen.getByRole('heading', {name: /Welcome in the personal finance app!/i})
     expect(headerText).toBeInTheDocument();
  })
  test("renders the button",()=>{
    render(<AccountBalance accounts={userBalance}/>)
    const Button = screen.getByRole('button', {name: /Send 100 to Saving/i})
    expect(Button).toBeInTheDocument();
  })
})


describe("passing props",()=>{
  test("accepts user account props",()=>{
    render(<AccountBalance accounts={userBalance}/>);
    
  })

})

// describe("passing props",()=>{
//   const accountWrapper = mount(<AccountBalance accounts={userBalance} />);
//   const notificationWrapper = mount(<Notification balance={userBalance.balance}/>)
//   it("accepts user account props" , ()=>{
//     expect(accountWrapper.props().accounts).toEqual(userBalance)
//   });
//   it("contains savingBalance value" ,()=>{
//     const value = accountWrapper.find(".savings").text();
//     const expectedValue = userBalance.savingBalance + '$';
//     expect(value).toEqual(expectedValue)
//   });
//   it("notification accepts props", ()=>{
//     expect(notificationWrapper.props().balance).toEqual(userBalance.balance)
//   })
// })

// describe("logic", () => {
//   const wrapper = mount(<AccountBalance accounts={userBalance} />);
//   wrapper.find("#balance-button").simulate("click");
//   it("button click - update savings", () => {
//     const savingsValue = wrapper.find(".savings").text();
//     const expectedValue = userBalance.savingBalanace + 100 + '$';
//     expect(savingsValue).toEqual(expectedValue);
//   });
//   it("button click - update balance", () => {
//     const balanceValue = wrapper.find(".balance").text();
//     const expectedBalanceValue = userBalance.balance - 100 + '$';
//     expect(balanceValue).toEqual(expectedBalanceValue);
//   });
// });

// describe("snapshots", () => {
//   it("App snapshot", () => {
//     const tree = shallow(<App/>);
//     expect(toJson(tree)).toMatchSnapshot();
//   });
//   it("Accounts snapshots", () => {
//     const accountBalanceTree = shallow(<AccountBalance accounts={userBalance} />);
//     expect(toJson(accountBalanceTree)).toMatchSnapshot();
//   });
//   it("Notification snapshot", () => {
//     const notificationTree = shallow(<Notification balance={userBalance.balance} />);
//     expect(toJson(notificationTree)).toMatchSnapshot();
//   });
// });

