import * as React from "react";

const steps = [
  {
    image: `https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg`,
  },
  {
    image:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image: `https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
  },
];

export default function Banner() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1500);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="max-w-full  h-1/2 w-full">
      <div className="h-full w-full">
        <img
          className="h-[400px] w-full"
          src={
            steps[activeStep].image !== undefined
              ? steps[activeStep].image
              : steps[0].image
          }
          alt="Carousel image"
        />
      </div>
    </div>
  );
}
