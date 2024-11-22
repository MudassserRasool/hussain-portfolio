import { animated, useSpring } from '@react-spring/web';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CodingPc } from '../../../assets';
import { routes } from '../../../routes/routes';
import Button from '../../common/buttons/Button/Button';
const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const achievements = t('home.hero.achievements', { returnObjects: true });
  const achievementsArray = Array.isArray(achievements) ? achievements : [];

  const AnimatedNumber = ({ number }) => {
    const { value } = useSpring({
      from: { value: 0 },
      to: { value: number },
      config: { duration: 2000 }, // Adjust animation duration
    });

    return <animated.div>{value.to((val) => Math.floor(val))}</animated.div>;
  };
  return (
    <section className="bg-white bg-gradient-to-r from-[#0a0a2a] to-[#1a1a4d] p-5 md:-0">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-3 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className=" place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-xl font-semibold tracking-tight leading-none md:text-2xl xl:text-4xl text-white">
            {t('home.hero.title.white1')}{' '}
            <span className="text-blue-600">{t('home.hero.title.blue')}</span>
            {t('home.hero.title.white2')}
          </h1>
          <div className="flex items-center mb-6 gap-3">
            {/* <div className="text-xl text-blue-500">{'>'}</div> */}
            <div className="max-w-2xl font-light text-white md:text-lg lg:text-xl dark:text-gray-400">
              {t('home.hero.description')}
            </div>
          </div>

          <Button
            theme={'blue'}
            title="Get in Touch"
            onClick={() => navigate(routes.contactUs)}
          />
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={CodingPc} alt="mockup" loading="lazy" />
        </div>
      </div>

      {/* display companies in row */}
      <div className="flex items-center justify-center space-x-12">
        {achievementsArray?.length > 0 &&
          achievementsArray?.map((achievement, index) => {
            console.log(achievement);
            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`text-white text-4xl font-bold text-center ${
                    index === 0 ? 'ms-7' : ''
                  }`}
                >
                  <div className="flex gap-1 items-center">
                    <AnimatedNumber
                      number={parseInt(achievement?.number, 10)}
                    />
                    {achievement.title !== 'Average Rating' && <div>+</div>}
                  </div>
                </div>
                <div className="text-white">
                  <span className="text-blue-500 text-4xl p-1 mb-64">.</span>
                  {achievement?.title}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Hero;
