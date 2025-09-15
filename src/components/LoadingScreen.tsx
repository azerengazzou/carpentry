import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-amber-50 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-stone-800">Chargement...</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;