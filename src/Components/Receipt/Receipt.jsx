import './receipt.css';
import ReceiptItem from '../ReceiptItem/ReceiptItem';
import { useState } from 'react';

function Receipt() {
    const sortedReceipts = JSON.parse(localStorage.getItem('receipts')) || [];
    const [activeIndex, setActiveIndex] = useState(0);


    const handlePrevBtn = () => {
        setActiveIndex((prevIndex) => prevIndex === 0 ? sortedReceipts.length -1 : prevIndex -1);
    };
    const handleNextBtn = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % sortedReceipts.length);
    };

    if (sortedReceipts.length === 0) {
        return <p className='noItems'>Nothing to show here, go shop first!</p>
    }

  return (
    <section className="receipt-container">
        {sortedReceipts.map((event, index) => (
            <ReceiptItem
                key={event.barcode}
                event={event}
                className={index === activeIndex ? 'receiptItem--active' : ''}
                />
        ))}
        <section className="receiptBtn-container">
            <button
               onClick={handlePrevBtn} ><i class="fa-solid fa-chevron-right"></i></button>
            <button
                onClick={handleNextBtn} ><i class="fa-solid fa-chevron-right"></i></button>
        </section>
        
    </section>
  )
}

export default Receipt;