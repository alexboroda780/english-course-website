
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Users, Clock, Award, MessageCircle, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-purple-600" />,
      title: "Носители языка",
      description: "Практика с преподавателями из Великобритании и США"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Малые группы",
      description: "Максимум 5 человек в группе для эффективного обучения"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "Гибкий график",
      description: "Занятия в удобное время, включая вечерние часы и выходные"
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: "Сертификация",
      description: "Подготовка к международным экзаменам IELTS, TOEFL, Cambridge"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-purple-600" />,
      title: "Разговорные клубы",
      description: "Еженедельные встречи для практики разговорного английского"
    },
    {
      icon: <Headphones className="h-6 w-6 text-purple-600" />,
      title: "Аудио материалы",
      description: "Доступ к библиотеке аудиокниг и подкастов для практики"
    }
  ];

  return (
    <section className="py-16 bg-white" id="преимущества">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему наш курс английского эффективен</h2>
          <p className="text-slate-600 text-lg">
            Комплексный подход к обучению, индивидуальный план и современные методики
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
