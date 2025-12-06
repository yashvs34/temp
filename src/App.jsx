import { useState } from 'react'
import './App.css'
import TransactionsHeader from './components/TransactionsHeader';
import Transaction from './components/Transaction';
import GenderDropdown from './components/GenderDropdown';
import PaymentMethodDropdown from './components/PaymentMethodDropdown';
import CustomerRegionDropdown from './components/CustomerRegionDropDown';
import ProductCategoryDropdown from './components/ProductCategoryDropDown';
import TagDropdown from './components/TagDropdown';
import { useRecoilState } from 'recoil';
import { filterAtom } from './atoms/filterAtom';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [refresh, setRefresh] = useRecoilState(filterAtom);

  return (
    <>
      <div>
          <div className='header'>
            <div className='header_content'>Sales Management System</div>
            <input className='search_input' placeholder='Search with name or phone' onChange={(e) => setSearchInput(e.target.value)}></input>
          </div>

          <div className='filter_sort'>
            <div className='filters'>
              <img src='refresh.png' onClick={() => {
                setRefresh(true);
                setTimeout(() => setRefresh(false), 50);
              }} className='refresh_button' />

              <CustomerRegionDropdown/>
              <GenderDropdown/>

              <select name='Age Range' id='Age Range'>
                <option value="Age">Age</option>
              </select>

              <ProductCategoryDropdown/>
              <TagDropdown/>
              <PaymentMethodDropdown/>

              <div>Date</div>
            </div>
            <div>Sort By:</div>
          </div>

          <div  className='overall_sales'>
            <div className='total_sales'>
              <div>
                Total Units Sold
              </div>

              <div>
                {/* {data.total_units_sold} */}
              </div>
            </div>

            <div className='total_amount'>
              <div>
                Total Amount
              </div>

              <div>
                {/* {data.total_amount} */}
              </div>
            </div>

            <div className='total_discount'>
              <div>
                Total Discount
              </div>

              <div>
                {/* {data.total_discount} */}
              </div>
            </div>
          </div>

          <div className='all_transactions_details'>
            <TransactionsHeader/>

            {/* <div>
              {data.map((item, index) => {
                return <Transaction key={index} data={item} />
              })}
            </div> */}
          </div>

      </div>
    </>
  )
}

export default App
