import '../styles/filterSort.css'
import CustomerRegionDropdown from './CustomerRegionDropDown';
import GenderDropdown from './GenderDropdown';
import PaymentMethodDropdown from './PaymentMethodDropdown';
import ProductCategoryDropdown from './ProductCategoryDropDown';
import TagDropdown from './TagDropdown';

export default function FilterSort () {
    return (
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
    )
}