import { Button } from "../components";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-solid border-4 p-10 text-center">
        <h1 className="text-4xl font-thin">Welcome to Nest Academy</h1>
        <p className="text-sm w-80 font-sans mx-auto my-3">Sign in to your existing account or create a new one for full access.</p>
        <div className="mt-4 flex flex-row justify-center">
          <Button  className='basis-1/2' label="sign in" />
          <Button className='basis-1/2' label="register" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
