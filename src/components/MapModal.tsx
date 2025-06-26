
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { X } from 'lucide-react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MapModal = ({ isOpen, onClose }: MapModalProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!isOpen || !mapContainer.current) return;

    // Initialize map with your Mapbox token
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXRjaHltaW5pb25tZXNzZW5nZXIiLCJhIjoiY21jY3FlNDU5MDJvNDJxcXowNWthYW1yeSJ9.elsk_KW_fO_RMm5C4Acmig';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [28.2833, -15.4167], // Lusaka coordinates
      zoom: 11
    });

    // Add marker for Lusaka
    new mapboxgl.Marker({ color: '#22c55e' })
      .setLngLat([28.2833, -15.4167])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>CLINZED Service Area</h3><p>Lusaka, Zambia</p>'))
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">CLINZED Service Areas - Lusaka</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div ref={mapContainer} className="flex-1 rounded-b-lg" style={{ height: 'calc(100% - 60px)' }} />
      </div>
    </div>
  );
};

export default MapModal;
