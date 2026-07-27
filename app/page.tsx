export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="max-w-xl rounded-2xl bg-white p-8 text-center shadow-card">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          School IDE
        </h1>

        <p className="text-gray-600">
          Studijní platforma nové generace s AI pomocníkem,
          poznámkami, testy, úkoly a organizací učení.
        </p>

        <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm text-blue-700">
          Základ aplikace byl úspěšně vytvořen.
        </div>
      </div>
    </main>
  );
}
