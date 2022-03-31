import React from 'react'

const About = () => {
  return (
    <div>
        <div className="banner-about">
        <div className="banner-content-about">
          <h1 className="heading">About us</h1>
          <div className="button-violet">Join Now!</div>
        </div>
      </div>
      <div className="feature">
        <img
          src="./assets/trainer.jpg"
          alt=""
          className="feature-img"
        />
        <div className="feature-content">
          <h2>Our Trainers</h2>
          <p className="content">
          To reach your goals successfully and efficiently, work one-on-one with a Certified Personal Trainer. Our Personal Trainers will work with you to create a fitness and nutrition plan that is tailored to your specific needs. It’s fun!          </p>
          <button className="button-black">Book a Free Goal Session</button>
        </div>
      </div>
      <div className="feature-rev">
        <div className="feature-content">
          <h2>Small Group Training</h2>
          <p className="content">
          THE WORKX is our special Small Group Training programme, which is only available to members of Power Fitness. THE WORKX is a wonderful way to get sweaty, and it's based on the HIIT (High Intensity Interval Training) approach. It's led by one of our qualified leaders.          </p>
          <button className="button-black">View Schedule</button>
        </div>
        <img
          src="./assets/class.png"
          alt=""
          className="feature-img"
        />
      </div>
      <div className="feature">
        <img
          src="./assets/crossfit.jpg"
          alt=""
          className="feature-img"
        />
        <div className="feature-content">
          <h2>Become a personal Trainer</h2>
          <p className="content">
          Become a Personal Trainer
          Do you want to take your fitness obsession to the next level? With BC Personal Training Institute, you can become a Certified Personal Trainer. Power Fitness is delighted to guarantee employment placement for all graduates at one of our facilities.          </p>
          <button className="button-black">Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default About