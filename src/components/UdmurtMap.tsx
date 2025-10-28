import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const landmarks = [
  { 
    name: 'Архитектурно-этнографический музей «Лудорвай»', 
    location: 'с. Лудорвай', 
    type: 'Музей',
    x: 42,
    y: 28,
    description: 'Музей под открытым небом с традиционными удмуртскими постройками'
  },
  { 
    name: 'Национальный музей Удмуртской Республики', 
    location: 'г. Ижевск', 
    type: 'Музей',
    x: 50,
    y: 50,
    description: 'Крупнейший музей истории и культуры Удмуртии'
  },
  { 
    name: 'Свято-Михайловский собор', 
    location: 'г. Ижевск', 
    type: 'Храм',
    x: 51,
    y: 49,
    description: 'Кафедральный православный собор, памятник архитектуры XIX века'
  },
  { 
    name: 'Усадьба Тол Бабая', 
    location: 'д. Шаркан', 
    type: 'Культурный объект',
    x: 30,
    y: 35,
    description: 'Резиденция удмуртского Деда Мороза'
  },
  { 
    name: 'Родник «Святой ключ»', 
    location: 'с. Дебёсы', 
    type: 'Природный объект',
    x: 25,
    y: 20,
    description: 'Святой источник с целебной водой'
  },
  { 
    name: 'Чегандинские пещеры', 
    location: 'с. Чеганда', 
    type: 'Природный объект',
    x: 65,
    y: 70,
    description: 'Карстовые пещеры с подземными озёрами'
  },
  { 
    name: 'Нечкинский национальный парк', 
    location: 'Воткинский район', 
    type: 'Природный объект',
    x: 23,
    y: 48,
    description: 'Национальный парк с живописными пейзажами'
  },
  { 
    name: 'Музей-усадьба П.И. Чайковского', 
    location: 'г. Воткинск', 
    type: 'Музей',
    x: 70,
    y: 60,
    description: 'Дом-музей великого композитора'
  }
];

