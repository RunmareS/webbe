// app/profile/page.tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Mail, Globe, Users, Heart, Settings } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Card className="max-w-3xl mx-auto mt-10 p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/Lash.png" alt="Иван Иванов" />
          <AvatarFallback>И</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Иван Иванов</h2>
          <p className="text-gray-500">@ivan_ivanov</p>
          <p className="mt-2 text-gray-700">
            Frontend разработчик с опытом работы в React/Next.js. Люблю писать чистый и поддерживаемый код.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <Button variant="outline">Редактировать профиль</Button>
          <Button variant="outline">Поделиться</Button>
          <Button variant="ghost"><Settings /></Button>
        </div>
      </Card>

      <Card className="max-w-3xl mx-auto mt-6 p-4 flex justify-between text-center">
        <div>
          <h3 className="font-bold">123</h3>
          <div className="flex items-center justify-center space-x-1 text-gray-500">
            <Users size={16} />
            <span>Публикации</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold">456</h3>
          <div className="flex items-center justify-center space-x-1 text-gray-500">
            <Users size={16} />
            <span>Подписчики</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold">78</h3>
          <div className="flex items-center justify-center space-x-1 text-gray-500">
            <Users size={16} />
            <span>Подписки</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold">910</h3>
          <div className="flex items-center justify-center space-x-1 text-gray-500">
            <Heart size={16} />
            <span>Лайки</span>
          </div>
        </div>
      </Card>

      <Card className="max-w-3xl mx-auto mt-6 p-6">
        <h3 className="text-xl font-bold mb-2">О себе</h3>
        <p className="text-gray-700 mb-4">
          Я увлеченный разработчик с опытом работы более 5 лет. Люблю создавать удобные интерфейсы и писать чистый код.  
          Участвовал в нескольких крупных проектах с использованием React, Next.js и Tailwind CSS.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Next.js</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Tailwind</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">TypeScript</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">UI/UX</span>
        </div>

        <div className="flex flex-col gap-2 text-gray-600">
          <div className="flex items-center gap-2"><Mail size={16} /> ivan@mail.com</div>
          <div className="flex items-center gap-2"><Globe size={16} /> www.ivan-site.com</div>
          <div className="flex items-center gap-2"><Users size={16} /> Зарегистрирован: Январь 2022</div>
        </div>
      </Card>

      <Card className="max-w-3xl mx-auto mt-6 p-4">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">Все посты</TabsTrigger>
            <TabsTrigger value="media">Медиа</TabsTrigger>
            <TabsTrigger value="docs">Документы</TabsTrigger>
            <TabsTrigger value="fav">Избранное</TabsTrigger>
          </TabsList>
          <TabsContent value="all">Контент всех постов...</TabsContent>
          <TabsContent value="media">Медиа...</TabsContent>
          <TabsContent value="docs">Документы...</TabsContent>
          <TabsContent value="fav">Избранное...</TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}