export default function About() {
    return (
      <main className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen flex flex-col items-center py-12">
        <div className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md text-center">
          <h1 className="font-extrabold text-3xl text-gray-700 mb-6">About Us</h1>
          <p className="text-lg text-gray-600">
            This is a simple AI-powered to-do list app created to make task management easy and intuitive.
          </p>
        </div>
      </main>
    );
  }