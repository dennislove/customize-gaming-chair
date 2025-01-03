import React from 'react';
import Scene from './BeeModel';
import { Canvas } from '@react-three/fiber';
import './style.css';
import SlideEffect from './SlideEffect';
import SplineScroll from '../Categories/SplineScroll';
const HomePage = () => {
  return (
    <div className="body bg-white dark:bg-[#1b1b1b] dark:text-[#eef8ce] text-black">
      {/* <SplineScroll /> */}
      <div className="section " id="banner">
        <div className="content-fit">
          <div className="title dark:text-dark text-light">3D customize</div>
        </div>

        <img
          src="./img/SS4.png"
          className="decorate"
          alt=""
          style={{
            width: '40vw',
            bottom: '10%',
            right: '0%',
            zIndex: '1'
          }}
        />
        {/* <img
          src="./img/leaf.png"
          className="decorate"
          alt=""
          style={{ width: '30vw', bottom: '0', left: '0' }}
        /> */}
      </div>

      <div className="section" id="intro">
        <div className="content-fit">
          <SlideEffect direction="right">
            <div className={`number `}>01</div>
          </SlideEffect>
          <SlideEffect direction="left">
            <div className={`des`}>
              <div className={`title  `}>3d animation design for website</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus voluptas a porro libero recusandae quae, aut
                ratione, incidunt laborum, necessitatibus similique enim
                doloremque ex. Laudantium obcaecati aspernatur doloremque illo
                beatae, maxime hic itaque consequatur nisi accusantium
                veritatis, voluptatem ratione! Placeat numquam nisi reiciendis
                harum quibusdam tempore eaque deleniti accusantium, veniam quae
                eos sed, asperiores laborum corporis odit mollitia consequatur
                adipisci? Quibusdam quis eos debitis non esse blanditiis
                laudantium rerum odit tempora? Corrupti maiores velit
                consequuntur cupiditate reiciendis similique provident
                repudiandae.
              </p>
            </div>
          </SlideEffect>
        </div>
      </div>
      <div className="section" id="description">
        <div className="content-fit">
          <SlideEffect direction="up">
            <div className="number">02</div>
          </SlideEffect>
          {/* <spline-viewer
            url="https://prod.spline.design/ZxczJIpPWhiyAvE9/scene.splinecode"
            style={{
              width: '1750px',
              top: '-15%',
              left: '-20%',
              overflowX: 'hidden',
              height: 'auto', // Thay đổi chiều cao tùy ý
              display: 'block',
              position: 'absolute'
            }}
          ></spline-viewer> */}
          <div className="des">
            <SlideEffect direction="down">
              <div className="title">DENNIS</div>
            </SlideEffect>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus voluptas a porro libero recusandae quae, aut ratione,
              incidunt laborum, necessitatibus similique enim doloremque ex.
              Laudantium obcaecati aspernatur doloremque illo beatae, maxime hic
              itaque consequatur nisi accusantium veritatis, voluptatem ratione!
              Placeat numquam nisi reiciendis harum quibusdam tempore eaque
              deleniti accusantium, veniam quae eos sed, asperiores laborum
              corporis odit mollitia consequatur adipisci? Quibusdam quis eos
              debitis non esse blanditiis laudantium rerum odit tempora?
              Corrupti maiores velit consequuntur cupiditate reiciendis
              similique provident repudiandae.
            </p>
          </div>
        </div>
        {/* <img
          src="./img/leaf1.png"
          className="decorate"
          alt=""
          style={{ width: '70vw', bottom: '0', right: '0', zIndex: '101' }}
        /> */}
      </div>
      <div className="section mt-10" id="contact">
        <div className="content-fit">
          <div className="number">03</div>
          <div className="des">
            <div className="title">CONTACT</div>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>test@gmail.com</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>+841.231.235</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>dennis.com</td>
                </tr>
                <tr>
                  <td>Youtube</td>
                  <td>@dennistran</td>
                </tr>
              </tbody>
            </table>
            <div className="sign">Dennis</div>
          </div>
        </div>
      </div>

      <div id="container3D" className="mt-20">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};

export default HomePage;
