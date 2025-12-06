import '../styles/filterSort.css'
import AgeDropdown from './AgeDropdown';
import CustomerRegionDropdown from './CustomerRegionDropDown';
import GenderDropdown from './GenderDropdown';
import PaymentMethodDropdown from './PaymentMethodDropdown';
import ProductCategoryDropdown from './ProductCategoryDropDown';
import TagDropdown from './TagDropdown';
import DateDropdown from './DateDropdown';

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
              <AgeDropdown/>
              <ProductCategoryDropdown/>
              <TagDropdown/>
              <PaymentMethodDropdown/>
              <DateDropdown/>

            </div>
            <div>Sort By:</div>
          </div>
    )
}