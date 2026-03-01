export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Добро пожаловать на платформу!</h1>
      <p className="text-gray-600">
        Перейдите в <a href="/profile" className="text-blue-500 underline">профиль</a>
      </p>
    </div>
  );
}