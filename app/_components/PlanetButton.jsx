
import React from 'react';
import styled from 'styled-components';

const PlanetButton = () => {
  return (
    <StyledWrapper>
      <button>
        <div className="main">
          <div className="rings" id="ring1" />
          <div className="rings" id="ring2" />
          <div className="asteriods-large" id="asteriod1" />
          <div className="asteriods-large" id="asteriod2" />
          <div className="asteriods-large" id="asteriod3" />
          <div className="asteriods-large" id="asteriod4" />
          <div className="asteriods-large" id="asteriod5" />
          <div className="asteriods-small" id="asteriod6" />
          <div className="asteriods-small" id="asteriod7" />
          <div className="asteriods-small" id="asteriod8" />
          <div className="asteriods-small" id="asteriod9" />
          <div className="asteriods-small" id="asteriod10" />
          <div id="saturn" />
          <div id="explore"></div>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    border: 0;
    background: radial-gradient(ellipse at 50% 50%,black 20%,transparent 72%);
    font-size: 17px;
    height: 200px;
    width: 300px;
    zoom: 1.2;
  }

  .main {
    width: 70px;
    margin: auto;
    position: relative;
    transform: rotateZ(0deg);
    isolation: isolate;
    scale: 1;
    transition: all 1.5s;
  }

  .main:hover {
    transform: rotateZ(240deg);
    scale: 2;
    /* filter: drop-shadow(10px,10px,10px,white); */
    filter: drop-shadow(-1px -1px 5px #69e9d6);
  }

  .rings {
    position: absolute;
    width: 200px;
    height: 100px;
    /* background-color: #000000; */
    border-radius: 150px 150px 0 0;
    background: radial-gradient(circle at 50% 100%,transparent 30%, #69e9d6 40%,#404D44 50%,#44867c 60%,#404D44 70%,transparent);
  }

  #saturn {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(80deg,#69e9d6,#404D44,#000000);
  }

  #ring1 {
    transform: rotateX(80deg);
    top: -20px;
    left: -65px;
  }

  #ring2 {
    transform: rotateX(-100deg);
    left: -65px;
    z-index: -1;
    top: -3px;
  }

  .asteriods-large {
    position: absolute;
    width: 8px;
    height: 10px;
    border-radius: 15px 8px;
    background: linear-gradient(220deg,#6f7776,#598ea3,#311515);
    transform: rotateZ(0deg);
    transition: all 3s;
  }

  #asteriod1 {
    top: 8px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }

  #asteriod2 {
    top: 35px;
    height: 10px;
    left: -55px;
  }

  #asteriod3 {
    top: 35px;
    height: 8px;
    left: 85px;
  }

  #asteriod4 {
    top: 40px;
    height: 4px;
    width: 4px;
    left: -40px;
  }

  #asteriod5 {
    top: 35px;
    height: 4px;
    width: 4px;
    left: 82px;
  }

  .asteriods-small {
    position: absolute;
    width: 4px;
    height: 3px;
    border-radius: 15px 8px;
    background: linear-gradient(80deg,#6f7776,#598ea3,#311515);
    transform-origin: 50px 50px;
    transform: rotateZ(0deg);
    transition: all 3s;
  }

  #asteriod6 {
    top: 6px;
    left: -5px;
    border-radius: 50%;
  }

  #asteriod7 {
    top: 15px;
    left: -35px;
  }

  #asteriod8 {
    top: 35px;
    left: 65px;
  }

  #asteriod9 {
    top: 60px;
    left: -10px;
  }

  #asteriod10 {
    top: 15px;
    left: 112px;
  }

  #explore {
    position: absolute;
    top: 32px;
    font-size: 15px;
    color: hsl(171, 59%, 74%);
    left: 10px;
    transition: all 3s;
  }

  .main:hover > .asteriods-large,.main:hover > .asteriods-small {
    transform: translateX(28px);
  }

  .main:hover > #explore {
    translate: -10px 20px;
    transform: rotateZ(120deg);
  }

  .main:not(hover) > #explore {
    translate: 0px;
    transform: rotateZ(0deg);
  }

  .main:not(hover) > .asteriods-large,.main:not(hover) > .asteriods-small {
    transform: translateX(0px);
  }

  .main:is(:active) > #explore {
    translate: -100px 200px;
  }

  .main:is(:active) {
    translate: -200px;
  }`;

export default PlanetButton;
