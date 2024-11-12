const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-700 to-purple-600 py-10 px-5 md:px-20 lg:px-40 animate-fade-in-up">
      <h1 className="text-5xl font-bold text-center text-white mb-10 animate_animated animatefadeInUp animate_delay-1s">
        About Us
      </h1>

      <section className="text-white space-y-12">
        {/* Business Story */}
        <div className="mb-12 bg-white bg-opacity-10 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-opacity-20 animate_animated animate_fadeInLeft">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed">
            Founded in 2010, our restaurant was born from a simple yet powerful
            idea: to create a place where people can experience the joy of
            freshly prepared food made with love. Over the years, weve
            transformed into a beloved culinary spot in the heart of the city,
            where our customers can enjoy a variety of dishes inspired by
            flavors from around the world.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our commitment to quality ingredients, sustainable practices, and
            warm hospitality remains at the core of everything we do. We take
            pride in our close-knit team, who share our passion for food and our
            mission to deliver an unforgettable dining experience for every
            guest.
          </p>
        </div>

        {/* Unique Selling Points */}
        <div className="mb-12 bg-white bg-opacity-10 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-opacity-20 animate_animated animate_fadeInRight">
          <h2 className="text-3xl font-semibold mb-4">What Makes Us Unique</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>
              Only the freshest, locally sourced ingredients in every dish.
            </li>
            <li>
              A menu crafted to cater to diverse palates, from comfort foods to
              innovative, seasonal specials.
            </li>
            <li>
              An inviting, family-friendly atmosphere that makes you feel right
              at home.
            </li>
            <li>
              Commitment to sustainable, eco-friendly practices in everything we
              do, from sourcing to waste management.
            </li>
            <li>
              Exceptional customer service, ensuring each visit is memorable and
              personalized.
            </li>
          </ul>
        </div>

        {/* Meet the Team */}
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-md animate_animated animate_fadeInUp">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {/* Team Member 1 */}
            <div className="bg-white bg-opacity-80 shadow-lg p-6 rounded-lg max-w-xs text-center text-gray-800 transform transition duration-300 hover:scale-105 hover:bg-opacity-90 animate_animated animate_fadeInDown">
              <img
                src="/images/JD.jpg"
                alt="Chef John Doe"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-700 transform transition duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-semibold">Chef John Doe</h3>
              <p className="text-indigo-700">Executive Chef</p>
              <p className="mt-3 text-gray-700">
                With over 20 years of experience, Chef John leads our kitchen
                with creativity and expertise, bringing exciting, bold flavors
                to every dish. His passion for culinary innovation is the
                driving force behind our menu.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white bg-opacity-80 shadow-lg p-6 rounded-lg max-w-xs text-center text-gray-800 transform transition duration-300 hover:scale-105 hover:bg-opacity-90 animate_animated animate_fadeInDown">
              <img
                src="./images/JS.jpg"
                alt="Chef Jane Smith"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-700 transform transition duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-semibold">Chef Jane Smith</h3>
              <p className="text-indigo-700">Sous Chef</p>
              <p className="mt-3 text-gray-700">
                Known for her keen eye for detail and dedication to quality,
                Chef Jane ensures that every dish not only tastes amazing but is
                also beautifully presented. Her expertise is the backbone of our
                kitchens precision and consistency.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white bg-opacity-80 shadow-lg p-6 rounded-lg max-w-xs text-center text-gray-800 transform transition duration-300 hover:scale-105 hover:bg-opacity-90 animate_animated animate_fadeInDown">
              <img
                src="../src/images/ML.jpg"
                alt="Manager Mike Lee"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-700 transform transition duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-semibold">Mike Lee</h3>
              <p className="text-indigo-700">Restaurant Manager</p>
              <p className="mt-3 text-gray-700">
                With a background in hospitality and a passion for customer
                service, Mike ensures that every guest feels welcomed and has an
                exceptional dining experience. His commitment to our patrons is
                a key part of what makes us unique.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
