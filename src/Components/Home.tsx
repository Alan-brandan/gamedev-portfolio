import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const HomeContainer = styled.div`
  margin: 5vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin: 3vh 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin: 2vh 0;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 10%;
  height: 60vh;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 5%;
    height: auto;
  }

  @media (max-width: 480px) {
    padding-left: 0;
    height: auto;
  }
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

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  h1 {
    margin: 0 20px;
    font-size: 3rem;
    font-family: Phantomsans, sans-serif;
    color: #bb2b2b;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    white-space: nowrap;
    font-size: 2.5rem;
    font-family: Phantomsans, sans-serif;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
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
    width: 250px;
    transition: transform 0.5s ease;

    @media (max-width: 768px) {
      width: 200px;
    }

    @media (max-width: 480px) {
      width: 150px;
    }
  }
  img:hover{
    transform: rotateZ(-30deg);
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

  img:hover {
    transform: scale(1.3) rotateZ(360deg);
  }

  @media (max-width: 480px) {
    img {
      width: 25px;
    }
  }
`;

const ResumeButton = styled.div`
  margin-left: 15px;
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
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

  @media (max-width: 480px) {
    font-size: 16px;
    min-width: 120px;
  }
`;

export const Home = () => {
  return (
    <HomeContainer>
      <Intro>
        <TextIntro>
          <div className='line_one'>
            <p>Hello 👋 I'm</p>
            <h1>Alan Brandan</h1>
          </div>
          <h2>
            I'm&nbsp;
            <Typewriter
              options={{
                strings: ['a Game Developer', 'a Gameplay Programmer', 'a Pixel Artist'],
                autoStart: true,
                loop: true,
                cursor: "_",
                delay: 90,
                deleteSpeed: 80,
              }}
            />
          </h2>
        </TextIntro>

        <LinkIcons>
          <a href="mailto:alanbrandan17@hotmail.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=12623&format=png&color=000000" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/alan-brandan/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="" />
          </a>
          <a href="https://github.com/Alan-brandan" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="" />
          </a>
          <a
            href="https://drive.google.com/file/d/1kFCcqgTmDr3fHnzo-nVL_R7C6ZQ03p_7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ResumeButton role="button">
              <span>Resume ↓</span>
            </ResumeButton>
          </a>
        </LinkIcons>
      </Intro>

      <IntroVisuals>
        <img src="https://avatars.githubusercontent.com/u/89269793?v=4" alt="" />
      </IntroVisuals>
    </HomeContainer>
  );
};
