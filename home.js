import React from 'react'

import FeatureCard2 from './feature-card2'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <div data-role="Header" className={styles['navbar-container']}>
        <div className={styles['navbar']}>
          <span className={styles['heading']}>Kushagra Srivastava</span>
          <div className={styles['links-container']}>
            <span
              className={` ${styles['link']} ${projectStyles['navbar-link']} `}
            >
              About
            </span>
            <span
              className={` ${styles['link01']} ${projectStyles['navbar-link']} `}
            >
              Experience
            </span>
            <span className={styles['link02']}>
              <span
                className={` ${projectStyles['navbar-link']} ${projectStyles['navbar-link']} `}
              >
                Portfolio
              </span>
              <br></br>
            </span>
            <span className={styles['link03']}>Contact</span>
          </div>
          <div data-role="BurgerMenu" className={styles['burger-menu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className={styles['mobile-menu']}>
            <div className={styles['container01']}>
              <span
                className={` ${projectStyles['card-heading']} ${styles['heading1']} `}
              >
                Logo
              </span>
              <div data-role="CloseMobileMenu" className={styles['close-menu']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className={styles['links-container1']}>
              <span
                className={` ${styles['link04']} ${projectStyles['navbar-link']} `}
              >
                About
              </span>
              <span
                className={` ${styles['link05']} ${projectStyles['navbar-link']} `}
              >
                Experience
              </span>
              <span
                className={` ${styles['link06']} ${projectStyles['navbar-link']} `}
              >
                Portofolio
              </span>
              <span className={projectStyles['navbar-link']}>Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['section-separator']}></div>
      <div className={styles['section-separator1']}></div>
      <div className={styles['container02']}>
        <div className={styles['hero']}>
          <div className={styles['hero-text-container']}>
            <h1
              className={` ${styles['heading2']} ${projectStyles['section-heading']} `}
            >
              Hi! I&apos;m Kush.
            </h1>
            <span className={styles['text02']}>
              <span className={styles['text03']}>
                I&apos;m a penultimate year computer science student with a data
                science and analytics background, with a significant interest in
                ML Engineering, Software Engineering, and Data Science. I have a
                range of experience, from data analysis to software engineering
                + ML through internships and personal projects.I enjoy learning
                new technologies and am currently learning OCaml. My background
                lies primarly within the realm of Software Engineering and
                Machine Learning, but I also really enjoy working with frontend
                frameworks such as React. I have experience with full stack
                development using Django, Java, Spring, PHP, and various other
                frameworks/tools. I am also very passionate about finance and
                quantitative trading + research, and stay up-to-date with it in
                my free time.
              </span>
              <br className={styles['text04']}></br>
              <br className={styles['text05']}></br>
              <br></br>
            </span>
            <div className={styles['cta-btn-container']}>
              <button
                className={` ${styles['cta-btn']} ${projectStyles['anchor']} ${projectStyles['button']} `}
              >
                <span className={styles['text07']}>Resume</span>
              </button>
              <a
                href="https://github.com/KS0107"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['cta-btn1']} ${projectStyles['button']} `}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['features']}>
        <div className={styles['heading-container']}>
          <h2
            className={` ${styles['text08']} ${projectStyles['section-heading']} `}
          >
            My Projects
          </h2>
        </div>
        <div className={styles['cards-container']}>
          <div className={styles['card']}>
            <div className={styles['content-container']}>
              <span className={styles['heading3']}>
                <span className={styles['text09']}>Web Applications</span>
                <br></br>
              </span>
              <span className={styles['text11']}>
                FooBar is a social media web application created with vanilla
                JavaScript, HTML, CSS, and PHP. It serves as a chat,
                bar/restaurant review, and timetabling application, where you
                can coordinate meet-ups with friends at any of the bars, clubs,
                and restaurants in Manchester.
              </span>
            </div>
            <a
              href="https://github.com/KS0107/foobarmapchester"
              target="_blank"
              rel="noreferrer noopener"
              className={` ${styles['link08']} ${projectStyles['button']} `}
            >
              GitHub
            </a>
          </div>
          <div className={styles['card1']}>
            <div className={styles['content-container1']}>
              <span className={styles['heading4']}>Capital Discord Bot</span>
              <span className={styles['text12']}>
                <span>
                  I used the Discord API and the discord.py library to create
                  the Discord chatbot “Impulse”, and hosted it online using
                  Heroku&apos;s hosting service. As a second part to this
                  project, I designed a sorting algorithm to create a ranked
                  list of most volatile stocks, using data web-scraped from
                  TradingView using Beautiful Soup 4. This data was then sent to
                  the chat when requested by a specific command. Many additional
                  commands  were available for this bot.
                </span>
                <br className={styles['text14']}></br>
                <span>​</span>
                <br className={styles['text16']}></br>
                <span>
                  Project now offline since Heroku no longer supports free
                  dynos.
                </span>
                <br></br>
                <br></br>
                <br></br>
              </span>
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=1095794180044882082&amp;permissions=8&amp;scope=bot"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link09']} ${projectStyles['button']} `}
              >
                Invite Bot
              </a>
            </div>
          </div>
          <div className={styles['card2']}>
            <div className={styles['content-container2']}>
              <span className={styles['heading5']}>
                Machine Learning Models
              </span>
              <span className={styles['text21']}>
                <span>
                  I create machine learning models from scratch and also using
                  libraries such as sci-kit learn.
                </span>
                <br></br>
                <br></br>
                <span>
                  I have created models that work with facial recognition data
                  using different statistical techniques such as linear least
                  squares regression and gradient descent. 
                </span>
                <br></br>
                <br></br>
                <span>
                  I have also created natural language processing projects such
                  as spam filters and text topic classifiers.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['about']}>
        <div className={styles['max-content-width-container']}>
          <div className={styles['heading-container1']}>
            <h1
              className={` ${styles['text29']} ${projectStyles['section-heading']} `}
            >
              Professional experience
            </h1>
          </div>
          <div className={styles['content-container3']}>
            <div className={styles['about-1']}>
              <div className={styles['container03']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text30']} ${projectStyles['card-text']} `}
                >
                  Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                  imperdiet.
                </span>
              </div>
              <div className={styles['container04']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text31']} ${projectStyles['card-text']} `}
                >
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className={styles['container05']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text32']} ${projectStyles['card-text']} `}
                >
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
            <div className={styles['about-11']}>
              <div className={styles['container06']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text33']} ${projectStyles['card-text']} `}
                >
                  <span>
                    Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className={styles['container07']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon12']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text37']} ${projectStyles['card-text']} `}
                >
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className={styles['container08']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon14']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text38']} ${projectStyles['card-text']} `}
                >
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
          </div>
          <button
            className={` ${styles['button']} ${projectStyles['anchor']} ${projectStyles['button']} `}
          >
            CHECK MY WORK
          </button>
        </div>
      </div>
      <div className={styles['features1']}>
        <h1 className={styles['text39']}>My Skills</h1>
        <div className={styles['container09']}>
          <FeatureCard2 rootClassName="rootClassName"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName3"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName2"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName1"></FeatureCard2>
        </div>
      </div>
      <div className={styles['section-separator2']}></div>
      <div className={styles['section-separator3']}></div>
      <div className={styles['section-separator4']}></div>
      <div className={styles['faqs']}>
        <h2
          className={` ${styles['text40']} ${projectStyles['section-heading']} `}
        >
          Check the most common questions
        </h2>
        <div className={styles['content-container4']}>
          <div className={styles['faq']}>
            <div className={styles['question-container']}>
              <span className={styles['question']}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container']}>
              <span
                className={` ${styles['answer']} ${projectStyles['card-text']} `}
              >
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet. Here you would give the answer. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla
                quis sem at nibh elementum imperdiet.
              </span>
              <span className={projectStyles['card-text']}>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
          <div className={styles['faq1']}>
            <div className={styles['question-container1']}>
              <span className={styles['question1']}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container1']}>
              <span
                className={` ${styles['answer2']} ${projectStyles['card-text']} `}
              >
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className={projectStyles['card-text']}>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </span>
            </div>
          </div>
          <div className={styles['faq2']}>
            <div className={styles['question-container2']}>
              <span className={styles['question2']}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container2']}>
              <span
                className={` ${styles['answer4']} ${projectStyles['card-text']} `}
              >
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className={projectStyles['card-text']}>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['section-separator5']}></div>
      <div className={styles['section-separator6']}></div>
      <div className={styles['footer-container']}>
        <div className={styles['footer']}>
          <div className={styles['social-links']}>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon16']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon18']}
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </div>
          <div className={styles['copyright-container']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon20']}>
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span>
              <span
                className={` ${projectStyles['anchor']} ${projectStyles['anchor']} `}
              >
                Copyright, 2023
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
