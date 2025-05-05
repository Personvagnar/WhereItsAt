import './receipt.css';
import ReceiptItem from '../ReceiptItem/ReceiptItem';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function Receipt() {
    const savedReceipts = JSON.parse(localStorage.getItem('receipts')) || [];
    const [activeIndex, setActiveIndex] = useState(0);

    const sortedReceipts = savedReceipts.flatMap(event => {

        const arenasection = String.fromCharCode(Math.floor(Math.random() * 5) + 65);
        const seat = Math.floor(Math.random() * 500) + 1;

        return Array.from({ length: event.quantity}, (_, index) => {
            if (index === 0) {
                return {
                    ...event,
                    barcode: uuidv4().substring(0, 5),
                    arenasection,
                    seat,
                };
            } else {
                return {
                    ...event,
                    barcode: uuidv4().substring(0, 5),
                    arenasection,
                    seat: seat + index,
                };
            }
        });
    });

    const handlePrevBtn = () => {
        setActiveIndex((prevIndex) => prevIndex === 0 ? sortedReceipts.length -1 : prevIndex -1);
    };
    const handleNextBtn = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % sortedReceipts.length);
    };

    if (sortedReceipts.length === 0) {
        return <p className='noItems'>Nothing to show here, go shop first!</p>
    }

   /* localStorage.setItem('receipts', JSON.stringify(sortedReceipts));*/

  return (
    <section className="receipt-container">
        {sortedReceipts.map((event, index) => (
            <ReceiptItem 
                key={event.barcode}
                event={event} 
                className={index === activeIndex ? 'receiptItem--active' : ''} />
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