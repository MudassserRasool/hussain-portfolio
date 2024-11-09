const HeadingWithBackgroundText = ({ white, blue, background }) => {
  return (
    <div class="relative  text-white p-8 text-center h-16 ">
      <h1 class="text-2xl font-bold ">
        {white} <span class="text-blue-600">{blue}</span>
      </h1>
      <div class="-translate-y-14 ">
        <span class="opacity-20 text-gray-400 text-4xl">{background}</span>
      </div>
    </div>
  );
};

export default HeadingWithBackgroundText;
