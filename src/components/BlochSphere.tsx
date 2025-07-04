import React, { useEffect, useRef, useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

const BlochSphere = () => {
  return(
    <div>
      <iframe
        src="/BlochSphere/main.html"
        width="100%"
        height="450vh"
        style={{ border: '1px solid #ccc' }}
        title="Bloch Sphere"
      ></iframe>
    </div>
  )
}

export default BlochSphere;