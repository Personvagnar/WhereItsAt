import './receiptItem.css';

function ReceiptItem({ event, className = '' }) {
  return (
    <section className={`receiptItem-container ${className}`}>
        <section className="receiptItem__title h2">
          {event.name}
        </section>
        <section className="receiptItem__location">
          {event.where}
        </section>
        <section className="receiptItem__information">
          <p>{event.when.date}</p>
          <p>{event.when.from}</p>
          <p>{event.when.to}</p>
        </section>
        <section className="receiptItem__seats">
          <p>Section {event.arenasection}</p>
          <p>Seat {event.seat}</p>
        </section>
        <section className="receiptItem__barcode">
          <p>{event.barcode}</p>
          <p>{event.barcode}</p>
        </section>
    </section>
  )
}

export default ReceiptItem;