import React from "react";
import ReactDOM from "react-dom";
import PlayList from "../component/component1";
import NewSongList from "../component/component2";
import '../component/style.css'

function App () {
  return(
<div className="AppContainer">
    <h1>Mới Phát hành</h1>
    <div className="Selector">
    <div className="Song">BÀI HÁT</div> 
    <div className="Album">ALBUM</div>
    </div>
      <NewSongList></NewSongList>

    <h1>Cứ Chill Thôi</h1>
    <div className="Playlist">
      <PlayList></PlayList>
    </div>
    <h1>Bảng xếp hạng Podcast</h1>

</div>
)
};


ReactDOM.render(
  <PlayList />, document.getElementById("root"),
);
ReactDOM.render(
  <NewSongList />, document.getElementById("root"),
);

export default App;