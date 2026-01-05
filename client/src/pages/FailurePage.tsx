import { XCircleIcon } from 'lucide-react';
import React from 'react';

const FailurePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <XCircleIcon className="h-20 w-20 text-red-500 mx-auto mb-6" />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Failed ❌
        </h1>

        

        <div className="bg-red-100 text-red-700 rounded-lg p-4 mb-6">
          <p className="text-sm">No money was deducted from your account.</p>
        </div>

        <div className="flex gap-4">
          

          <button
            onClick={() => (window.location.href = '/')}
            className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-lg transition">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailurePage;
