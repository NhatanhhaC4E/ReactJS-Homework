import './style.css';
import React from "react";
import photo1 from '../assets/images/z1.jpg';
import photo2 from '../assets/images/z2.jpg';
import photo3 from '../assets/images/z3.jpg';
import photo4 from '../assets/images/z4.jpg';
import photo5 from '../assets/images/z5.jpg';
/*
const PlayListData = [{
    imageurl: photo1,
    content: "Nhạc Cho Thứ Tư",
    sub:"Thứ tư từ từ tận hưởng"
},
{
    imageurl: photo2,
    content: "Đóa Hồng Nhạc Việt",
    sub:"Nữ ca sĩ tỏa sắc hương"
},
{
    imageurl: photo3,
    content: "Chillout",
    sub:"Sẵn sàng bỏ hết ưu phiền"
},{
    imageurl: photo4,
    content: "Pop Rising",
    sub:"Tiềm năng Pop Âu Mĩ"
},{
    imageurl: photo5,
    content: "Hà Nhi's Ex Story",
    sub:"Lâu lâu nhắc lại"
},
];
const PlaylistSub =({imageurl,content,sub}) => {
    return (
        <div className="playlist-album">
            <div className="playlist-image">
                <img src={imageurl} alt=""></img>
            </div>
            <div className="playlist-content">{content}</div>
            <div className="playlist-sub">{sub}</div>
        </div>
    )
}

const PlayList = ({imageurl,content,sub}) => {
    return (
        <div className='PlayListWrap'>
        {PlayListData.map((el) => {
            return <PlaylistSub
                imageurl={el.imageurl}
                content={el.content}
                sub={el.sub}
                />
            })}
        
        </div>
    )};



*/
function PlayList() {
    return (
        <div className='Playlist'>
            <PlaylistAlbum image={photo1} content="Nhạc Cho Thứ Tư" sub="Thứ tư từ từ tận hưởng"></PlaylistAlbum>
            <PlaylistAlbum image={photo2} content="Đóa Hồng Nhạc Việt" sub="Nữ ca sĩ tỏa sắc hương"></PlaylistAlbum>
            <PlaylistAlbum image={photo3} content="Chillout" sub="Sẵn sàng bỏ hết ưu phiền"></PlaylistAlbum>
            <PlaylistAlbum image={photo4} content="Pop Rising" sub="Tiềm năng Pop Âu Mĩ"></PlaylistAlbum>
            <PlaylistAlbum image={photo5} content="Hà Nhi's Ex Story" sub="Lâu lâu nhắc lại"></PlaylistAlbum>
        </div>
    )
  };
  

function PlaylistAlbum (props) {
    return (
        <div className="playlist-album"> 
            <div className="playlist-image">
                <img src={props.image}></img>
            </div>
            <div className="playlist-content">{props.content}</div>
            <div className="playlist-sub">{props.sub}</div>
        </div>
    )
};

export default PlayList;
