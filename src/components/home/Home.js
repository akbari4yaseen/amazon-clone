import Product from "../product/Product";
import "./home.css";
const Home = () => {
  return (
    <main className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone"
            price={112.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SX385_.jpg"
          />
          <Product
            id="49538094"
            title="Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos"
            price={620.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71EWRyqzw0L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG CJ890 Series 49-Inch Ultrawide QHD (3840x1080) Computer Monitor, 144Hz, Curved, HDMI, USB-C, Height Adjustable Stand, 3 Yr WRNTY (LC49J890DKNXZA)"
            price={600}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
