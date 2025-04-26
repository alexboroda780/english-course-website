import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import EnrollmentForm from "./EnrollmentForm";

const CourseInfo = () => {
  return (
    <section className="py-16 bg-slate-50" id="программа">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Программа обучения</h2>
          <p className="text-slate-600 text-lg">
            Выберите подходящий уровень и начните свой путь к свободному владению английским
          </p>
        </div>

        <Tabs defaultValue="beginner" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="beginner">Начинающий</TabsTrigger>
            <TabsTrigger value="intermediate">Средний</TabsTrigger>
            <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
          </TabsList>

          <TabsContent value="beginner" className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">Для начинающих (A1-A2)</h3>
                <p className="text-slate-600 mb-6">
                  Идеально подходит для тех, кто только начинает изучать английский или имеет базовые знания. 
                  Вы научитесь представляться, вести простые диалоги и понимать основы грамматики.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Базовая грамматика и лексика",
                    "Постановка произношения",
                    "Навыки повседневного общения",
                    "Основы письменной речи",
                    "12 тематических модулей",
                    "24 практических занятия",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-8">
                  <EnrollmentForm level="beginner">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Записаться
                    </Button>
                  </EnrollmentForm>
                  <Button variant="outline" size="lg">
                    Подробная программа
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col gap-4">
                <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                  <p className="text-purple-800 font-semibold mb-1">Длительность</p>
                  <p className="text-slate-700">3 месяца (36 часов)</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                  <p className="text-purple-800 font-semibold mb-1">Формат</p>
                  <p className="text-slate-700">Онлайн-занятия 2 раза в неделю</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                  <p className="text-purple-800 font-semibold mb-1">Результат</p>
                  <p className="text-slate-700">Уверенное владение базовыми навыками</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">Средний уровень (B1-B2)</h3>
                <p className="text-slate-600 mb-6">
                  Для тех, кто уже имеет базовые знания и хочет вывести свой английский на новый уровень. 
                  Вы научитесь свободно общаться на различные темы.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Уверенное общение в разных ситуациях",
                    "Углубленная грамматика",
                    "Расширенный словарный запас",
                    "Бизнес-английский",
                    "16 тематических модулей",
                    "32 практических занятия",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-8">
                  <EnrollmentForm level="intermediate">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Записаться
                    </Button>
                  </EnrollmentForm>
                  <Button variant="outline" size="lg">
                    Подробная программа
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col gap-4">
                <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                  <p className="text-purple-800 font-semibold mb-1">Длительность</p>
                  <p className="text-slate-700">4 месяца (48 часов)</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                  <p className="text-purple-800 font-semibold mb-1">Формат</p>
                  <p className="text-slate-700">Онлайн-занятия 2 раза в неделю</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                  <p className="text-purple-800 font-semibold mb-1">Результат</p>
                  <p className="text-slate-700">Свободное общение, сертификат B1-B2</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">Продвинутый (C1-C2)</h3>
                <p className="text-slate-600 mb-6">
                  Для тех, кто стремится к совершенству и хочет говорить как носитель языка. 
                  Сложные грамматические конструкции, идиомы и профессиональная лексика.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Глубокое понимание языковых нюансов",
                    "Академический и профессиональный английский",
                    "Идиомы и культурные особенности",
                    "Подготовка к международным экзаменам",
                    "20 тематических модулей",
                    "40 практических занятий",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-8">
                  <EnrollmentForm level="advanced">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Записаться
                    </Button>
                  </EnrollmentForm>
                  <Button variant="outline" size="lg">
                    Подробная программа
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-col gap-4">
                <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                  <p className="text-purple-800 font-semibold mb-1">Длительность</p>
                  <p className="text-slate-700">5 месяцев (60 часов)</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                  <p className="text-purple-800 font-semibold mb-1">Формат</p>
                  <p className="text-slate-700">Онлайн-занятия 2 раза в неделю</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                  <p className="text-purple-800 font-semibold mb-1">Результат</p>
                  <p className="text-slate-700">Владение языком на уровне носителя</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CourseInfo;