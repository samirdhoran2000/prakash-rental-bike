import React from "react";
import Link from 'next/link'
import "./footer.css";

const Footer1 = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-sub-container">
        <div className=" sub-footer">
          <div className="sub-footer-child">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.34713015704466!2d73.7324833776802!3d18.59413185584634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbbe47ccc395%3A0x380fd742f7c69dfb!2sShree%20Motors!5e0!3m2!1sen!2sin!4v1703775302401!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{
                border: 0,
              }}
              loading="lazy"
            ></iframe>
          </div>
          <div className="sub-footer-child text-gray-500">
           orem ipsum dolor, sit amet consectetur adipisicing elit. Quasi reprehenderit quo aliquid ea? Itaque dignissimos voluptatibus perferendis? Reprehenderit, cum labore. Laborum perferendis esse ratione hic ipsum nisi culpa praesentium! Magni.
          </div>
          <div className="sub-footer-child text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            sapiente ex illo omnis vel laborum, amet nemo nesciunt quam
            accusantium consequuntur qui at repudiandae quo expedita id
            quibusdam eius voluptate?
          </div>
        </div>
        <div className="copyright-main-container w-full text-gray-300">
          <div style={{
            // backgroundColor:'red'
          }}>&copy; All copyright Reseverd <Link href={'tel:+918262920116'}>Prakash Indore</Link></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100px",
            }}
          >
            <Link
              href="tel:+918888634041" 
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </Link>
            <Link
              href=" https://wa.me/8888634041?text=hii"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </Link>
            <Link
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
