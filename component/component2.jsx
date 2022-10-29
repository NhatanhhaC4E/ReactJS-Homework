import './style.css';
import React from "react";

function NewSongList() {
    return (
        <div className='MPH'>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/0/b/3/4/0b34c4c68b73f906d128bb2f1722e5cf.jpg"} 
                        name="Ừ! Em Xin Lỗi" 
                        singer="Hoàng Yến Chibi, B Ray, Khắc Hưng" 
                        date="Hôm nay">
            </NewSong>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/a/5/c/0/a5c0f5104772544ff79c7a562e22a7ed.jpg"} 
                        name="Chấp Niệm" 
                        singer="Trương Thảo Nhi" 
                        date="1 ngày trước">
            </NewSong>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/0/3/1/6031defff9ca682575b6956fbba5d366.jpg"} 
                        name="นักแสดงท่านหนึ่ง " 
                        singer="WHAWHA, Quang Hùng MasterD" 
                        date="1 ngày trước">
            </NewSong>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/f/5/2/4/f5241dd11f826be7317df3d186e17343.jpg"} 
                        name="Một Thời Đã Xa " 
                        singer="Đức Phúc" 
                        date="1 ngày trước">
            </NewSong>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/5/3/3/5533c8ea05b9fd972007d9e36afcfe6a.jpg"} 
                        name="Lu Mờ Tâm Trí " 
                        singer="Ngô Kiến Huy, Vương Anh Tú" 
                        date="1 ngày trước">   
            </NewSong>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/e/6/9/3e690eda1ea25f03102d9cb51b325f03.jpg"} 
                        name="Birthday" 
                        singer="TEN, Quang Hùng MasterD" 
                        date="2 ngày trước">
            </NewSong>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/7/4/3/7/74370a28ba04288584c36eac3a1aace6.jpg"} 
                        name="Lift Me Up " 
                        singer="Rihana" 
                        date="1 ngày trước">
            </NewSong>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/7/b/c/4/7bc47785bb496932820535fcd211b9ac.jpg"} 
                        name="Mùa Thu Cho Em " 
                        singer="Juky San" 
                        date="2 ngày trước">
            </NewSong>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/0/d/e/40dee59ca6ea3f25e654c8f94183884c.jpg"} 
                        name="Bài Ngửa" 
                        singer="Vương Anh Tú" 
                        date="3 ngày trước">
            </NewSong>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/b/3/7/1b37ed137bee49ab85827ef8c78ae386.jpg"} 
                        name="For the Night " 
                        singer="Chloe, Latto" 
                        date="Hôm nay">
            </NewSong>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/a/2/f/5/a2f5ae0dad94955fe621b0ff148c4c86.jpg"} 
                        name="Rum Pum Pum " 
                        singer="VIVIZ" 
                        date="1 ngày trước">
            </NewSong>
            <NewSong    image={"https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/d/2/d/9d2d25109a276178acc6f88fbca8261f.jpg"} 
                        name="Ngày Trái Tim Rơi Lệ" 
                        singer="Nguyễn Đình Vũ" 
                        date="3 ngày trước">
            </NewSong>
        </div>
    )
  };
  
function NewSong (props) {
    return (
        <div className="NS-container"> 
            <div className="NS-image">
                <img src={props.image}           
                     style={{
                        resizeMode: "contain",
                        height: 65,
                        width: 65,
                        borderRadius: 8}}></img>
            
            </div>
            <div className='NS-content'>
                <div className="NS-name">{props.name}</div>
                <div className="NS-singer">{props.singer}</div>
                <div className="NS-date">{props.date}</div>
            </div>
        </div>
    )
};


export default NewSongList;
