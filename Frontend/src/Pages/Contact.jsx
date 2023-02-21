export default function Contact() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto my-20 md:my-32">
        <h2 className="text-2xl text-center mb-9 font-bold md:text-4xl md:mb-12">
          Contact us
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6888801966847!2d72.81240931470262!3d19.425844045930933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a967b8a8b507%3A0x32f481b01b7a268a!2sSai%20Sadan%20Apartment!5e0!3m2!1sen!2sin!4v1676990440360!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="my-16">
          <form className="max-w-xl mx-auto" action="" method="POST">
            <div className="mb-6">
              <input
                className="w-full h-10 px-3 py-1 rounded border border-gray-300"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full h-10 px-3 py-1 rounded border border-gray-300"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                className="w-full h-28 px-3 py-1 rounded border border-gray-300"
                name="message"
                id="message"
                placeholder="Enter your message"
                autoComplete="off"
                required
              ></textarea>
            </div>
            <button className="py-2 px-5 bg-green-600 text-white rounded hover:bg-green-500 transition-all cursor-pointer">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
