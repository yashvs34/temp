import '../styles/allTransactions.css'

export default function AllTransactions () {
    

    return (
        <div className='all_transactions_details'>
            <TransactionsHeader/>

            {/* <div>
                {data.map((item, index) => {
                return <Transaction key={index} data={item} />
                })}
            </div> */}
        </div>
    )
}