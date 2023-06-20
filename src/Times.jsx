import React from 'react';
import Countdown from 'react-countdown-now';

const CountdownComponent = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // Thiết lập ngày kết thúc là ngày hiện tại cộng thêm 3 ngày

    const renderer = ({ days, hours, minutes, seconds }) => (
        <div className='timeele'>
            <img src="../images/deal_ofthe_week.png" alt="" />
            <div className='timeright'>
                <div className='timeline'>
                    <h2>Deal Of The Week</h2>
                    <div style={{ width: "100%",marginBottom:"50px"}}><p style={{ width: "80px", height: "2px", backgroundColor: "red",marginLeft:"160px"  }}></p></div>
                    <div className='timeall'>
                        <div className='divv'> <div className='bao'><span className='so'>{days}</span><br /> <span className='chu'>day</span></div> </div>
                        <div className='divv'> <div className='bao'><span className='so'> {hours}</span><br /> <span className='chu'>hour</span></div></div>
                        <div className='divv'> <div className='bao'><span className='so'>{minutes}</span><br /> <span className='chu'>minute</span></div></div>
                        <div className='divv'><div className='bao'><span className='so'>{seconds}</span> <br /><span className='chu'>second</span></div></div>
                    </div>
                    <button style={{ marginTop: "50px", backgroundColor:"rgb(0, 0, 0)",width:"150px", border:"none"}} type="button" class="btn btn-primary">Button</button>
                </div>
            </div>
       </div>
    );

    return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownComponent;
