import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to SmileCare AI Assistant</h1>
          <p className="text-xl text-gray-600">Your 24/7 dental care companion</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            href="/appointment"
            className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Schedule Appointment</h2>
            <p className="text-gray-600">Book your dental appointment with our AI assistant</p>
          </Link>

          <Link
            href="/dashboard"
            className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Patient Dashboard</h2>
            <p className="text-gray-600">View your appointments and dental records</p>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Schedule appointments anytime, day or night</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple voice-based appointment scheduling</p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Smart Assistant</h3>
              <p className="text-gray-600">AI-powered help for all your dental queries</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
