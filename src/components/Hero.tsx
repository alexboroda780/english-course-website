
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex flex-col space-y-6 lg:w-1/2">
          <div className="inline-block">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 mb-4">
              Новый набор — старт 15 мая
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Заговорите на английском за <span className="text-purple-600">3 месяца</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-md">
            Интенсивный онлайн-курс с носителями языка и персональным наставником для быстрого прогресса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-base py-6">
              Записаться на курс
            </Button>
            <Button size="lg" variant="outline" className="text-base py-6">
              Бесплатный пробный урок
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://source.unsplash.com/random/100x100?face&sig=${i}`}
                  alt="Student"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-sm text-slate-700">
              <span className="font-semibold">950+ студентов</span> уже изучают
              английский с нами
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt="Студенты на онлайн-уроке"
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
            <div className="bg-green-500 rounded-full p-2">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div>
              <p className="font-medium text-sm">96% студентов</p>
              <p className="text-xs text-slate-500">успешно сдают экзамены</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
