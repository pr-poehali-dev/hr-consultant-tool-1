import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';

type Section = 'home' | 'diagnosis' | 'profile' | 'career' | 'plan' | 'resources' | 'chat';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [diagnosisStep, setDiagnosisStep] = useState(1);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([
    { role: 'ai', text: 'Здравствуйте! Я ваш карьерный консультант. Помогу определить путь развития и составить план роста.' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [skillValues, setSkillValues] = useState({
    communication: 50,
    organization: 50,
    problemSolving: 50,
    learning: 50,
    analytics: 50,
    projectManagement: 50,
    development: 50
  });

  const userProfile = {
    name: 'Алексей Петров',
    role: 'Middle Frontend Developer',
    level: 'Middle',
    aiDevIndex: 72,
    skillMapCoverage: 68,
    careerReadiness: 75,
    skills: [
      { name: 'React / TypeScript', level: 85, category: 'hard' },
      { name: 'Системный дизайн', level: 60, category: 'hard' },
      { name: 'Управление проектами', level: 52, category: 'hard' },
      { name: 'Коммуникация', level: 78, category: 'soft' },
      { name: 'Менторство', level: 45, category: 'soft' },
      { name: 'Решение проблем', level: 70, category: 'soft' }
    ],
    achievements: [
      { title: 'Освоен модуль архитектуры', date: '15 окт 2024', type: 'learning' },
      { title: 'Проведено 12 code review', date: '28 окт 2024', type: 'practice' },
      { title: 'Менторство junior-разработчика', date: '5 ноя 2024', type: 'mentoring' }
    ]
  };

  const careerPaths = [
    {
      title: 'Senior Frontend Developer',
      readiness: 75,
      timeline: '6-9 месяцев',
      description: 'Технический эксперт с глубокими знаниями архитектуры',
      requirements: [
        { skill: 'Системный дизайн', current: 60, target: 85 },
        { skill: 'Code Review & Менторство', current: 45, target: 80 },
        { skill: 'Техническое лидерство', current: 50, target: 75 }
      ]
    },
    {
      title: 'Team Lead',
      readiness: 58,
      timeline: '12-18 месяцев',
      description: 'Управление командой и координация процессов',
      requirements: [
        { skill: 'Управление людьми', current: 30, target: 85 },
        { skill: 'Планирование и приоритеты', current: 52, target: 80 },
        { skill: 'Коммуникация с бизнесом', current: 60, target: 90 }
      ]
    },
    {
      title: 'Frontend Architect',
      readiness: 62,
      timeline: '18-24 месяцев',
      description: 'Проектирование архитектуры фронтенд-систем',
      requirements: [
        { skill: 'Архитектурное мышление', current: 60, target: 90 },
        { skill: 'Инфраструктура и DevOps', current: 45, target: 75 },
        { skill: 'Кросс-функциональная работа', current: 55, target: 80 }
      ]
    }
  ];

  const developmentPlan = {
    softSkills: [
      { title: 'Курс "Эффективная коммуникация"', deadline: '15 дек 2024', priority: 'high', progress: 40 },
      { title: 'Менторство junior-разработчика', deadline: 'Постоянно', priority: 'high', progress: 60 },
      { title: 'Участие в Planning & Retro', deadline: 'Еженедельно', priority: 'medium', progress: 70 }
    ],
    hardSkills: [
      { title: 'Курс "Системный дизайн для фронтенда"', deadline: '15 дек 2024', priority: 'high', progress: 55 },
      { title: 'Рефакторинг модуля авторизации', deadline: '1 дек 2024', priority: 'high', progress: 30 },
      { title: 'Изучение микрофронтендов', deadline: '31 янв 2025', priority: 'medium', progress: 15 }
    ]
  };

  const resources = [
    { title: 'Frontend System Design', type: 'Курс', duration: '6 недель', provider: 'Внутренний', icon: 'GraduationCap' },
    { title: 'Redesign Dashboard Project', type: 'Проект', duration: '3 месяца', provider: 'Практика', icon: 'Briefcase' },
    { title: 'Архитектурный митап', type: 'Событие', duration: '2 часа', provider: 'Команда', icon: 'Users' },
    { title: 'Менторская программа T1', type: 'Программа', duration: '6 месяцев', provider: 'HR', icon: 'Award' },
    { title: 'TypeScript Advanced Patterns', type: 'Курс', duration: '4 недели', provider: 'Внешний', icon: 'Code' },
    { title: 'Leadership Essentials', type: 'Тренинг', duration: '2 дня', provider: 'HR', icon: 'Target' }
  ];

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages([...chatMessages, { role: 'user', text: chatInput }]);
    
    setTimeout(() => {
      const responses = [
        'На основе вашего профиля рекомендую сфокусироваться на системном дизайне и менторстве — это ключевые компетенции для перехода в Senior.',
        'Ваш AI Development Index показывает хорошую готовность к росту. Предлагаю взять в менторство junior-разработчика и параллельно пройти курс по архитектуре.',
        'Для достижения вашей цели стоит развивать как технические навыки (системный дизайн, архитектура), так и soft skills (коммуникация, лидерство).',
        'Анализ вашего профиля показывает сильные стороны в разработке. Рекомендую добавить практику code review и участие в архитектурных решениях.'
      ];
      setChatMessages(prev => [...prev, { 
        role: 'ai', 
        text: responses[Math.floor(Math.random() * responses.length)] 
      }]);
    }, 1000);
    
    setChatInput('');
  };

  const renderHome = () => (
    <div className="max-w-7xl mx-auto space-y-20 animate-fade-in">
      <section className="text-center space-y-8 py-16">
        <div className="inline-block">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary/30 text-primary">
            Инструмент карьерного развития
          </Badge>
        </div>
        <h1 className="text-6xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
          HR Консультант — ваш путь профессионального роста
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          ИИ-ассистент анализирует навыки, помогает ставить карьерные цели и формирует персональные планы развития
        </p>
        <div className="flex gap-4 justify-center pt-6">
          <Button size="lg" onClick={() => setCurrentSection('diagnosis')} className="text-lg px-10 h-14">
            Войти в профиль
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <Button size="lg" variant="outline" onClick={() => setCurrentSection('chat')} className="text-lg px-10 h-14">
            Задать вопрос ИИ
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-6">
        {[
          { 
            icon: 'Target', 
            title: 'Диагностика навыков', 
            desc: 'Оценка компетенций, карта навыков, анализ сильных и слабых сторон'
          },
          { 
            icon: 'TrendingUp', 
            title: 'Карьерная траектория', 
            desc: 'Подбор реалистичных направлений с учётом вашего уровня и целей'
          },
          { 
            icon: 'ClipboardList', 
            title: 'План развития', 
            desc: 'Индивидуальные задачи, рекомендации по ресурсам, оценка прогресса'
          },
          { 
            icon: 'BarChart3', 
            title: 'Профессиональные метрики', 
            desc: 'AI Development Index, Skill Map Coverage, Career Readiness'
          }
        ].map((feature, i) => (
          <Card key={i} className="border hover:border-primary/50 transition-all hover:shadow-md group">
            <CardHeader>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={feature.icon as any} className="text-primary" size={28} />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12">
        <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { num: '01', icon: 'ClipboardCheck', title: 'Пройдите диагностику', desc: 'Ответьте на вопросы о текущей роли, навыках и карьерных целях' },
            { num: '02', icon: 'LineChart', title: 'Получите карьерную траекторию', desc: 'ИИ построит возможные пути развития с учётом вашего профиля' },
            { num: '03', icon: 'Rocket', title: 'Начните работу по плану', desc: 'Следуйте персональному плану развития и отслеживайте прогресс' }
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-bold text-primary/10 mb-4">{step.num}</div>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                <Icon name={step.icon as any} className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderDiagnosis = () => (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="flex justify-between mb-3">
          <h2 className="text-2xl font-bold">Диагностика профиля</h2>
          <span className="text-sm text-muted-foreground">Шаг {diagnosisStep} из 5</span>
        </div>
        <Progress value={(diagnosisStep / 5) * 100} className="h-2" />
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">
            {diagnosisStep === 1 && 'Текущая роль и статус'}
            {diagnosisStep === 2 && 'Карьерные цели'}
            {diagnosisStep === 3 && 'Оценка Soft Skills'}
            {diagnosisStep === 4 && 'Оценка Hard Skills'}
            {diagnosisStep === 5 && 'Приоритеты развития'}
          </CardTitle>
          <p className="text-muted-foreground">
            {diagnosisStep === 1 && 'Укажите вашу текущую должность и уровень'}
            {diagnosisStep === 2 && 'Опишите, к какой роли вы стремитесь'}
            {diagnosisStep === 3 && 'Оцените ваши навыки по шкале от 0 до 100'}
            {diagnosisStep === 4 && 'Оцените ваши технические навыки'}
            {diagnosisStep === 5 && 'Что для вас важнее в карьерном росте?'}
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          {diagnosisStep === 1 && (
            <>
              <div className="space-y-3">
                <Label className="text-base">Должность</Label>
                <Input placeholder="Например: Frontend Developer" className="h-12" />
              </div>
              <div className="space-y-3">
                <Label className="text-base">Уровень</Label>
                <RadioGroup defaultValue="middle">
                  {['Junior Developer', 'Middle Developer', 'Senior Developer', 'Lead Developer'].map(level => (
                    <div key={level} className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
                      <RadioGroupItem value={level.toLowerCase().replace(' ', '-')} id={level} />
                      <Label htmlFor={level} className="flex-1 cursor-pointer font-medium">{level}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </>
          )}

          {diagnosisStep === 2 && (
            <div className="space-y-3">
              <Label className="text-base">Опишите вашу карьерную цель</Label>
              <Textarea 
                placeholder="Например: Хочу стать Senior Developer в течение года, развить навыки архитектуры и начать менторить команду..."
                className="min-h-[200px] resize-none"
              />
            </div>
          )}

          {diagnosisStep === 3 && (
            <div className="space-y-6">
              {[
                { key: 'communication', label: 'Коммуникация', desc: 'Презентации, переговоры, работа с командой' },
                { key: 'organization', label: 'Самоорганизация', desc: 'Управление временем, планирование, дисциплина' },
                { key: 'problemSolving', label: 'Решение проблем', desc: 'Аналитическое мышление, креативность' },
                { key: 'learning', label: 'Обучаемость', desc: 'Скорость освоения новых навыков и технологий' }
              ].map(skill => (
                <div key={skill.key} className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <Label className="text-base font-semibold">{skill.label}</Label>
                      <p className="text-sm text-muted-foreground mt-1">{skill.desc}</p>
                    </div>
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {skillValues[skill.key as keyof typeof skillValues]}
                    </Badge>
                  </div>
                  <Slider 
                    value={[skillValues[skill.key as keyof typeof skillValues]]} 
                    onValueChange={(val) => setSkillValues({...skillValues, [skill.key]: val[0]})}
                    max={100} 
                    step={5}
                    className="py-4"
                  />
                </div>
              ))}
            </div>
          )}

          {diagnosisStep === 4 && (
            <div className="space-y-6">
              {[
                { key: 'analytics', label: 'Аналитика', desc: 'Работа с данными, метрики, исследования' },
                { key: 'projectManagement', label: 'Управление проектами', desc: 'Планирование, координация, контроль' },
                { key: 'development', label: 'Разработка', desc: 'Технические навыки, инструменты, практики' }
              ].map(skill => (
                <div key={skill.key} className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <Label className="text-base font-semibold">{skill.label}</Label>
                      <p className="text-sm text-muted-foreground mt-1">{skill.desc}</p>
                    </div>
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {skillValues[skill.key as keyof typeof skillValues]}
                    </Badge>
                  </div>
                  <Slider 
                    value={[skillValues[skill.key as keyof typeof skillValues]]} 
                    onValueChange={(val) => setSkillValues({...skillValues, [skill.key]: val[0]})}
                    max={100} 
                    step={5}
                    className="py-4"
                  />
                </div>
              ))}
            </div>
          )}

          {diagnosisStep === 5 && (
            <RadioGroup>
              {[
                { value: 'technical', label: 'Технический рост', desc: 'Углубление в архитектуру, новые технологии, экспертиза' },
                { value: 'leadership', label: 'Лидерство', desc: 'Управление командой, менторство, развитие людей' },
                { value: 'mixed', label: 'Комбинированный путь', desc: 'Технический и управленческий рост одновременно' },
                { value: 'architecture', label: 'Архитектура', desc: 'Системный дизайн, инфраструктура, высокоуровневые решения' }
              ].map(option => (
                <div key={option.value} className="flex items-start space-x-3 p-5 border rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    <div className="font-semibold text-base mb-1">{option.label}</div>
                    <p className="text-sm text-muted-foreground">{option.desc}</p>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}

          <div className="flex gap-4 pt-6 border-t">
            {diagnosisStep > 1 && (
              <Button variant="outline" size="lg" onClick={() => setDiagnosisStep(diagnosisStep - 1)} className="px-8">
                Назад
              </Button>
            )}
            <Button 
              size="lg"
              className="flex-1 h-12"
              onClick={() => {
                if (diagnosisStep === 5) {
                  setCurrentSection('profile');
                } else {
                  setDiagnosisStep(diagnosisStep + 1);
                }
              }}
            >
              {diagnosisStep === 5 ? 'Завершить диагностику' : 'Продолжить'}
              <Icon name="ArrowRight" className="ml-2" size={18} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfile = () => (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">{userProfile.name}</h1>
          <p className="text-xl text-muted-foreground">{userProfile.role}</p>
          <Badge variant="outline" className="mt-3 px-3 py-1">{userProfile.level}</Badge>
        </div>
        <Button variant="outline" size="lg" onClick={() => setCurrentSection('diagnosis')}>
          <Icon name="RefreshCw" className="mr-2" size={18} />
          Пройти диагностику заново
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">AI Development Index</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold mb-4">{userProfile.aiDevIndex}<span className="text-2xl text-muted-foreground">/100</span></div>
            <Progress value={userProfile.aiDevIndex} className="h-2 mb-2" />
            <p className="text-sm text-muted-foreground">Общий индикатор готовности к развитию</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Skill Map Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold mb-4">{userProfile.skillMapCoverage}<span className="text-2xl text-muted-foreground">%</span></div>
            <Progress value={userProfile.skillMapCoverage} className="h-2 mb-2" />
            <p className="text-sm text-muted-foreground">Покрытие необходимых компетенций</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Career Readiness</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold mb-4">{userProfile.careerReadiness}<span className="text-2xl text-muted-foreground">%</span></div>
            <Progress value={userProfile.careerReadiness} className="h-2 mb-2" />
            <p className="text-sm text-muted-foreground">Готовность к переходу в Senior</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Icon name="BarChart3" size={22} />
              Профиль компетенций
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="hard">Hard Skills</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-5">
                {userProfile.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">{skill.category}</Badge>
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="hard" className="space-y-5">
                {userProfile.skills.filter(s => s.category === 'hard').map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm font-semibold text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="soft" className="space-y-5">
                {userProfile.skills.filter(s => s.category === 'soft').map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm font-semibold text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2">
              <Icon name="Award" size={22} />
              Последние достижения
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {userProfile.achievements.map((achievement, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border rounded-xl bg-muted/30">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  achievement.type === 'learning' ? 'bg-primary/10' : 
                  achievement.type === 'practice' ? 'bg-accent/10' : 'bg-secondary/10'
                }`}>
                  <Icon 
                    name={achievement.type === 'learning' ? 'GraduationCap' : achievement.type === 'practice' ? 'Code' : 'Users'} 
                    className={achievement.type === 'learning' ? 'text-primary' : achievement.type === 'practice' ? 'text-accent' : 'text-secondary'}
                    size={20} 
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">{achievement.title}</p>
                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCareer = () => (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Карьерные траектории</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          ИИ проанализировал ваш профиль и построил возможные пути развития с учётом текущих компетенций
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {careerPaths.map((path, i) => (
          <Card key={i} className="border-2 hover:border-primary/50 transition-all group">
            <CardHeader className="border-b">
              <div className="flex items-start justify-between mb-3">
                <CardTitle className="text-xl">{path.title}</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">{path.description}</p>
              <div className="flex items-center gap-3 mt-4">
                <Badge variant="outline" className="font-normal">
                  <Icon name="Clock" size={14} className="mr-1" />
                  {path.timeline}
                </Badge>
                <Badge className={path.readiness >= 70 ? 'bg-primary' : path.readiness >= 50 ? 'bg-accent' : 'bg-secondary'}>
                  Готовность {path.readiness}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-5 mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Общий прогресс</span>
                  <span className="text-muted-foreground">{path.readiness}%</span>
                </div>
                <Progress value={path.readiness} className="h-2 mb-6" />
                
                <div className="space-y-4">
                  <p className="text-sm font-semibold">Необходимые компетенции:</p>
                  {path.requirements.map((req, j) => (
                    <div key={j} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{req.skill}</span>
                        <span className="text-muted-foreground">{req.current} → {req.target}</span>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div className="absolute h-full bg-muted-foreground/30" style={{width: `${(req.target / 100) * 100}%`}}></div>
                        <div className="absolute h-full bg-primary" style={{width: `${(req.current / 100) * 100}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="w-full" variant={i === 0 ? 'default' : 'outline'}>
                Выбрать этот путь
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPlan = () => (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">План развития</h1>
          <p className="text-xl text-muted-foreground">Персональный план на ближайшие 3 месяца</p>
        </div>
        <Button size="lg" className="gap-2">
          <Icon name="Sparkles" size={18} />
          Сгенерировать новый план
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="border-2 border-primary/30">
            <CardHeader className="border-b bg-primary/5">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Icon name="Users" size={20} />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {developmentPlan.softSkills.map((item, i) => (
                <div key={i} className="space-y-3 pb-4 border-b last:border-0 last:pb-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-medium mb-1">{item.title}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Calendar" size={14} />
                        <span>До: {item.deadline}</span>
                      </div>
                    </div>
                    <Badge variant={item.priority === 'high' ? 'default' : 'secondary'} className="flex-shrink-0">
                      {item.priority === 'high' ? 'Высокий' : 'Средний'}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-semibold">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-1.5" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-2 border-accent/30">
            <CardHeader className="border-b bg-accent/5">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Icon name="Code" size={20} />
                Hard Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {developmentPlan.hardSkills.map((item, i) => (
                <div key={i} className="space-y-3 pb-4 border-b last:border-0 last:pb-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-medium mb-1">{item.title}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Calendar" size={14} />
                        <span>До: {item.deadline}</span>
                      </div>
                    </div>
                    <Badge variant={item.priority === 'high' ? 'default' : 'secondary'} className="flex-shrink-0">
                      {item.priority === 'high' ? 'Высокий' : 'Средний'}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-semibold">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-1.5" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Ресурсы для развития</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          ИИ подобрал релевантные возможности для вашего профессионального роста
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, i) => (
          <Card key={i} className="border hover:border-primary/50 transition-all hover:shadow-md group">
            <CardHeader>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name={resource.icon as any} className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                    <Badge variant="secondary" className="text-xs">{resource.provider}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Icon name="Clock" size={14} />
                <span>{resource.duration}</span>
              </div>
              <Button className="w-full" variant="outline">
                Подробнее
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <Card className="h-[700px] flex flex-col border-2">
        <CardHeader className="border-b bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Icon name="Bot" size={22} className="text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl">ИИ Карьерный консультант</CardTitle>
              <p className="text-sm text-muted-foreground">Задайте вопрос о профессиональном развитии</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
          {chatMessages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-primary text-primary-foreground ml-12' 
                  : 'bg-muted mr-12'
              }`}>
                <p className="leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
        </CardContent>
        <div className="border-t p-4 bg-muted/30">
          <div className="flex gap-3">
            <Input 
              placeholder="Например: Какие навыки развивать для Senior? Как составить план развития?"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 h-12"
            />
            <Button onClick={handleSendMessage} size="lg" className="px-6">
              <Icon name="Send" size={18} />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentSection('home')}>
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Target" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold">HR Консультант</h1>
                <p className="text-xs text-muted-foreground">Карьерное развитие с ИИ</p>
              </div>
            </div>
            <nav className="hidden lg:flex gap-8">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'diagnosis', label: 'Диагностика', icon: 'ClipboardCheck' },
                { id: 'profile', label: 'Профиль', icon: 'User' },
                { id: 'career', label: 'Карьера', icon: 'TrendingUp' },
                { id: 'plan', label: 'План', icon: 'ListChecks' },
                { id: 'resources', label: 'Ресурсы', icon: 'Library' }
              ].map(item => (
                <button 
                  key={item.id}
                  onClick={() => setCurrentSection(item.id as Section)} 
                  className={`flex items-center gap-2 transition-colors ${
                    currentSection === item.id ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {currentSection === 'home' && renderHome()}
        {currentSection === 'diagnosis' && renderDiagnosis()}
        {currentSection === 'profile' && renderProfile()}
        {currentSection === 'career' && renderCareer()}
        {currentSection === 'plan' && renderPlan()}
        {currentSection === 'resources' && renderResources()}
        {currentSection === 'chat' && renderChat()}
      </main>

      <button
        onClick={() => setCurrentSection('chat')}
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50 hover:shadow-xl"
        aria-label="Открыть чат с ИИ"
      >
        <Icon name="MessageCircle" size={28} />
      </button>
    </div>
  );
};

export default Index;
