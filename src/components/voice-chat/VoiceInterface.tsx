import { useState, useEffect } from 'react';
import { VapiClient } from '@vapi-ai/web';
import { env } from '@/config/env';

interface VoiceInterfaceProps {
  apiKey: string;
}

interface VapiCall {
  start: () => void;
  stop: () => void;
  onError: (callback: (error: any) => void) => void;
  onDataReceived: (callback: (data: any) => void) => void;
}

export function VoiceInterface({ apiKey }: VoiceInterfaceProps) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!env.VAPI_API_KEY || !env.VAPI_ASSISTANT_ID) {
      setError('Missing required environment variables. Please check your configuration.');
      return;
    }
  }, []);

  const startCall = async () => {
    try {
      setError(null);
      const client = new VapiClient(apiKey);

      const config = {
        assistantId: env.VAPI_ASSISTANT_ID,
        userMessage: 'Hi, I would like to schedule a dental appointment.',
      };

      const call = await client.start(config);

      call.onError((error) => {
        console.error('Call error:', error);
        setError('An error occurred during the call. Please try again.');
        setIsCallActive(false);
      });

      call.onDataReceived((data) => {
        console.log('Received data:', data);
      });

      setIsCallActive(true);
    } catch (error) {
      console.error('Failed to start call:', error);
      setError('Failed to start the call. Please try again.');
      setIsCallActive(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Voice Assistant</h2>
        <button
          onClick={startCall}
          disabled={isCallActive}
          className={`px-4 py-2 rounded-md ${isCallActive
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium transition-colors`}
        >
          {isCallActive ? 'Call in Progress...' : 'Start Call'}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <div className="p-4 bg-gray-50 rounded-md">
        <p className="text-gray-600">
          {isCallActive
            ? 'Speak naturally to the assistant to schedule your appointment.'
            : 'Click the Start Call button to begin scheduling your appointment with our AI assistant.'}
        </p>
      </div>
    </div>
  );
}
