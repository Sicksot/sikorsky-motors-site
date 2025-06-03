
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Sikorsky Motors</h1>
        <p className="text-xl text-gray-700">Движение в будущее с отечественными бесколлекторными моторами</p>
        <Button className="mt-4 text-lg">Связаться с нами</Button>
      </section>

      {/* Products Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Продукты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <Card key={id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <h3 className="text-xl font-medium">Мотор {id}</h3>
                <p className="text-gray-600 mt-2">Усиленный корпус, отечественные компоненты, высокая надёжность.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">Сервисное обслуживание</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-700">Мы предлагаем диагностику, ремонт и поддержку для всех наших моторов. Быстрая связь с инженером и прозрачность процессов.</p>
      </section>

      {/* Applications Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Применение</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          {['Агродроны', 'Геодезия', 'Аэрофотосъёмка', 'Другие отрасли'].map((field, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <p className="text-lg font-medium">{field}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Наша команда</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Алексей — продакт-менеджер", "Иван — тех. директор", "Константин — специалист", "Артём — 3D-инженер", "Мария — дизайнер"]
            .map((member, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <p className="text-md font-medium">{member}</p>
                </CardContent>
              </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-6 max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Свяжитесь с нами</h2>
        <form className="space-y-4">
          <Input placeholder="Ваше имя" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Сообщение" />
          <Button className="w-full">Отправить</Button>
        </form>
        <div className="text-center text-gray-600">
          <p>Телефон: 8 952 163 01 81</p>
          <p>Email: fominamaria952@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
