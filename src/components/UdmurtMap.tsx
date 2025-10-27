import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Icon from '@/components/ui/icon';

const landmarks = [
  { 
    name: 'Архитектурно-этнографический музей «Лудорвай»', 
    location: 'с. Лудорвай', 
    type: 'Музей',
    lat: 56.9167,
    lng: 53.4333,
    description: 'Музей под открытым небом с традиционными удмуртскими постройками'
  },
  { 
    name: 'Национальный музей Удмуртской Республики', 
    location: 'г. Ижевск', 
    type: 'Музей',
    lat: 56.8519,
    lng: 53.2108,
    description: 'Крупнейший музей истории и культуры Удмуртии'
  },
  { 
    name: 'Свято-Михайловский собор', 
    location: 'г. Ижевск', 
    type: 'Храм',
    lat: 56.8498,
    lng: 53.2045,
    description: 'Кафедральный православный собор, памятник архитектуры XIX века'
  },
  { 
    name: 'Усадьба Тол Бабая', 
    location: 'д. Шаркан', 
    type: 'Культурный объект',
    lat: 57.4167,
    lng: 53.6833,
    description: 'Резиденция удмуртского Деда Мороза'
  },
  { 
    name: 'Родник «Святой ключ»', 
    location: 'с. Дебёсы', 
    type: 'Природный объект',
    lat: 58.0833,
    lng: 53.8333,
    description: 'Святой источник с целебной водой'
  },
  { 
    name: 'Чегандинские пещеры', 
    location: 'с. Чеганда', 
    type: 'Природный объект',
    lat: 56.5167,
    lng: 52.9500,
    description: 'Карстовые пещеры с подземными озёрами'
  }
];

const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function UdmurtMap() {
  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
      <MapContainer
        center={[57.0, 53.2]}
        zoom={7}
        className="w-full h-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {landmarks.map((landmark, index) => (
          <Marker 
            key={index} 
            position={[landmark.lat, landmark.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg mb-1">{landmark.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <Icon name="MapPin" size={14} className="inline mr-1" />
                  {landmark.location}
                </p>
                <p className="text-sm mb-2">
                  <Icon name="Tag" size={14} className="inline mr-1" />
                  {landmark.type}
                </p>
                <p className="text-sm">{landmark.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
