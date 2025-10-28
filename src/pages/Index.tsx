import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('history');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<number | null>(null);

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
      details: ['Традиционная вышивка крестом', 'Узорное ткачество на кроснах', 'Изделия из бересты и лыка'],
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/a62ec19a-8441-4f1a-8b8d-c857b2dd5bbe.jpg',
      facts: ['Удмуртские узоры передают космогонические представления народа', 'Каждый символ имеет защитное и обрядовое значение', 'Техники вышивки передаются только от матери к дочери']
    },
    { 
      title: 'Музыкальная культура', 
      description: 'Крезь — удмуртский национальный инструмент, похожий на гусли. Народные песни передают древние легенды и обряды. Традиционный фольклор включает свадебные, обрядовые и лирические песни.', 
      icon: 'Music',
      details: ['Крезь — струнный щипковый инструмент', 'Чипчирган — свистулька из глины', 'Народный ансамбль «Италмас»'],
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/36d77514-b518-446b-97e1-020166a32ed9.jpg',
      facts: ['Крезь звучит на всех важных обрядах и праздниках', 'Народные песни сохраняют древний удмуртский язык', 'Многоголосное пение — уникальная черта удмуртского фольклора']
    },
    { 
      title: 'Литература', 
      description: 'Кузебай Герд — основоположник удмуртской литературы. Ашальчи Оки — поэтесса, певица удмуртской души. Современная литература на удмуртском языке развивается и сохраняет национальную самобытность.', 
      icon: 'BookOpen',
      details: ['Кузебай Герд — поэт и фольклорист', 'Ашальчи Оки — классик поэзии', 'Флор Васильев — народный писатель'],
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/822989f8-8636-48c7-831b-f4c1b2d29f92.jpg',
      facts: ['Удмуртская письменность существует с XVIII века', 'Первая удмуртская газета вышла в 1920 году', 'Ежегодно издаётся более 100 книг на удмуртском языке']
    },
    { 
      title: 'Изобразительное искусство', 
      description: 'Живопись, графика, скульптура удмуртских художников отражает красоту родного края и национальный колорит. Декоративно-прикладное искусство включает резьбу по дереву, керамику, национальный костюм.', 
      icon: 'Palette',
      details: ['Живопись П.А. Ёлкина', 'Скульптура С.Н. Виноградова', 'Удмуртский национальный костюм'],
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/2f66f469-d53d-451f-8801-c2fd526be6d6.jpg',
      facts: ['Удмуртский костюм включает более 200 элементов', 'Цвета костюма отражают социальный статус владельца', 'Национальная одежда шьётся только вручную']
    },
    { 
      title: 'Театр и кино', 
      description: 'Удмуртский государственный национальный театр — центр театрального искусства. Спектакли на удмуртском и русском языках. Развивается национальное кино, документальные фильмы о культуре.', 
      icon: 'Theater',
      details: ['Удмуртский драмтеатр (основан в 1931)', 'Театр оперы и балета', 'Кинофестиваль финно-угорских народов'],
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/1d3b32a6-b4d8-46ad-aa27-1cd966a8baa8.jpg',
      facts: ['Театр даёт более 200 спектаклей в год', 'В репертуаре пьесы удмуртских драматургов', 'Кинофестиваль объединяет 15 финно-угорских народов']
    },
    { 
      title: 'Национальная кухня', 
      description: 'Перепечи — традиционные открытые пироги с различными начинками. Табани — блины из пресного теста. Шаньги, пельняни и другие блюда отражают кулинарное наследие удмуртов.', 
      icon: 'UtensilsCrossed',
      details: ['Перепечи с картофелем и мясом', 'Табани — удмуртские блины', 'Шаньги с творогом и сметаной'],
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/ece8e4b0-5b16-4285-beca-96cd15c71634.jpg',
      facts: ['Перепечи готовятся только в особой печи', 'Каждый регион Удмуртии имеет свой рецепт табани', 'Национальные блюда обязательны на всех праздниках']
    },
  ];

  const traditions = [
    { 
      title: 'Гербер', 
      description: 'Народный праздник окончания весенних полевых работ. Проводится после завершения посевной. Включает обрядовые песни, хороводы, традиционные игры и общий пир.', 
      season: 'Весна',
      seasonIcon: 'Flower2',
      activities: ['Хороводы на природе', 'Обрядовые песни', 'Традиционные игры и состязания'],
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/c8487ae0-1fe9-4ea2-9587-1e3cc463a5de.jpg',
      timing: 'Конец мая - начало июня',
      meaning: 'Праздник символизирует завершение самого важного этапа сельскохозяйственного года и надежду на богатый урожай',
      traditions: ['Общий пир всей деревней на природе', 'Соревнования в силе и ловкости', 'Молодёжные хороводы до рассвета']
    },
    { 
      title: 'Туно', 
      description: 'Летний праздник сенокоса, посвящённый началу жатвы. День благодарения природе за урожай. Сопровождается народными гуляниями, песнями и ритуальными угощениями.', 
      season: 'Лето',
      seasonIcon: 'Sun',
      activities: ['Совместный сенокос', 'Народные гулянья', 'Традиционные угощения в поле'],
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/8780f769-7abe-465f-bb04-444bd580b3dc.jpg',
      timing: 'Июль - август',
      meaning: 'Праздник труда и единения с природой, когда вся община собирается на совместную работу',
      traditions: ['Первый сноп украшают лентами', 'На поле устраивают общий обед', 'Поют специальные сенокосные песни']
    },
    { 
      title: 'Сӥзьыл юон', 
      description: 'Осенний праздник урожая и благодарения. Время подведения итогов года, благодарности земле. Готовятся блюда из нового урожая, проводятся ярмарки и гулянья.', 
      season: 'Осень',
      seasonIcon: 'Leaf',
      activities: ['Ярмарки урожая', 'Благодарственные обряды', 'Приготовление блюд из нового зерна'],
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/a4a904bb-1644-4c00-ad2c-be2ae0866b0c.jpg',
      timing: 'Сентябрь - октябрь',
      meaning: 'Время благодарности земле за урожай и подготовки к зиме, один из главных праздников года',
      traditions: ['Пекут первый хлеб из нового зерна', 'Устраивают ярмарки с народными гуляниями', 'Проводят обряды благодарения духам земли']
    },
    { 
      title: 'Толсур', 
      description: 'Зимний праздник с гаданиями и обрядами. Время рождественско-новогоднего цикла. Молодёжь ходит ряжеными, проводятся гадания на будущее, зажигаются ритуальные костры.', 
      season: 'Зима',
      seasonIcon: 'Snowflake',
      activities: ['Ряженье и колядки', 'Святочные гадания', 'Зажигание обрядовых костров'],
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/a17bf4f8-00c7-4035-ad57-f07cc495dec0.jpg',
      timing: 'Декабрь - январь',
      meaning: 'Самый мистический праздник года, время общения с духами и предсказания будущего',
      traditions: ['Молодёжь ходит по домам ряжеными', 'Девушки гадают на суженого', 'Зажигают костры для отпугивания злых духов']
    },
  ];

  const galleryItems = [
    { 
      name: 'Архитектурно-этнографический музей «Лудорвай»', 
      location: 'с. Лудорвай', 
      type: 'Музей',
      description: 'Уникальный музей под открытым небом с образцами удмуртского зодчества. Включает усадьбы XIX-XX веков, мельницу, амбары и культовые сооружения. Проводятся традиционные праздники и мастер-классы.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/d8864123-ea1e-4e12-ba5f-ed530e2ce3a4.jpg',
      details: 'Лудорвай — это живая история удмуртского народа, воплощенная в деревянном зодчестве. Музей создан в 1986 году на берегу реки Чепцы. Здесь сохранены подлинные памятники архитектуры: усадьбы середины XIX века, мельница-столбовка, амбары и овины. Особое место занимает языческая молельня — куала, где проводились древние обряды. В музее можно увидеть традиционную планировку удмуртской усадьбы, познакомиться с предметами быта, посетить мастер-классы по ремеслам.'
    },
    { 
      name: 'Свято-Михайловский собор', 
      location: 'г. Ижевск', 
      type: 'Храм',
      description: 'Величественный православный храм, памятник архитектуры XIX века. Построен в 1907-1915 годах. Главная святыня — чудотворная икона Божией Матери. Высота колокольни — 62 метра.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/17de1690-d082-4a9a-a610-67c25d7e6e78.jpg',
      details: 'Собор построен по проекту архитектора А.А. Турчевича в русско-византийском стиле. Храм был закрыт в 1929 году, колокольня разрушена. С 1937 по 2007 год в здании размещался музей. После длительной реставрации в 2007 году собор вновь освящен. Восстановлены росписи, иконостас, колокольня. Сегодня это кафедральный собор Ижевской епархии, центр духовной жизни города.'
    },
    { 
      name: 'Национальный музей УР им. Кузебая Герда', 
      location: 'г. Ижевск', 
      type: 'Музей',
      description: 'Главный музей республики с богатой коллекцией этнографии и истории. Более 200 тысяч экспонатов. Уникальные археологические находки, предметы быта, национальные костюмы.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/d1b877c1-ff21-41a6-af7b-084c22a4c512.jpg',
      details: 'Музей основан в 1920 году. Назван в честь Кузебая Герда — выдающегося удмуртского поэта и фольклориста. Экспозиции рассказывают о природе края, древней истории, культуре финно-угорских народов. Особую ценность представляют археологические коллекции: орудия труда каменного века, средневековое оружие, украшения. Этнографические залы демонстрируют традиционные костюмы, утварь, музыкальные инструменты удмуртов.'
    },
    { 
      name: 'Усадьба П.И. Чайковского в Воткинске', 
      location: 'г. Воткинск', 
      type: 'Музей',
      description: 'Дом-музей великого русского композитора, место его рождения (1840). Мемориальная экспозиция, концертный зал. Ежегодно проводится международный фестиваль.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/37041cab-5a1c-46a5-bcc8-ed462df8a2fd.jpg',
      details: 'Петр Ильич Чайковский родился в Воткинске 7 мая 1840 года. Музей открыт в 1940 году к 100-летию композитора. В доме воссозданы интерьеры XIX века, представлены личные вещи семьи Чайковских. Мемориальный парк с памятником композитору. В концертном зале проходят музыкальные вечера. С 1958 года проводится Международный конкурс молодых композиторов имени П.И. Чайковского.'
    },
    { 
      name: 'Ижевский зоопарк', 
      location: 'г. Ижевск', 
      type: 'Зоопарк',
      description: 'Один из крупнейших зоопарков Приволжья. Более 200 видов животных. Участвует в программах сохранения редких видов. Площадь — 16 гектаров.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/6862fc1e-88a7-4b58-9827-c97e2990abdd.jpg',
      details: 'Зоопарк основан в 1983 году. Здесь содержатся млекопитающие, птицы, рептилии со всех континентов. Особая гордость — амурские тигры, белые медведи, снежные барсы. Зоопарк участвует в международных программах по сохранению исчезающих видов. Для посетителей работают контактный зоопарк, террариум, экзотариум. Проводятся экскурсии, лекции, образовательные программы для детей.'
    },
    { 
      name: 'Музей-заповедник «Иднакар»', 
      location: 'г. Глазов', 
      type: 'Музей',
      description: 'Археологический комплекс IX-XIII веков. Древнее городище удмуртов. Музей истории Среднего Прикамья. Уникальные находки эпохи средневековья.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/1dd9e2e4-f155-4bb8-bfcc-101c07254c21.jpg',
      details: 'Иднакар — древнее городище на высоком берегу реки Чепцы. Памятник датируется IX-XIII веками. Это был крупный торговый и ремесленный центр. При раскопках найдены орудия труда, украшения, оружие, керамика. Музей открыт в 2007 году. Экспозиции рассказывают о жизни средневековых удмуртов, торговых связях с соседними народами. Реконструированы фрагменты укреплений городища.'
    },
    { 
      name: 'Нечкинский национальный парк', 
      location: 'Воткинский район', 
      type: 'Природа',
      description: 'Природоохранная территория на берегу Камы. Живописные ландшафты, редкие виды растений и животных. Экологические тропы, места отдыха.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/09207f28-36ca-4b52-90f1-e4f01b3054d6.jpg',
      details: 'Национальный парк создан в 1997 году на площади 20,7 тысяч гектаров. Расположен на побережье Воткинского водохранилища. Уникальное сочетание таежных лесов, луговых степей, водно-болотных угодий. Обитают лоси, кабаны, бобры, более 150 видов птиц. Развит экологический туризм: пешие и водные маршруты, смотровые площадки, пляжи. Зимой работают лыжные трассы.'
    },
    { 
      name: 'Музей истории и культуры Среднего Прикамья', 
      location: 'г. Сарапул', 
      type: 'Музей',
      description: 'Один из старейших музеев Удмуртии (основан в 1909). Богатая коллекция по истории края. Купеческая архитектура XIX века.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/f59cbcd5-dc54-4888-a327-e940badbdcfd.jpg',
      details: 'Музей размещается в историческом особняке купца Башенина 1904 года. Коллекции отражают историю Прикамья с древнейших времен. Археологический отдел представляет находки от каменного века до средневековья. Этнографический раздел посвящен быту народов Прикамья. Отдельная экспозиция рассказывает о купеческом Сарапуле XIX века — крупном торговом центре на Каме.'
    },
    { 
      name: 'Парк им. С.М. Кирова', 
      location: 'г. Ижевск', 
      type: 'Парк',
      description: 'Главный городской парк культуры и отдыха. Создан в 1930-х годах. Аттракционы, пруд, аллеи. Популярное место семейного отдыха.',
      image: 'https://cdn.poehali.dev/projects/eec150a6-5362-4e2d-bca6-86253f50c501/files/1ee56581-4dc6-4e0e-9a54-f086c557a2bb.jpg',
      details: 'Парк основан в 1935 году на месте старинной Петропавловской рощи. Площадь — 73 гектара. Центр парка — живописный Ижевский пруд с лодочной станцией. Работают аттракционы для детей и взрослых, колесо обозрения. Зеленые аллеи с вековыми деревьями, цветники, фонтаны. Зимой заливают каток. Летом проводятся концерты, фестивали, народные гулянья. Любимое место отдыха горожан всех возрастов.'
    }
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {culturalElements.map((item, index) => (
                <Card key={index} className="border-2 border-border hover:border-accent hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="bg-accent text-accent-foreground p-3 rounded shadow-lg">
                        <Icon name={item.icon as any} size={28} />
                      </div>
                      <h3 className="font-cormorant text-2xl font-bold text-white flex-1">{item.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground font-merriweather leading-relaxed text-sm mb-4">{item.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <h4 className="font-cormorant text-lg font-bold text-primary flex items-center gap-2">
                        <Icon name="Star" size={18} className="text-accent" />
                        Ключевые элементы
                      </h4>
                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Icon name="ChevronRight" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <h4 className="font-cormorant text-lg font-bold text-primary mb-3 flex items-center gap-2">
                        <Icon name="Sparkles" size={18} className="text-accent" />
                        Интересные факты
                      </h4>
                      <div className="space-y-2">
                        {item.facts.map((fact, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{fact}</p>
                          </div>
                        ))}
                      </div>
                    </div>
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
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {traditions.map((item, index) => (
                <Card key={index} className="border-2 border-border hover:border-accent hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <Icon name={item.seasonIcon as any} size={20} />
                      <span className="font-cormorant font-bold">{item.season}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-cormorant text-3xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm font-semibold">{item.timing}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground font-merriweather leading-relaxed text-sm mb-4">{item.description}</p>
                    
                    <div className="mb-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                      <h4 className="font-cormorant text-lg font-bold text-primary mb-2 flex items-center gap-2">
                        <Icon name="Heart" size={18} className="text-accent" />
                        Смысл праздника
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.meaning}</p>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <h4 className="font-cormorant text-lg font-bold text-primary flex items-center gap-2">
                        <Icon name="CalendarDays" size={18} className="text-accent" />
                        Основные мероприятия
                      </h4>
                      <ul className="space-y-2">
                        {item.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <h4 className="font-cormorant text-lg font-bold text-primary mb-3 flex items-center gap-2">
                        <Icon name="Sparkles" size={18} className="text-accent" />
                        Традиции
                      </h4>
                      <div className="space-y-2">
                        {item.traditions.map((tradition, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{tradition}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="animate-fade-in">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Галерея достопримечательностей
            </h2>
            
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {galleryItems.map((item, index) => (
                  <Card 
                    key={index} 
                    className="border-2 border-border hover:border-accent hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedGalleryItem(index)}
                  >
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg flex items-center gap-2">
                            <Icon name="Eye" size={20} />
                            <span className="font-semibold">Подробнее</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-semibold shadow-lg">
                        {item.type}
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-cormorant text-xl font-bold text-primary mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground font-merriweather text-sm mb-3 flex items-center gap-2">
                        <Icon name="MapPin" size={14} />
                        {item.location}
                      </p>
                      <p className="text-foreground font-merriweather text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {selectedGalleryItem !== null && (
              <div 
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
                onClick={() => setSelectedGalleryItem(null)}
              >
                <div 
                  className="bg-card rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <img 
                      src={galleryItems[selectedGalleryItem].image} 
                      alt={galleryItems[selectedGalleryItem].name}
                      className="w-full h-[400px] object-cover rounded-t-2xl"
                    />
                    <button
                      onClick={() => setSelectedGalleryItem(null)}
                      className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground p-3 rounded-full hover:bg-background transition-all shadow-lg"
                    >
                      <Icon name="X" size={24} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {galleryItems[selectedGalleryItem].type}
                        </span>
                      </div>
                      <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-white mb-2">
                        {galleryItems[selectedGalleryItem].name}
                      </h2>
                      <p className="text-white/90 font-merriweather text-sm flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        {galleryItems[selectedGalleryItem].location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="font-cormorant text-2xl font-bold text-primary mb-3 flex items-center gap-2">
                        <Icon name="Info" size={24} className="text-accent" />
                        Краткое описание
                      </h3>
                      <p className="text-foreground font-merriweather text-base leading-relaxed">
                        {galleryItems[selectedGalleryItem].description}
                      </p>
                    </div>
                    
                    <div className="pt-6 border-t border-border">
                      <h3 className="font-cormorant text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                        <Icon name="BookOpen" size={24} className="text-accent" />
                        Подробная информация
                      </h3>
                      <p className="text-muted-foreground font-merriweather text-base leading-relaxed whitespace-pre-line">
                        {galleryItems[selectedGalleryItem].details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
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