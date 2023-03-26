import React from 'react';
import photo1 from '/Users/learnacademy/Desktop/Personal website/react-Version/personal-site/src/Photos/cloud.png';
import photo3 from '/Users/learnacademy/Desktop/Personal website/react-Version/personal-site/src/Photos/cloud-service.png'
import photo6 from '/Users/learnacademy/Desktop/Personal website/react-Version/personal-site/src/Photos/mountain.png'
import photo7 from '/Users/learnacademy/Desktop/Personal website/react-Version/personal-site/src/Photos/programming.png'
import photo10 from '/Users/learnacademy/Desktop/Personal website/react-Version/personal-site/src/Photos/profile.png'
import photo11 from '/Users/learnacademy/Desktop/Personal website/react-Version/personal-site/src/Photos/cyber-security.png'


function Thebody() {
  return (
    <div>
      <body>
  <nav class="nav-bar">
    <a href="index.html">Home</a>
    <a href="portfolios.html">Portfolio's</a>
    <a href="contactme.html">Contact me</a>
  </nav>

  <div class="Top">
    <img src={photo1} class="top-cloud" alt='cloud.png'/>  
    <h1>I'm Jacob</h1>
    <h2 class="programmer">a programmer</h2>
    <img src={photo1} class="bottom-cloud" alt='cloud.png'/>  
    <img src={photo6} alt='mountain.png'/>
    <div class="middle-container">
   
    </div>
    <div class="profile">
    <img class="profile-pic" src={photo10} alt='profile.png'/>
        {/* replacement of above text  */}
          <h2>Hello</h2>
          <p>
            I am a Junior Web Developer who has experience with the Help desk. And 5 + years in the military.  </p>
            <hr/>
    </div>
  </div>

  <div class="skills">
    <h2>My Skills</h2>

    <div class="skill-row">
      <img src={photo11} class="Sec" alt='cyber-security'/>
      <h3>Security Plus</h3>
      <p>I received security plus back in the summer of 2021. The knowledge it gave me prepared me for my first job in I.T  as a help desk specialist.</p>
    </div>

    <div class="skill-row">
      <img class="AWS" src={photo3} alt='cloud-service.png'/>
      <h3>Aws Solutions Architect</h3>
      <p>Solution Architect took me around 4 months to achieve, and it was great to know and gave me the skills to build the bare bones of cloud solutions, connect VPCs, manage AWS storage, and more, etc</p>
    </div>

    <div class="skill-row">
      <img src={photo7} class="Sec" alt='programming.png'/>
      <h3>Programming skills</h3>
      <p>I have hands-on skills with Html, CSS, Javascript, React js, Ruby, Ruby on rails, Bootstrap, PostgreSQL, Github, Yarn, Test-driven development oriented with Jest and Rspec. The ability to do research and problem-solve as a team.</p>
    </div>

    <div class="skill-row1 ">
      <h3>Education 🎓</h3>

      <h4>Learn Academy</h4>
      <p>I graduated from Learn Academy on June 2nd of 2023 and am a full-stack developer. This is a full-time boot camp that was Monday through Friday. I learned the basics of programming and learned how to work in a Dev environment.</p>

      <hr/>

      <h4>U.S. Army School of Medicine</h4>
      <p>I graduated from the Army's School of Medicine back in 2017, as Combat Medic the skills that I learned in the EMS field were the 5 P's: Proper preparation prevents poor performance. I was responsible for my patient's well-being and their injuries. I was usually in charge of 100 to </p>
    </div>
  </div>

  <div class="contact-me">
    <h2>Get In Touch</h2>
    <h3>Reach out to me at my Email.</h3>
    <p>Jrosswalks@gmail.com</p>

    <a class="btn" href="mailto:jrosswalks@gmail.com">CONTACT ME</a>
  </div>

  <div class="bottom-container">
    <a class="footer-link" href="https://www.linkedin.com/in/jacob-ross-7a261020a/">LinkedIn</a>
  <a class="footer-link" href="https://github.com/JacobR96">Github</a>

  <p class="copyright">© 2023 Jacob Ross.</p>
</div>
  </body>

</div>

  )
}

export default Thebody