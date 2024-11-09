import { useTranslation } from 'react-i18next';
import BlueWhiteHeading from '../headings/BlueWhiteHeading/BlueWhiteHeading';
import VideoCarousel from '../VideoCarousel/VideoCarousel';

const Testimonials = ({ pagName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pagName}.testimonial.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const videos = data('videos', true);
  const videosArray = Array.isArray(videos) ? videos : [];

  return (
    <div className="flex flex-col gap-3 py-5">
      <div className="text-gray-600 text-center">{data('title')}</div>
      <div className="flex justify-center">
        <BlueWhiteHeading
          white={data('heading.white')}
          blue={data('heading.blue')}
        />
      </div>

      <VideoCarousel data={videosArray || []} />
    </div>
  );
};

export default Testimonials;
