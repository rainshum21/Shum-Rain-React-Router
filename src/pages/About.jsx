import profile from '../assets/images/profile-pic.png';
export default function About() {
    return (
      <div className='profile'>
        {/* About - pic & introduction */}
        <h2>About Me</h2>
        <img src={profile} alt="profile picture" className="profile-pic" />
        <p>As a content designer, I am passionate about creating meaningful and engaging content that connects with my audience. 
            My dedication to my craft has driven me to constantly improve my skills and stay on top of the latest trends in the industry. Every project I work on is an opportunity to push the boundaries of creativity and explore new possibilities. Whether it's crafting a compelling story, designing eye-catching visuals, or developing innovative ideas, I always strive to deliver the very best results. My journey as a content designer has been filled with ups and downs, but I have never lost sight of my goals. I am determined to make a positive impact through my work and inspire others to do the same. As I look ahead, I see a path full of endless possibilities and exciting opportunities. I am ready to embrace whatever challenges come my way and continue to grow as a content designer.
        </p>
      </div>
    );
  }
  