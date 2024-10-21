
import styled  from 'styled-components'
import Typewriter from 'typewriter-effect';



const HomeContainer = styled.div`
  margin: 10vh 0 30vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 10%;
  height: 60vh;
  justify-content: center; 
`;

const TextIntro = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  
  text-align: center;
  color: #fff;

  .line_one { 
    display: flex; 
    align-items: center;
  }

  p {
    font-size: 2rem;
    font-family: Phantomsans, sans-serif;

  }

  h1 {
    margin: 0 20px;
    font-size: 3rem;
    font-family: Phantomsans, sans-serif;
    color: #bb2b2b;

  }
  h2{
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    white-space: nowrap;
    font-size: 2.5rem;
    font-family: Phantomsans, sans-serif;
    text-align: left;
  }
`;

const IntroVisuals = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  margin: 1rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

const LinkIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

  img {
    width: 30px;
    margin: 5px 25px 0 0;
    transition: transform 0.5s ease; 
    filter: invert(1); 
  }
  img:hover{
    transform: scale(1.3) rotateZ(360deg); 
    }
`;

const ResumeButton = styled.div`
  margin-left: 15px;
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  cursor: pointer;

span {
  background-color: rgb(5, 6, 45);
  padding: 12px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

 span:hover {
  background: none;
}
`;

export const Home = () => {
  return (
    <HomeContainer >
      <Intro>
        <TextIntro>
          <div className='line_one'>
            <p>Hello, my name is</p>
            <h1>Alan Brandan</h1>
          </div>
          <h2>
            I'm&nbsp;
            <Typewriter
              options={{
                strings: ['a Game Developer', 'a Gameplay Programmer', 'an Pixel Artist'],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 90,
                deleteSpeed: 80
              }}
            />
          </h2>
        </TextIntro>

        <LinkIcons>
          <a href="mailto:alanbrandan17@hotmail.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=12623&format=png&color=000000" alt="" /></a>
          <a href="https://www.linkedin.com/in/alan-brandan/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="" /></a>
          <a href="https://github.com/Alan-brandan" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"  alt="" /></a>
          <a href="https://drive.google.com/file/d/1kFCcqgTmDr3fHnzo-nVL_R7C6ZQ03p_7/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <ResumeButton role="button"><span >Resume ↓</span></ResumeButton>
          </a>

        </LinkIcons>
      </Intro>

      <IntroVisuals>
        <img src="https://avatars.githubusercontent.com/u/89269793?v=4" alt="" />
      </IntroVisuals>

    </HomeContainer>
  )
}