export default function UdmurtMap() {
  const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);
  const [hoveredLandmark, setHoveredLandmark] = useState<number | null>(null);

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border-4 border-primary/20 rounded-2xl p-8 aspect-square shadow-2xl">
        <div className="absolute inset-0 m-8">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <text x="50" y="8" textAnchor="middle" className="fill-primary font-cormorant text-[3px] font-bold">
              Удмуртская Республика
            </text>
            
            <defs>
              <pattern id="forest" patternUnits="userSpaceOnUse" width="2" height="2">
                <circle cx="1" cy="1" r="0.3" className="fill-green-700/20" />
              </pattern>
              <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.3 }} />
                <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            
            <path 
              d="M 20,25 L 80,25 L 85,50 L 75,75 L 25,80 L 15,50 Z" 
              className="fill-muted/30 stroke-primary stroke-[0.5]"
            />
            
            <rect x="16" y="22" width="40" height="35" fill="url(#forest)" opacity="0.6" />
            <rect x="56" y="25" width="28" height="30" fill="url(#forest)" opacity="0.6" />
            
            <path 
              d="M 10,48 Q 25,50 40,48 Q 55,46 70,49 Q 80,50 90,52" 
              fill="url(#waterGradient)"
              className="stroke-blue-500/70 stroke-[1.2]"
            />
            <path 
              d="M 10,48 Q 25,50 40,48 Q 55,46 70,49 Q 80,50 90,52 L 90,54 Q 80,52 70,51 Q 55,48 40,50 Q 25,52 10,50 Z" 
              fill="url(#waterGradient)"
              opacity="0.4"
            />
            <text x="60" y="44" className="fill-blue-700 dark:fill-blue-400 text-[2.5px] font-bold font-cormorant">Река Кама</text>
            
            <g>
              <circle cx="50" cy="50" r="2" className="fill-red-600 stroke-red-900 stroke-[0.3]" />
              <circle cx="50" cy="50" r="3" className="fill-none stroke-red-600/40 stroke-[0.5] animate-pulse" />
              <text x="50" y="56" textAnchor="middle" className="fill-primary text-[3.2px] font-bold">ИЖЕВСК</text>
              <text x="50" y="58.5" textAnchor="middle" className="fill-muted-foreground text-[1.3px]">столица</text>
            </g>
            
            <circle cx="70" cy="60" r="1.3" className="fill-primary/80 stroke-primary stroke-[0.2]" />
            <text x="70" y="64" textAnchor="middle" className="fill-primary text-[2.2px] font-semibold">Воткинск</text>
            
            <circle cx="35" cy="30" r="1.3" className="fill-primary/80 stroke-primary stroke-[0.2]" />
            <text x="35" y="27" textAnchor="middle" className="fill-primary text-[2.2px] font-semibold">Глазов</text>
            
            <circle cx="65" cy="68" r="1.3" className="fill-primary/80 stroke-primary stroke-[0.2]" />
            <text x="65" y="72" textAnchor="middle" className="fill-primary text-[2.2px] font-semibold">Сарапул</text>
            
            {landmarks.map((landmark, index) => (
              <g 
                key={index}
                className="cursor-pointer transition-all"
                onMouseEnter={() => setHoveredLandmark(index)}
                onMouseLeave={() => setHoveredLandmark(null)}
                onClick={() => setSelectedLandmark(selectedLandmark === index ? null : index)}
              >
                <circle
                  cx={landmark.x}
                  cy={landmark.y}
                  r={selectedLandmark === index || hoveredLandmark === index ? '2.5' : '1.8'}
                  className={`transition-all ${
                    selectedLandmark === index 
                      ? 'fill-accent stroke-accent-foreground stroke-[0.4]' 
                      : hoveredLandmark === index
                      ? 'fill-accent/80 stroke-accent stroke-[0.3]'
                      : 'fill-accent/60 stroke-primary stroke-[0.25]'
                  }`}
                />
                {(selectedLandmark === index || hoveredLandmark === index) && (
                  <>
                    <circle
                      cx={landmark.x}
                      cy={landmark.y}
                      r="3.5"
                      className="fill-none stroke-accent/60 stroke-[0.4] animate-ping"
                    />
                    <text 
                      x={landmark.x} 
                      y={landmark.y - 4} 
                      textAnchor="middle" 
                      className="fill-primary text-[1.8px] font-semibold pointer-events-none"
                    >
                      {landmark.name.split(' ')[0]}
                    </text>
                  </>
                )}
              </g>
            ))}
            
            <rect x="3" y="12" width="18" height="15" className="fill-card/95 stroke-border stroke-[0.3]" rx="0.5" />
            <text x="12" y="14.5" textAnchor="middle" className="fill-primary text-[1.5px] font-bold">Легенда</text>
            <circle cx="5" cy="16.5" r="0.5" className="fill-red-600" />
            <text x="6.5" y="17" className="fill-foreground text-[1.1px]">Столица</text>
            <circle cx="5" cy="19" r="0.5" className="fill-primary/80" />
            <text x="6.5" y="19.5" className="fill-foreground text-[1.1px]">Города</text>
            <circle cx="5" cy="21.5" r="0.5" className="fill-accent/60" />
            <text x="6.5" y="22" className="fill-foreground text-[1.1px]">Достоприм.</text>
            <line x1="4.5" y1="23.5" x2="19.5" y2="23.5" className="stroke-blue-500/70 stroke-[0.4]" />
            <text x="12" y="25.5" textAnchor="middle" className="fill-blue-700 dark:fill-blue-400 text-[1px]">Реки</text>
          </svg>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
          <div className="flex items-center gap-2 text-sm">
            <Icon name="Info" size={16} className="text-muted-foreground flex-shrink-0" />
            <span className="font-merriweather text-muted-foreground text-xs">
              Наведите или нажмите на точку для просмотра информации
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {landmarks.map((item, index) => (
          <Card 
            key={index} 
            className={`border-2 cursor-pointer transition-all duration-300 ${
              selectedLandmark === index 
                ? 'border-accent shadow-2xl scale-[1.02]' 
                : hoveredLandmark === index
                ? 'border-accent/50 shadow-xl'
                : 'border-border hover:border-accent/30 hover:shadow-lg'
            }`}
            onClick={() => setSelectedLandmark(selectedLandmark === index ? null : index)}
            onMouseEnter={() => setHoveredLandmark(index)}
            onMouseLeave={() => setHoveredLandmark(null)}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg transition-all duration-300 ${
                  selectedLandmark === index 
                    ? 'bg-accent text-accent-foreground shadow-md' 
                    : 'bg-secondary'
                }`}>
                  <Icon name="MapPin" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-cormorant text-xl font-bold text-primary mb-1">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground font-merriweather text-sm mb-2 flex items-center gap-1">
                    <Icon name="Navigation" size={12} className="flex-shrink-0" />
                    {item.location}
                  </p>
                  {(selectedLandmark === index || hoveredLandmark === index) && (
                    <p className="text-foreground font-merriweather text-sm leading-relaxed mt-3 animate-fade-in">
                      {item.description}
                    </p>
                  )}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedLandmark === index 
                    ? 'bg-accent text-accent-foreground shadow-md' 
                    : 'bg-secondary text-secondary-foreground'
                }`}>
                  {item.type}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
