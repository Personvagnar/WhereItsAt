import './receipt.css';
import ReceiptItem from '../ReceiptItem/ReceiptItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Receipt() {
    const sortedReceipts = JSON.parse(localStorage.getItem('receipts')) || [];

    if (sortedReceipts.length === 0) {
        return <p className='noItems'>Nothing to show here, go shop first!</p>
    } 

  return (
    <section className="receipt-container">
        <Swiper
            modules={[Pagination]}
            pagination={{clickable: true}}
            spaceBetween={20}
            slidesPerView={1}
        >  
        {sortedReceipts.map((event) => (
            <SwiperSlide key={event.barcode}>
                <ReceiptItem
                    event={event}
                    />
            </SwiperSlide>
        ))}
        </Swiper>
    </section>
  )
}

export default Receipt;