import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/css.reset";
import Menu from "../src/components/Menu/components/index";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  return (
  <>
    <CSSReset/>
              <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
      <Menu /> 
      <Header/> 
      <Timeline playlists={config.playlists}/>  
    </div>
    </>
  );

  }
  export default HomePage
//Fernanda Esteves 38327086
  const StyledHeader = styled.div`
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .user-info{
      display:flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
    }
  `; 
  
  function Header() {
    return (
      <StyledHeader>
        <StyledBanner />
        {/*<img src="banner" />*/}
        <section className="user-info">
        <img src={`https://github.com/${config.github}.png`}/>
        <div>
        <h2>
        {config.name}
        </h2>
        <p>
        {config.job}
        </p>
        </div>
        </section>  
      </StyledHeader>
      
    )
    
  }
  const StyledBanner = styled.div`
    background-color: blue;
    background-image: url("https://images.unsplash.com/photo-1667967951672-19627bcb1ee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    height: 230px;
`;

  function Timeline(props) {
    const playlistsNames = Object.keys(props.playlists);

      return (
        <StyledTimeline>
          
            {playlistsNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
  }