const Testimonials = () => (
  <div className="bg-blue-50 py-8">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        What Our Students Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <p>"This course was amazing! I learned so much."</p>
          <p className="mt-4 font-bold">- Jane Doe</p>
        </div>
        {/* Repeat for more testimonials */}
      </div>
    </div>
  </div>
);
export default Testimonials;
