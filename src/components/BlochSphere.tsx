import React, { useEffect, useRef, useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BlochSphere = () => {
  const { t } = useLanguage();
  return(
    <div className="w-full">
      {/* Title Section */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {t('blochSphere.title')}
        </h2>
        <p className="text-sm text-gray-600">
          {t('blochSphere.subtitle')}
        </p>
      </div>
      
      {/* Iframe Container */}
      <div className="w-full">
        <iframe
          src="/BlochSphere/main.html"
          width="100%"
          height="450vh"
          style={{ border: '1px solid #ccc' }}
          title="Bloch Sphere"
        ></iframe>
      </div>
    </div>
  )
}

export default BlochSphere;