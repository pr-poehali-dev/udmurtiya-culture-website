import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('history');
  const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);

  const historyTimeline = [
    { 
      year: 'IX-XI вв.', 
      event: 'Формирование удмуртского этноса',
      description: 'На территории Прикамья складывается финно-угорское население. Археологические находки свидетельствуют о развитом земледелии, скотоводстве и металлургии.',
      icon: 'Users',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/5e2fbddb-9399-4cc8-b5a7-494782b701c4.jpg'
    },
    { 
      year: 'XIII-XIV вв.', 
      event: 'Под властью Золотой Орды',
      description: 'Удмуртские земли входят в состав Золотой Орды. Несмотря на иго, сохраняются местные традиции и язык.',
      icon: 'Castle',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/525be587-6ce5-4a83-a344-36cf55ea0280.jpg'
    },
    { 
      year: '1489', 
      event: 'Присоединение к Московскому государству',
      description: 'После падения Казанского ханства северные удмурты добровольно входят в состав России. Южные удмурты присоединяются в 1552 году после взятия Казани.',
      icon: 'Flag',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/1310a6cf-a175-4515-893d-10e961689858.jpg'
    },
    { 
      year: '1774', 
      event: 'Восстание Емельяна Пугачёва',
      description: 'Удмурты активно участвуют в крестьянской войне. Многие деревни поддерживают восставших против крепостного гнёта.',
      icon: 'Flame',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/02e15eed-3ce9-45be-b574-6edb665ea8dd.jpg'
    },
    { 
      year: '1807', 
      event: 'Основание Ижевского оружейного завода',
      description: 'По указу императора Александра I основан железоделательный завод. Начало промышленной истории региона. Вокруг завода формируется поселение.',
      icon: 'Factory',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/029d0af1-ea79-4bb1-8b4b-cf5f74d17749.jpg'
    },
    { 
      year: '1835', 
      event: 'Ижевск получает статус города',
      description: 'Заводской посёлок официально становится городом. Развивается оружейное производство, растёт население.',
      icon: 'Building',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/d1bbd5e5-18e8-416c-9e51-3c48c33ae01e.jpg'
    },
    { 
      year: '1918', 
      event: 'Ижевско-Воткинское восстание',
      description: 'Крупнейшее антибольшевистское выступление рабочих Ижевского и Воткинского заводов. Восстание подавлено Красной Армией.',
      icon: 'Swords',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/3fe3f9e5-40dd-4826-a72f-01b80ac1175a.jpg'
    },
    { 
      year: '1920', 
      event: 'Образование Вотской автономной области',
      description: '4 ноября создана автономия в составе РСФСР с центром в Ижевске. Начало национально-государственного строительства.',
      icon: 'Map',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/a3230531-2d98-4d5d-b2bc-07aa92fd68d2.jpg'
    },
    { 
      year: '1932', 
      event: 'Преобразование в Удмуртскую АССР',
      description: 'Область получает статус автономной республики. Вотяки официально переименованы в удмуртов.',
      icon: 'Award',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/afd115ca-e438-48b1-8ca1-c5d722859d4f.jpg'
    },
    { 
      year: '1941-1945', 
      event: 'Годы Великой Отечественной войны',
      description: 'В республику эвакуировано более 50 предприятий. Ижевск становится крупнейшим центром военной промышленности. На фронт призваны более 260 тысяч человек.',
      icon: 'Shield',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/2f3e41a4-0c31-447d-9d4f-90c8b24ddb8a.jpg'
    },
    { 
      year: '1947', 
      event: 'Михаил Калашников создаёт АК-47',
      description: 'На Ижевском заводе разработан легендарный автомат Калашникова. Оружие становится символом города и страны.',
      icon: 'Target',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/db3dd18d-f87e-4416-9cd3-82ccd69399d4.jpg'
    },
    { 
      year: '1985', 
      event: 'Строительство метрополитена в Ижевске',
      description: 'Начато строительство первого в Удмуртии метро. Проект заморожен, сохранились незавершённые тоннели.',
      icon: 'Train',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/6512f9d3-fc7e-4bfa-8694-8c9802634b6d.jpg'
    },
    { 
      year: '1991', 
      event: 'Становление Удмуртской Республики',
      description: '20 сентября УАССР преобразована в Удмуртскую Республику в составе РФ. Принята Декларация о государственном суверенитете.',
      icon: 'Star',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/0d1aa44c-2648-46d3-88ef-ec709e45171e.jpg'
    },
    { 
      year: '2007', 
      event: 'Восстановление Александро-Невского собора',
      description: 'После многолетней реставрации открыт главный храм Ижевска, разрушенный в советское время.',
      icon: 'Church',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/eec3ba94-cbe5-4e6d-a1d9-11e9edfe7766.jpg'
    },
    { 
      year: '2020', 
      event: '100-летие Удмуртской государственности',
      description: 'Юбилейный год. Республика отмечает век со дня образования автономии. Современная Удмуртия — промышленный и культурный регион России.',
      icon: 'PartyPopper',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/7f8b8247-e240-483c-9eaf-d0841a221c64.jpg'
    },
  ];

  const culturalElements = [
    { 
      title: 'Народные промыслы', 
      description: 'Ткачество, вышивка, плетение из бересты. Удмуртские мастера создают удивительные узоры на тканях, используя традиционные техники, передаваемые из поколения в поколение. Плетение из бересты — особое искусство создания утвари и украшений.', 
      icon: 'Paintbrush',
      details: ['Традиционная вышивка крестом', 'Узорное ткачество на кроснах', 'Изделия из бересты и лыка']
    },
    { 
      title: 'Музыкальная культура', 
      description: 'Крезь — удмуртский национальный инструмент, похожий на гусли. Народные песни передают древние легенды и обряды. Традиционный фольклор включает свадебные, обрядовые и лирические песни.', 
      icon: 'Music',
      details: ['Крезь — струнный щипковый инструмент', 'Чипчирган — свистулька из глины', 'Народный ансамбль «Италмас»']
    },
    { 
      title: 'Литература', 
      description: 'Кузебай Герд — основоположник удмуртской литературы. Ашальчи Оки — поэтесса, певица удмуртской души. Современная литература на удмуртском языке развивается и сохраняет национальную самобытность.', 
      icon: 'BookOpen',
      details: ['Кузебай Герд — поэт и фольклорист', 'Ашальчи Оки — классик поэзии', 'Флор Васильев — народный писатель']
    },
    { 
      title: 'Изобразительное искусство', 
      description: 'Живопись, графика, скульптура удмуртских художников отражает красоту родного края и национальный колорит. Декоративно-прикладное искусство включает резьбу по дереву, керамику, национальный костюм.', 
      icon: 'Palette',
      details: ['Живопись П.А. Ёлкина', 'Скульптура С.Н. Виноградова', 'Удмуртский национальный костюм']
    },
    { 
      title: 'Театр и кино', 
      description: 'Удмуртский государственный национальный театр — центр театрального искусства. Спектакли на удмуртском и русском языках. Развивается национальное кино, документальные фильмы о культуре.', 
      icon: 'Theater',
      details: ['Удмуртский драмтеатр (основан в 1931)', 'Театр оперы и балета', 'Кинофестиваль финно-угорских народов']
    },
    { 
      title: 'Национальная кухня', 
      description: 'Перепечи — традиционные открытые пироги с различными начинками. Табани — блины из пресного теста. Шаньги, пельняни и другие блюда отражают кулинарное наследие удмуртов.', 
      icon: 'UtensilsCrossed',
      details: ['Перепечи с картофелем и мясом', 'Табани — удмуртские блины', 'Шаньги с творогом и сметаной']
    },
  ];

  const traditions = [
    { 
      title: 'Гербер', 
      description: 'Народный праздник окончания весенних полевых работ. Проводится после завершения посевной. Включает обрядовые песни, хороводы, традиционные игры и общий пир.', 
      season: 'Весна',
      activities: ['Хороводы на природе', 'Обрядовые песни', 'Традиционные игры и состязания']
    },
    { 
      title: 'Туно', 
      description: 'Летний праздник сенокоса, посвящённый началу жатвы. День благодарения природе за урожай. Сопровождается народными гуляниями, песнями и ритуальными угощениями.', 
      season: 'Лето',
      activities: ['Совместный сенокос', 'Народные гулянья', 'Традиционные угощения в поле']
    },
    { 
      title: 'Сӥзьыл юон', 
      description: 'Осенний праздник урожая и благодарения. Время подведения итогов года, благодарности земле. Готовятся блюда из нового урожая, проводятся ярмарки и гулянья.', 
      season: 'Осень',
      activities: ['Ярмарки урожая', 'Благодарственные обряды', 'Приготовление блюд из нового зерна']
    },
    { 
      title: 'Толсур', 
      description: 'Зимний праздник с гаданиями и обрядами. Время рождественско-новогоднего цикла. Молодёжь ходит ряжеными, проводятся гадания на будущее, зажигаются ритуальные костры.', 
      season: 'Зима',
      activities: ['Ряженье и колядки', 'Святочные гадания', 'Зажигание обрядовых костров']
    },
    { 
      title: 'Вӧй', 
      description: 'Праздник окончания полевых работ и завершения хозяйственного года. Проводится осенью. Время семейных и родовых встреч, благодарения предкам.', 
      season: 'Осень',
      activities: ['Семейные моления', 'Угощение предков', 'Родовые собрания']
    },
    { 
      title: 'Быдзым нунал', 
      description: 'Великий день — главный религиозный праздник. Время общения с божествами и духами предков. Включает молитвы, жертвоприношения и ритуальные трапезы.', 
      season: 'Лето',
      activities: ['Священные молитвы', 'Ритуальные подношения', 'Общесельские моления']
    },
  ];

  const landmarks = [
    { 
      name: 'Архитектурно-этнографический музей «Лудорвай»', 
      location: 'с. Лудорвай', 
      type: 'Музей',
      x: 25,
      y: 45,
      description: 'Уникальный музей под открытым небом с образцами удмуртского зодчества. Включает усадьбы XIX-XX веков, мельницу, амбары и культовые сооружения. Проводятся традиционные праздники и мастер-классы.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/d8864123-ea1e-4e12-ba5f-ed530e2ce3a4.jpg'
    },
    { 
      name: 'Свято-Михайловский собор', 
      location: 'г. Ижевск', 
      type: 'Храм',
      x: 50,
      y: 50,
      description: 'Величественный православный храм, памятник архитектуры XIX века. Построен в 1907-1915 годах. Главная святыня — чудотворная икона Божией Матери. Высота колокольни — 62 метра.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/17de1690-d082-4a9a-a610-67c25d7e6e78.jpg'
    },
    { 
      name: 'Национальный музей УР им. Кузебая Герда', 
      location: 'г. Ижевск', 
      type: 'Музей',
      x: 48,
      y: 52,
      description: 'Главный музей республики с богатой коллекцией этнографии и истории. Более 200 тысяч экспонатов. Уникальные археологические находки, предметы быта, национальные костюмы.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/d1b877c1-ff21-41a6-af7b-084c22a4c512.jpg'
    },
    { 
      name: 'Усадьба П.И. Чайковского в Воткинске', 
      location: 'г. Воткинск', 
      type: 'Музей',
      x: 70,
      y: 60,
      description: 'Дом-музей великого русского композитора, место его рождения (1840). Мемориальная экспозиция, концертный зал. Ежегодно проводится международный фестиваль.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/37041cab-5a1c-46a5-bcc8-ed462df8a2fd.jpg'
    },
    { 
      name: 'Ижевский зоопарк', 
      location: 'г. Ижевск', 
      type: 'Зоопарк',
      x: 52,
      y: 48,
      description: 'Один из крупнейших зоопарков Приволжья. Более 200 видов животных. Участвует в программах сохранения редких видов. Площадь — 16 гектаров.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/6862fc1e-88a7-4b58-9827-c97e2990abdd.jpg'
    },
    { 
      name: 'Музей-заповедник «Иднакар»', 
      location: 'г. Глазов', 
      type: 'Музей',
      x: 35,
      y: 30,
      description: 'Археологический комплекс IX-XIII веков. Древнее городище удмуртов. Музей истории Среднего Прикамья. Уникальные находки эпохи средневековья.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/1dd9e2e4-f155-4bb8-bfcc-101c07254c21.jpg'
    },
    { 
      name: 'Нечкинский национальный парк', 
      location: 'Воткинский район', 
      type: 'Природа',
      x: 75,
      y: 55,
      description: 'Природоохранная территория на берегу Камы. Живописные ландшафты, редкие виды растений и животных. Экологические тропы, места отдыха.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/09207f28-36ca-4b52-90f1-e4f01b3054d6.jpg'
    },
    { 
      name: 'Музей истории и культуры Среднего Прикамья', 
      location: 'г. Сарапул', 
      type: 'Музей',
      x: 65,
      y: 65,
      description: 'Один из старейших музеев Удмуртии (основан в 1909). Богатая коллекция по истории края. Купеческая архитектура XIX века.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/f59cbcd5-dc54-4888-a327-e940badbdcfd.jpg'
    },
    { 
      name: 'Парк им. С.М. Кирова', 
      location: 'г. Ижевск', 
      type: 'Парк',
      x: 49,
      y: 51,
      description: 'Главный городской парк культуры и отдыха. Создан в 1930-х годах. Аттракционы, пруд, аллеи. Популярное место семейного отдыха.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/1ee56581-4dc6-4e0e-9a54-f086c557a2bb.jpg'
    },
    { 
      name: 'Александро-Невский собор', 
      location: 'г. Ижевск', 
      type: 'Храм',
      x: 51,
      y: 49,
      description: 'Красивейший храм XIX века в псевдорусском стиле. Возведён в 1823 году для заводских рабочих. Восстановлен в 2007 году. Главная святыня — мощи святых.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/1c6b9118-9fd1-4aea-959e-8b2e6e42888c.jpg'
    },
    { 
      name: 'Музей-усадьба академика А.Ф. Можайского', 
      location: 'Можгинский район', 
      type: 'Музей',
      x: 40,
      y: 55,
      description: 'Родина создателя первого российского самолёта. Мемориальная усадьба, экспозиция об истории авиации. Регулярные выставки и лекции.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/e34bea57-52d6-4d5c-ba4b-a4f8dd5a8351.jpg'
    },
    { 
      name: 'Ботанический сад УдГУ', 
      location: 'г. Ижевск', 
      type: 'Природа',
      x: 53,
      y: 52,
      description: 'Коллекция более 2000 видов растений. Дендрарий, оранжереи с тропическими растениями. Научная база университета. Образовательные программы.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/73cd7fd0-732b-413f-a0b3-dbc782fe62c0.jpg'
    },
    { 
      name: 'Шаркан', 
      location: 'с. Шаркан', 
      type: 'Село',
      x: 30,
      y: 35,
      description: 'Центр удмуртской культуры. Знаменитые удмуртские перепечи. Музей удмуртского быта. Традиционные праздники и фестивали национальной кухни.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/fe2858de-b539-437d-a7d3-bcc70c05b4d8.jpg'
    },
    { 
      name: 'Камская ГЭС и Воткинское водохранилище', 
      location: 'Воткинский район', 
      type: 'Природа',
      x: 68,
      y: 58,
      description: 'Крупнейшая гидроэлектростанция региона. Водохранилище протяжённостью 365 км. Популярное место отдыха, рыбалки и водного туризма.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/4eeb3d32-22a1-43a9-9371-1a81a3743b4e.jpg'
    },
    { 
      name: 'Соборная площадь Ижевска', 
      location: 'г. Ижевск', 
      type: 'Площадь',
      x: 50,
      y: 51,
      description: 'Центральная площадь столицы. Архитектурный ансамбль XVIII-XIX веков. Место проведения главных городских мероприятий и праздников.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/5c8b2b53-4659-4852-829c-0888a90a4bfa.jpg'
    },
    { 
      name: 'Оружейный завод и музей оружия', 
      location: 'г. Ижевск', 
      type: 'Музей',
      x: 50,
      y: 48,
      description: 'Легендарный завод имени М.Т. Калашникова. Музей стрелкового оружия с уникальными экспонатами. История оружейного дела с 1807 года.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/867c5241-f7f6-4604-871e-5686bc36ad07.jpg'
    },
    { 
      name: 'Заякинская кедровая роща', 
      location: 'Завьяловский район', 
      type: 'Природа',
      x: 55,
      y: 47,
      description: 'Уникальный природный памятник. Кедровая роща возрастом более 200 лет. Реликтовые деревья, экологические тропы. Место силы и отдыха.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/75782bd5-cbe9-4668-9cdc-e87b67dbd956.jpg'
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
              { id: 'gallery', label: 'Галерея', icon: 'Images' },
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
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-accent to-accent/20"></div>
                
                <div className="space-y-12">
                  {historyTimeline.map((item, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                        <Card className="border-2 border-border hover:border-accent hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.event}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-3 left-4 right-4">
                              <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-cormorant text-lg font-bold inline-block">
                                {item.year}
                              </div>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-primary/10 text-primary p-2 rounded group-hover:scale-110 transition-transform">
                                <Icon name={item.icon as any} size={24} />
                              </div>
                              <h3 className="font-cormorant text-xl font-bold text-primary flex-1">
                                {item.event}
                              </h3>
                            </div>
                            <p className="text-muted-foreground font-merriweather leading-relaxed text-sm">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent border-4 border-background rounded-full z-10 shadow-lg"></div>
                      
                      <div className="w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
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
                    
                    <defs>
                      <pattern id="forest" patternUnits="userSpaceOnUse" width="2" height="2">
                        <circle cx="1" cy="1" r="0.3" className="fill-green-700/25" />
                      </pattern>
                      <pattern id="fields" patternUnits="userSpaceOnUse" width="4" height="4">
                        <rect x="0" y="0" width="4" height="1" className="fill-yellow-600/15" />
                        <rect x="0" y="2" width="4" height="1" className="fill-yellow-700/15" />
                      </pattern>
                      <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.4 }} />
                        <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.4 }} />
                      </linearGradient>
                    </defs>
                    
                    <path 
                      d="M 20,30 L 80,30 L 85,50 L 75,70 L 25,75 L 15,50 Z" 
                      className="fill-muted/50 stroke-primary stroke-[0.5]"
                    />
                    
                    <rect x="16" y="27" width="35" height="28" fill="url(#forest)" opacity="0.7" />
                    <rect x="56" y="30" width="28" height="25" fill="url(#forest)" opacity="0.7" />
                    <rect x="20" y="58" width="32" height="17" fill="url(#forest)" opacity="0.6" />
                    
                    <rect x="52" y="55" width="20" height="12" fill="url(#fields)" opacity="0.8" />
                    <rect x="30" y="42" width="18" height="10" fill="url(#fields)" opacity="0.7" />
                    
                    <path 
                      d="M 8,50 Q 20,53 35,50 Q 50,47 65,49 Q 75,50 90,52" 
                      fill="url(#waterGradient)"
                      className="stroke-blue-500 stroke-[1.2]"
                    />
                    <path 
                      d="M 8,50 Q 20,53 35,50 Q 50,47 65,49 Q 75,50 90,52 L 90,56 Q 75,54 65,53 Q 50,51 35,54 Q 20,57 8,54 Z" 
                      fill="url(#waterGradient)"
                      opacity="0.5"
                    />
                    <text x="62" y="43" className="fill-blue-700 text-[3px] font-bold font-cormorant">Река Кама</text>
                    
                    <path 
                      d="M 38,22 Q 42,30 45,38 Q 47,46 48,55" 
                      className="fill-none stroke-blue-400/70 stroke-[0.9]"
                    />
                    <path 
                      d="M 38,22 Q 42,30 45,38 Q 47,46 48,55 L 49,55 Q 48,46 46,38 Q 43,30 39,22 Z" 
                      className="fill-blue-400/20"
                    />
                    <text x="40" y="33" className="fill-blue-700 text-[2.5px] font-semibold font-cormorant">р. Чепца</text>
                    
                    <path 
                      d="M 54,32 Q 56,40 58,48" 
                      className="fill-none stroke-blue-400/60 stroke-[0.6]"
                    />
                    <text x="56" y="39" className="fill-blue-600 text-[2px] font-cormorant">р. Иж</text>
                    
                    <path 
                      d="M 26,58 Q 32,60 38,62 Q 42,63 46,65" 
                      className="fill-none stroke-blue-400/60 stroke-[0.6]"
                    />
                    <text x="30" y="56" className="fill-blue-600 text-[2px] font-cormorant">р. Сива</text>
                    
                    <path 
                      d="M 70,48 Q 74,49 78,49" 
                      className="fill-none stroke-blue-400/60 stroke-[0.6]"
                    />
                    <text x="72" y="46" className="fill-blue-600 text-[1.8px] font-cormorant">Вотка</text>
                    
                    <path 
                      d="M 28,35 Q 32,40 35,45" 
                      className="fill-none stroke-blue-400/50 stroke-[0.5]"
                    />
                    <text x="30" y="39" className="fill-blue-500 text-[1.6px] font-cormorant">Лоза</text>
                    
                    <path d="M 10,20 L 90,20 M 10,80 L 90,80" className="stroke-border stroke-[0.3] stroke-dasharray-2" />
                    <text x="5" y="51" className="fill-muted-foreground text-[2px]">С</text>
                    <text x="92" y="51" className="fill-muted-foreground text-[2px]">Ю</text>
                    
                    <g className="drop-shadow-md">
                      <circle cx="50" cy="50" r="2.5" className="fill-red-600 stroke-red-900 stroke-[0.4]" />
                      <circle cx="50" cy="50" r="3.5" className="fill-none stroke-red-600/40 stroke-[0.6] animate-pulse" />
                      <circle cx="50" cy="50" r="5" className="fill-none stroke-red-600/20 stroke-[0.4]" />
                      <text x="50" y="58" textAnchor="middle" className="fill-primary text-[3.8px] font-bold drop-shadow">ИЖЕВСК</text>
                      <text x="50" y="61" textAnchor="middle" className="fill-muted-foreground text-[1.5px]">столица</text>
                    </g>
                    
                    <circle cx="70" cy="60" r="1.5" className="fill-primary stroke-primary-foreground stroke-[0.3]" />
                    <text x="70" y="66" textAnchor="middle" className="fill-primary text-[2.6px] font-semibold">Воткинск</text>
                    <text x="70" y="68.5" textAnchor="middle" className="fill-muted-foreground text-[1.3px]">102 тыс.</text>
                    
                    <circle cx="35" cy="30" r="1.5" className="fill-primary stroke-primary-foreground stroke-[0.3]" />
                    <text x="35" y="27" textAnchor="middle" className="fill-primary text-[2.6px] font-semibold">Глазов</text>
                    <text x="35" y="24.5" textAnchor="middle" className="fill-muted-foreground text-[1.3px]">91 тыс.</text>
                    
                    <circle cx="65" cy="65" r="1.5" className="fill-primary stroke-primary-foreground stroke-[0.3]" />
                    <text x="65" y="71" textAnchor="middle" className="fill-primary text-[2.6px] font-semibold">Сарапул</text>
                    <text x="65" y="73.5" textAnchor="middle" className="fill-muted-foreground text-[1.3px]">95 тыс.</text>
                    
                    <circle cx="40" cy="55" r="1.1" className="fill-primary/80 stroke-primary stroke-[0.2]" />
                    <text x="40" y="60" textAnchor="middle" className="fill-primary text-[2.2px]">Можга</text>
                    <text x="40" y="62.2" textAnchor="middle" className="fill-muted-foreground text-[1.2px]">47 тыс.</text>
                    
                    <circle cx="30" cy="35" r="0.9" className="fill-primary/70 stroke-primary stroke-[0.2]" />
                    <text x="30" y="31.5" textAnchor="middle" className="fill-primary text-[2px]">Шаркан</text>
                    
                    <circle cx="58" cy="42" r="0.8" className="fill-primary/70 stroke-primary stroke-[0.2]" />
                    <text x="58" y="39" textAnchor="middle" className="fill-primary text-[1.9px]">Як-Бодья</text>
                    
                    <circle cx="25" cy="45" r="0.8" className="fill-primary/70 stroke-primary stroke-[0.2]" />
                    <text x="25" y="42" textAnchor="middle" className="fill-primary text-[1.9px]">Ува</text>
                    
                    <circle cx="43" cy="38" r="0.8" className="fill-primary/70 stroke-primary stroke-[0.2]" />
                    <text x="43" y="35" textAnchor="middle" className="fill-primary text-[1.9px]">Игра</text>
                    
                    <path d="M 65,52 L 78,48" className="stroke-amber-600/60 stroke-[0.5]" />
                    <rect x="77" y="45" width="4" height="3" className="fill-amber-600/50 stroke-amber-800 stroke-[0.3]" />
                    <text x="83" y="48.5" className="fill-amber-800 text-[2px] font-bold">Воткинская ГЭС</text>
                    
                    <path className="stroke-purple-600/40 stroke-[0.4] fill-none stroke-dasharray-1,1">
                      <animate attributeName="d" dur="3s" repeatCount="indefinite"
                        values="M 50,50 L 52,48 L 54,50 L 56,48 L 58,50;
                                M 50,50 L 52,49 L 54,51 L 56,49 L 58,50;
                                M 50,50 L 52,48 L 54,50 L 56,48 L 58,50" />
                    </path>
                    
                    <g opacity="0.6">
                      <path d="M 45,65 L 75,65" className="stroke-gray-600 stroke-[0.6]" />
                      <text x="60" y="68" className="fill-gray-700 text-[1.5px]">Трасса М7</text>
                    </g>
                    
                    <g opacity="0.5">
                      <circle cx="23" cy="52" r="1.5" className="fill-green-600/30 stroke-green-700 stroke-[0.3]" />
                      <text x="23" y="49" textAnchor="middle" className="fill-green-800 text-[1.4px]">Нечкино</text>
                    </g>
                    
                    <rect x="85" y="18" width="13" height="12" className="fill-card stroke-border stroke-[0.3]" rx="0.5" />
                    <text x="91.5" y="21" textAnchor="middle" className="fill-primary text-[1.6px] font-bold">Легенда</text>
                    <circle cx="87" cy="23" r="0.4" className="fill-red-600" />
                    <text x="88.5" y="23.5" className="fill-foreground text-[1.2px]">Столица</text>
                    <circle cx="87" cy="25.5" r="0.4" className="fill-primary" />
                    <text x="88.5" y="26" className="fill-foreground text-[1.2px]">Города</text>
                    <circle cx="87" cy="28" r="0.4" className="fill-accent" />
                    <text x="88.5" y="28.5" className="fill-foreground text-[1.2px]">Достопр.</text>
                    
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

        {activeSection === 'gallery' && (
          <div className="animate-fade-in">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Фотогалерея достопримечательностей
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {landmarks.map((item, index) => (
                  <Card key={index} className="border-2 border-border hover:border-accent hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      {item.image ? (
                        <>
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/30 flex items-center justify-center">
                          <Icon name="Image" size={64} className="text-primary/30" />
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-semibold shadow-lg">
                        {item.type}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-cormorant text-xl font-bold text-primary mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground font-merriweather text-sm mb-3 flex items-center gap-2">
                        <Icon name="MapPin" size={14} />
                        {item.location}
                      </p>
                      <p className="text-foreground font-merriweather text-sm leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 bg-card border-2 border-border rounded-lg p-8">
                <h3 className="font-cormorant text-3xl font-bold text-primary mb-6 text-center">
                  Категории достопримечательностей
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded shrink-0">
                      <Icon name="Church" size={28} />
                    </div>
                    <div>
                      <h4 className="font-cormorant text-xl font-bold text-primary mb-2">
                        Церкви и храмы
                      </h4>
                      <p className="text-muted-foreground font-merriweather text-sm leading-relaxed">
                        Православные храмы XIX-XX веков, сочетающие русскую и местную архитектуру
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded shrink-0">
                      <Icon name="Castle" size={28} />
                    </div>
                    <div>
                      <h4 className="font-cormorant text-xl font-bold text-primary mb-2">
                        Древние городища
                      </h4>
                      <p className="text-muted-foreground font-merriweather text-sm leading-relaxed">
                        Археологические памятники средневековья, свидетели древней истории
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded shrink-0">
                      <Icon name="Home" size={28} />
                    </div>
                    <div>
                      <h4 className="font-cormorant text-xl font-bold text-primary mb-2">
                        Деревянное зодчество
                      </h4>
                      <p className="text-muted-foreground font-merriweather text-sm leading-relaxed">
                        Традиционные удмуртские усадьбы и постройки из дерева
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded shrink-0">
                      <Icon name="Trees" size={28} />
                    </div>
                    <div>
                      <h4 className="font-cormorant text-xl font-bold text-primary mb-2">
                        Природные памятники
                      </h4>
                      <p className="text-muted-foreground font-merriweather text-sm leading-relaxed">
                        Заповедники, национальные парки и уникальные ландшафты
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded shrink-0">
                      <Icon name="Factory" size={28} />
                    </div>
                    <div>
                      <h4 className="font-cormorant text-xl font-bold text-primary mb-2">
                        Промышленность
                      </h4>
                      <p className="text-muted-foreground font-merriweather text-sm leading-relaxed">
                        Оружейный завод, музеи промышленности и технологий
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded shrink-0">
                      <Icon name="Music" size={28} />
                    </div>
                    <div>
                      <h4 className="font-cormorant text-xl font-bold text-primary mb-2">
                        Культурные центры
                      </h4>
                      <p className="text-muted-foreground font-merriweather text-sm leading-relaxed">
                        Музеи этнографии, дома-музеи знаменитых людей региона
                      </p>
                    </div>
                  </div>
                </div>
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