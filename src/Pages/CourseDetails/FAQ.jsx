const FAQ = () => (
  <div className="container mx-auto my-8">
    <div className="w-full md:w-3/5 mx-auto space-y-4">
      <div className="collapse collapse-plus bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-lg sm:text-xl font-medium">
          What age groups are eligible to join the football academy?
        </div>
        <div className="collapse-content">
          <p>
            The academy offers training programs for various age groups,
            typically starting from 6 years old to 18 years old. Each group is
            divided based on skill level and age to ensure appropriate training.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-lg sm:text-xl font-medium">
          What equipment is required for training?
        </div>
        <div className="collapse-content">
          <p>
            Players are required to bring their own football boots, shin guards,
            and water bottles. The academy provides the rest of the training
            equipment, including balls, cones, and bibs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-lg sm:text-xl font-medium">
          How are the training sessions structured?
        </div>
        <div className="collapse-content">
          <p>
            Training sessions are structured to include warm-up exercises, skill
            drills, tactical training, and small-sided games. The focus is on
            developing both individual skills and team play.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FAQ;
