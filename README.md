github uppgift repo: https://github.com/fu-react-fe24/exam-individuell

figma: https://www.figma.com/board/XnlRzZ5FzabjmOuoICXRsg/Where-It-s--?node-id=0-1&t=Nv6ib7pyB91LaEiA-1

Jag har använt mig av följande bibliotek:

- **React**
- **react-router-dom**
- **zustand**  
  Jag använder *zustand* för att skapa en **store**, där jag även gör ett **API-anrop en gång** för att hämta data/events.

- **FontAwesome**  
  Detta används för diverse knappar som:
  - **+**
  - **−**
  - **✖ (stäng)**

- **UUID**  
  Används för att generera ett **unikt ID** som jag sedan modifierar så här:
  ```js
  .substring(0, 5).toUpperCase();

  -Jag använder samma UUID för min barcode men där sätter css klassen:
  font-family: 'Libre Barcode 39';
  
- **Swiper**
  Jag använder Swiper som navigering för mina Receipts med följande moduler:
  -*Swiper*
  -*SwiperSlide*
  -*Pagination* – visar vilken biljett du är på och hur många du har.
