const CourseInfo = () => (
  <div className="bg-blue-50 container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold">80+ sessions</h2>
        <p className="text-sm sm:text-base">Over 20+ training instruments.</p>
      </div>
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold">Lifetime Access</h2>
        <p className="text-sm sm:text-base">Access basic sessions anytime</p>
      </div>
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold">Certificate</h2>
        <p className="text-sm sm:text-base">
          Get a course completion certificate
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold">$99</h2>
        <p className="text-sm sm:text-base">One-time payment</p>
      </div>
    </div>
  </div>
);
export default CourseInfo;
