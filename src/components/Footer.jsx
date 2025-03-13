const Footer = () => {
  return (
    <footer id="footer" className="bg-cse-main px-3 md:px-10 py-7 md:pt-10 md:pb-5 text-center -mt-8 md:-mt-5">
      <div className="container">
        <div className="text-white space-y-3">
          <h1 className="text-shadow text-2xl md:text-3xl lg:text-4xl tracking-wide">Contact</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-stroke-1-cse-cyan">Feel free to Ask!</h2>
          <div className="!mt-5 flex flex-col justify-center items-center space-y-3">
            <a href="tel:+91 6374179865" className="text-shadow font-semibold text-lg md:text-xl lg:text-2xl text-shadow flex items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" className="fill-current text-green-500 mr-2">
                  <path d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></path>
                </svg>
              </span>
              +91 6374179865
            </a>
            <a href="tel:+91 6369189844" className="text-shadow font-semibold text-lg md:text-xl lg:text-2xl text-shadow flex items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" className="fill-current text-green-500 mr-2">
                  <path d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></path>
                </svg>
              </span>
              +91 6369189844
            </a>
          </div>
        </div>

        <div className="mt-10 text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-shadow">Bus Routes</h1>
          <div className="mt-4 space-y-2">
            <p className="text-lg md:text-xl lg:text-2xl text-shadow">Route 1: Thoraipakkam - T Nagar</p>
            <p className="text-lg md:text-xl lg:text-2xl text-shadow">Route 2: Thoraipakkam - Velachery</p>
            <p className="text-lg md:text-xl lg:text-2xl text-shadow">Route 3: Thoraipakkam - Tambaram</p>
            <p className="text-lg md:text-xl lg:text-2xl text-shadow">Route 4: Thoraipakkam - Adyar</p>
            <p className="text-lg md:text-xl lg:text-2xl text-shadow">Route 5: Thoraipakkam - Guindy</p>
            <p className="text-lg md:text-xl lg:text-2xl text-shadow">Route 6: Thoraipakkam - Koyambedu</p>
          </div>
        </div>

        <div className="mt-6 text-sm md:text-lg text-stroke-0-cse-cyan text-white">&copy; 2025 MNM CSE Association | All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
