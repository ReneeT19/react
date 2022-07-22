import styles from './Expenses.module.scss';
import React from 'react'
import personOne from '../../assets/png/person1.png';
import personTwo from '../../assets/png/person2.png';
import personThree from '../../assets/png/person3.png';
import addIcon from '../../assets/png/addIcon.png';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

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
];
//divide this part to left(main) and right
const Expenses = () => {
  return (<>
  {/* he content inside the <main> element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms. */}
    <main className={styles.expenses}>
      <div className={styles.expensesCard}>
        {/* <section> tag means that the content inside relates to a single theme */}
        <section className={styles.expensesOverview}>
          {/* the section includes header, daterange, and chart */}
          <div className={styles.expensesHeader}>
            {/* the Header includes Expenses Title(text) and Expenses Actions (people image and add button) */}
            <p className={styles.expensesTitle}>Expenses</p>
            <div className={styles.expensesActions}>
              <div className={styles.personImages}>
                  <img src={personOne} alt="person one" />
                  <img src={personTwo} alt="person two" />
                  <img src={personThree} alt="person three" />
              </div>
              <button>
              <img src={addIcon} alt="add" />
            </button>
            </div>
          </div>

          <p className={styles.dateRange}>01 - 25 March, 2022</p>

          {/* install recharts to create bar charts for this project */}
           {/* https://recharts.org/en-US/examples/TinyBarChart */}
           {/* change minHeight to 9vh and change fill color to rgba so you can add opacity of .2 (20%) according to Figma */}
          <ResponsiveContainer width="100%" minHeight="9vh">
            <BarChart width={150} height={40} data={data}>
            {/* implement function by having a closing /Bar tag */}
            <Bar dataKey="uv" fill="rgba(21, 122, 255, .2)" >
                
            </Bar>
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div> 
    </main>
  </>
  )
};

export default Expenses;