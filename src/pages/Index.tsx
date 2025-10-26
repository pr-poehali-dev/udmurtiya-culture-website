import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('history');
  const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);

  const historyTimeline = [
    { year: '1552', event: 'Включение Удмуртии в состав Российского государства' },
    { year: '1774', event: 'Участие удмуртов в восстании Емельяна Пугачёва' },
    { year: '1920', event: 'Образование Вотской автономной области' },
    { year: '1932', event: 'Преобразование в Удмуртскую АССР' },
    { year: '1991', event: 'Становление Удмуртской Республики' },
  ];

  const culturalElements = [
    { title: 'Народные промыслы', description: 'Ткачество, вышивка, плетение из бересты', icon: 'Paintbrush' },
    { title: 'Музыкальная культура', description: 'Крезь — удмуртский гусли, народные песни', icon: 'Music' },
    { title: 'Литература', description: 'Кузебай Герд, Ашальчи Оки — классики удмуртской литературы', icon: 'BookOpen' },
    { title: 'Изобразительное искусство', description: 'Живопись, скульптура, декоративно-прикладное искусство', icon: 'Palette' },
  ];

  const traditions = [
    { title: 'Гербер', description: 'Народный праздник встречи весны и окончания посевных работ', season: 'Весна' },
    { title: 'Туно', description: 'Летний праздник сенокоса с традиционными играми', season: 'Лето' },
    { title: 'Сӥзьыл юон', description: 'Осенний праздник урожая и благодарения', season: 'Осень' },
    { title: 'Толсур', description: 'Зимний праздник с гаданиями и обрядами', season: 'Зима' },
  ];

  const landmarks = [
    { 
      name: 'Архитектурно-этнографический музей «Лудорвай»', 
      location: 'с. Лудорвай', 
      type: 'Музей',
      x: 25,
      y: 45,
      description: 'Уникальный музей под открытым небом с образцами удмуртского зодчества'
    },
    { 
      name: 'Свято-Михайловский собор', 
      location: 'г. Ижевск', 
      type: 'Храм',
      x: 50,
      y: 50,
      description: 'Величественный православный храм, памятник архитектуры XIX века'
    },
    { 
      name: 'Национальный музей УР им. Кузебая Герда', 
      location: 'г. Ижевск', 
      type: 'Музей',
      x: 48,
      y: 52,
      description: 'Главный музей республики с богатой коллекцией этнографии и истории'
    },
    { 
      name: 'Усадьба П.И. Чайковского в Воткинске', 
      location: 'г. Воткинск', 
      type: 'Музей',
      x: 70,
      y: 60,
      description: 'Дом-музей великого русского композитора, место его рождения'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-primary bg-card shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-accent rounded-sm flex items-center justify-center">
              <Icon name="Landmark" className="text-accent-foreground" size={32} />
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-primary">
              Удмуртия
            </h1>
          </div>
          <p className="text-center text-muted-foreground text-lg font-merriweather italic max-w-2xl mx-auto">
            Земля древних традиций, богатой культуры и исторического наследия
          </p>
        </div>
      </header>

      <nav className="bg-secondary border-b-2 border-border sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2 md:gap-6 py-4 flex-wrap">
            {[
              { id: 'history', label: 'История', icon: 'ScrollText' },
              { id: 'culture', label: 'Культура', icon: 'Palette' },
              { id: 'traditions', label: 'Традиции', icon: 'Sparkles' },
              { id: 'landmarks', label: 'Достопримечательности', icon: 'MapPin' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-accent text-accent-foreground shadow-md scale-105'
                    : 'hover:bg-muted'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span className="font-merriweather font-semibold text-sm md:text-base">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'history' && (
          <div className="animate-fade-in">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Историческая хроника
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {historyTimeline.map((item, index) => (
                <Card key={index} className="border-2 border-border hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="bg-accent text-accent-foreground px-4 py-2 rounded font-cormorant text-2xl font-bold min-w-[100px] text-center">
                        {item.year}
                      </div>
                      <p className="text-lg font-merriweather leading-relaxed flex-1 pt-1">{item.event}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'culture' && (
          <div className="animate-fade-in">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Культурное наследие
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {culturalElements.map((item, index) => (
                <Card key={index} className="border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-accent text-accent-foreground p-3 rounded">
                        <Icon name={item.icon as any} size={28} />
                      </div>
                      <h3 className="font-cormorant text-2xl font-bold text-primary flex-1">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-merriweather leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'traditions' && (
          <div className="animate-fade-in">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Народные традиции
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {traditions.map((item, index) => (
                <Card key={index} className="border-2 border-border hover:border-accent hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-cormorant text-3xl font-bold text-primary">{item.title}</h3>
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm font-semibold">
                        {item.season}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-merriweather leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'landmarks' && (
          <div className="animate-fade-in">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Карта достопримечательностей
            </h2>
            
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
              <div className="relative bg-card border-4 border-primary rounded-lg p-8 aspect-square">
                <div className="absolute inset-0 m-8 bg-secondary/30 rounded border-2 border-border">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <text x="50" y="15" textAnchor="middle" className="fill-primary font-cormorant text-[4px] font-bold">
                      Удмуртская Республика
                    </text>
                    
                    <path 
                      d="M 20,30 L 80,30 L 85,50 L 75,70 L 25,75 L 15,50 Z" 
                      className="fill-muted/50 stroke-primary stroke-[0.5]"
                    />
                    
                    {landmarks.map((landmark, index) => (
                      <g key={index}>
                        <circle
                          cx={landmark.x}
                          cy={landmark.y}
                          r={selectedLandmark === index ? '3' : '2'}
                          className={`cursor-pointer transition-all ${
                            selectedLandmark === index 
                              ? 'fill-accent stroke-accent-foreground stroke-[0.5]' 
                              : 'fill-accent hover:fill-accent/80 stroke-primary stroke-[0.3]'
                          }`}
                          onClick={() => setSelectedLandmark(selectedLandmark === index ? null : index)}
                        />
                        {selectedLandmark === index && (
                          <circle
                            cx={landmark.x}
                            cy={landmark.y}
                            r="4"
                            className="fill-none stroke-accent stroke-[0.5] animate-ping"
                          />
                        )}
                      </g>
                    ))}
                  </svg>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-card/95 border border-border rounded p-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Info" size={16} className="text-muted-foreground" />
                    <span className="font-merriweather text-muted-foreground">
                      Нажмите на точку для подробностей
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {landmarks.map((item, index) => (
                  <Card 
                    key={index} 
                    className={`border-2 cursor-pointer transition-all duration-300 ${
                      selectedLandmark === index 
                        ? 'border-accent shadow-2xl scale-105' 
                        : 'border-border hover:border-accent/50 hover:shadow-xl'
                    }`}
                    onClick={() => setSelectedLandmark(selectedLandmark === index ? null : index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded transition-colors ${
                          selectedLandmark === index 
                            ? 'bg-accent text-accent-foreground' 
                            : 'bg-secondary'
                        }`}>
                          <Icon name="MapPin" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-cormorant text-2xl font-bold text-primary mb-1">
                            {item.name}
                          </h3>
                          <p className="text-muted-foreground font-merriweather text-sm mb-2">
                            {item.location}
                          </p>
                          {selectedLandmark === index && (
                            <p className="text-foreground font-merriweather leading-relaxed mt-3 animate-fade-in">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${
                          selectedLandmark === index 
                            ? 'bg-accent text-accent-foreground' 
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
          </div>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground mt-16 py-8 border-t-4 border-accent">
        <div className="container mx-auto px-4 text-center">
          <p className="font-cormorant text-2xl mb-2">Культура и история Удмуртии</p>
          <p className="font-merriweather text-sm opacity-90">Сохраняя наследие для будущих поколений</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;