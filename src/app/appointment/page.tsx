import { VoiceInterface } from '@/components/voice-chat/VoiceInterface';
import { env } from '@/config/env';

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Schedule an Appointment</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <VoiceInterface apiKey={env.VAPI_API_KEY || ''} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Care</h2>
              <p className="text-gray-600 mb-4">
                For dental emergencies outside of regular hours, please call our 24/7 emergency line:
              </p>
              <p className="text-lg font-medium text-blue-600">(555) 123-4567</p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Insurance Information</h2>
            <p className="text-gray-600 mb-4">
              We accept most major dental insurance plans. Please have your insurance information ready
              when scheduling your appointment.
            </p>
            <p className="text-gray-600">
              For questions about coverage and payment options, feel free to ask our AI assistant or
              contact our office directly.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
