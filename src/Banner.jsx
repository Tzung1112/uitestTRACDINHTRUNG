import React from 'react'

export default function Banner() {
  return (
      <>
        <div className='banner'>
              <div className='anhbanner'>
                  <img src="../images/banner_1.jpg" alt="hu" />
                  <span>WOMEN'S</span>
              </div>
              <div className='anhbanner'>
                  <img src="../images/banner_2.jpg" alt="hu" />
                  <span>ACCESSORIES'S</span>
            </div>
              <div className='anhbanner'>
                  <img src="../images/banner_3.jpg" alt="hu" />
                  <span>MEN'S</span>
              </div>
        </div>
        <div className='footerBanner'>
              <div className='trungfooterBanner'>
                  <span><i class="fa-solid fa-truck"></i>
                  </span>
                  <div>
                    <h5>FREE SHIPPING</h5>
                    <p>Suffered Alteration in Some From</p>
                  </div>
                  
              </div> <div className='trungfooterBanner'>
                  <span><i class="fa-regular fa-money-bill-1"></i>
                  </span>
                  <div>
                      <h5>CACH ON DELIVERY</h5>
                      <p>The Internet Tend To Repeat</p>
                  </div>
              </div>
              <div className='trungfooterBanner'>
                  <span><i class="fa-sharp fa-solid fa-rotate-left"></i>
                  </span>
                  <div>
                      <h5>45 DAYS RETURN</h5>
                      <p>Making it Look Like Readable</p>
                  </div>
              </div>
              <div className='trungfooterBanner'>
                  <span><i class="fa-regular fa-clock"></i>
                  </span>
                  <div>
                      <h5>OPENING ALL WEEK</h5>
                      <p>8AM-09PM</p>
                  </div>
              </div>
        </div>
      </>

  )
}
