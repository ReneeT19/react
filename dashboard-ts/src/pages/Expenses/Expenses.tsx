import styles from './Expenses.module.scss';
import React, { useState } from 'react'
import personOne from '../../assets/png/person1.png';
import personTwo from '../../assets/png/person2.png';
import personThree from '../../assets/png/person3.png';
import addIcon from '../../assets/png/addIcon.png';
import optionIcon from '../../assets/png/menuIcon.png';
import cartIcon from '../../assets/svg/cartIcon.svg';
import transportIcon from '../../assets/svg/transportIcon.svg';
import houseIcon from '../../assets/svg/houseIcon.svg';
import boxes from '../../assets/png/boxes.png';
import plant from '../../assets/png/plant.png';

import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts';


//divide this part to left(main) and right
const Expenses = () => {
  // whenever there is state change, use useState; set the default index to 0
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  //in real-world example, use an API for the data
  const todayExpenses = [
    {
      id: 1,
      expense: "Grocery",
      time: "5:12 pm",
      location: "Belanja di pascar",
      price: 326.8,
      icon: cartIcon,
      iconBackgroundColor: "#32a7e2",
    },
    {
      id: 2,
      expense: "Transportation",
      time: "5:12 pm",
      location: "Naik bus umum",
      price: 15.0,
      icon: transportIcon,
      iconBackgroundColor: "#B548C6",
    },
    {
      id: 3,
      expense: "Housing",
      time: "5:12 pm",
      location: "Bayar Listrik",
      price: 185.75,
      icon: houseIcon,
      iconBackgroundColor: "#FF8700",
    },
  ];

  const previousExpenses = [
    {
      id: 1,
      expense: "Food and Drink",
      time: "5:12 pm",
      location: "Makan Steak",
      price: 156.0,
      icon: cartIcon,
      iconBackgroundColor: "#DC3434",
    },
    {
      id: 2,
      expense: "Entertainment",
      time: "5:12 pm",
      location: "Nonton Bioskop",
      price: 35.2,
      icon: transportIcon,
      iconBackgroundColor: "#4BA83D",
    },
  ];

  const spendCategories = [
    {
      id: 1,
      category: "Food and Drinks",
      price: 872.4,
    },
    {
      id: 2,
      category: "Shopping",
      price: 1378.2,
    },
    {
      id: 3,
      category: "Housing",
      price: 928.5,
    },
    {
      id: 4,
      category: "Transportation",
      price: 420.7,
    },
    {
      id: 5,
      category: "Vehicle",
      price: 520,
    },
  ];

  //implement onMouseOver function here
  const onMouseOver = (data: any, index: number) => setActiveIndex(index);

  return (<>
  {/* The content inside the <main> element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms. */}
    {/* the expenses class is the entire right hand side content */}
    <main className={styles.expenses}> 
    {/* the card is the part with white background */}
      <div className={styles.expensesCard}>
        {/* <section> tag means that the content inside relates to a single theme */}
        {/* left section of the expense card */}
        <section className={styles.expensesOverview}>
          {/* the section includes 1(header, daterange, and chart), 2(overviewHeader,items) */}
          <div className={styles.expensesHeader}>
            {/* the Header includes Expenses Title(text) and Expenses Actions (people image and add button) */}
            <p className={styles.expensesTitle}>Expenses</p>
            <div className={styles.expensesActions}>
              <div className={styles.personImages}>
                  <img className={styles.personOne} src={personOne} alt="person one" />
                  <img className={styles.personTwo} src={personTwo} alt="person two" />
                  <img className={styles.personThree} src={personThree} alt="person three" />
              </div>
              <button>
              <img className={styles.addIcon} src={addIcon} alt="add" />
            </button>
            </div>
          </div>

          <p className={styles.dateRange}>01 - 25 March, 2022</p>

          {/* install recharts to create bar charts for this project */}
           {/* https://recharts.org/en-US/examples/TinyBarChart */}
           {/* change minHeight to 9vh and change fill color to rgba so you can add opacity of .2 (20%) according to Figma */}
          <ResponsiveContainer width="100%" height="9%">
            <BarChart data={data}>
            {/* implement function by having a closing /Bar tag with onMouseOver function and map the data*/}
            <Bar 
              dataKey="uv" 
              fill="rgba(21, 122, 255, .2)" 
              onMouseOver={onMouseOver}
              >
              {data.map((entry, index) => (
              <Cell
              cursor="pointer"
              fill={index === activeIndex
                ? "rgb(21, 122, 255)"
                : "rgba(21, 122, 255, .2)"}
              key={index} //normally use generated id
              />))}
            </Bar>
            </BarChart>
          </ResponsiveContainer>
          {/* Today section */}
          <div className={styles.expensesOverviewHeader}>
            <p className={styles.expensesOverviewTitle}>Today</p>
            <button>
              <img className={styles.expenseOption} src={optionIcon} alt="options"/>
            </button>
          </div>

          <ul>
            {/* map dataset todayExpenses and take expense, return (=>) the list of items,
            replace the hardcoded value such as title, time, location with variables in the dataset */}
            {todayExpenses.map((expense) => (
              <li className={styles.expenseItem} key={expense.id}>
                <div className={styles.expenseItemLeft}>
                  <div style={{ backgroundColor: expense.iconBackgroundColor }} className={styles.expenseItemDiv}>
                    <img src={cartIcon} alt={expense.expense} />
                  </div>
                  <div className={styles.expenseItemDetails}>
                    <p className={styles.expenseItemTitle}>{expense.expense}</p>
                    <p className={styles.expenseItemTime}>{expense.time} • {expense.location}</p>
                  </div>
                </div>
                {/* show two digits, use JS .toFixed(2) */}
                <p className={styles.expenseItemPrice}>{expense.price.toFixed(2)}</p>
            </li>
            ))}
          </ul>
          
          {/* Monday section */}
          <div className={styles.expensesOverviewHeader}>
            <p className={styles.expensesOverviewTitle}>Monday, 25 July 2022</p>
            <button>
              <img className={styles.expenseOption} src={optionIcon} alt="options"/>
            </button>
          </div>

          <ul>
            {previousExpenses.map((expense) => (
              <li className={styles.expenseItem} key={expense.id}>
                <div className={styles.expenseItemLeft}>
                  <div style={{ backgroundColor: expense.iconBackgroundColor }} className={styles.expenseItemDiv}>
                    <img src={cartIcon} alt={expense.expense} />
                  </div>
                  <div className={styles.expenseItemDetails}>
                    <p className={styles.expenseItemTitle}>{expense.expense}</p>
                    <p className={styles.expenseItemTime}>{expense.time} • {expense.location}</p>
                  </div>
                </div>
                <p className={styles.expenseItemPrice}>{expense.price.toFixed(2)}</p>
            </li>
            ))}
          </ul>
        </section>

        {/* right section of the expense card */}
        <section className={styles.moneyOverview}>
          <p className={styles.moneOverviewTitle}>Where'd your money go?</p>
          <ul>
            {spendCategories.map((category) =>
              <li key={category.id}>
              <div className={styles.spendCategory}>
                <p className={styles.spendCategoryName}>{category.category}</p>
                <p className={styles.spendCategoryPrice}>{category.price.toFixed(2)}</p>
              </div>
              <div className={styles.spendCategoryBar}>
                <div
                //use .reduce to get the total number of price
                style={({width: `${(category.price / spendCategories.reduce
                ((acc, current) => acc + current.price, 0))*100}%`})} 
                className={styles.spendCategoryColoredBar}></div>
              </div>
            </li>
            )}
          </ul>

          <div className={styles.saveMoneyDiv}>
            <img className={styles.boxes} src={boxes} alt="boxes" />
            <img className={styles.plant} src={plant} alt="plant" />
            <p className={styles.saveMoneyTitle}>Save more money</p>
            {/* lorem and hit tab */}
            <p className={styles.saveMoneyInfo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat obcaecati inventore, rem nemo sunt eligendi dolor exercitationem rerum vel esse consectetur quae reiciendis non quaerat numquam dolorem optio aut nihil.</p>
            <button className={styles.button} type="button">VIEW TIPS</button>
          </div>
        </section>
      </div> 
    </main>
  </>
  )
};

export default Expenses;