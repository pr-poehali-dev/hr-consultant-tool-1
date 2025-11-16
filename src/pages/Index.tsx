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

type Section = 'home' | 'diagnosis' | 'profile' | 'career' | 'plan' | 'resources' | 'chat';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [diagnosisStep, setDiagnosisStep] = useState(1);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([
    { role: 'ai', text: 'Здравствуйте! Я ваш HR-консультант. Чем могу помочь?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const userProfile = {
    name: 'Алексей Петров',
    role: 'Middle Frontend Developer',
    readiness: 72,
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 78 },
      { name: 'Системный дизайн', level: 60 },
      { name: 'Менторство', level: 45 },
      { name: 'Управление проектами', level: 52 }
    ],
    milestones: [
      { title: 'Завершен курс по архитектуре', date: '15 окт 2024', completed: true },
      { title: 'Провел 3 code review', date: '28 окт 2024', completed: true },
      { title: 'Начал менторство junior', date: '5 ноя 2024', completed: true },
      { title: 'Выступление на митапе', date: 'В процессе', completed: false }
    ]
  };

  const careerPaths = [
    {
      title: 'Senior Frontend Developer',
      readiness: 72,
      timeline: '6-9 месяцев',
      steps: [
        { title: 'Освоить системный дизайн', progress: 60 },
        { title: 'Стать техническим лидом проекта', progress: 40 },
        { title: 'Провести 5+ code review в месяц', progress: 70 }
      ]
    },
    {
      title: 'Team Lead',
      readiness: 45,
      timeline: '12-18 месяцев',
      steps: [
        { title: 'Развить навыки управления', progress: 30 },
        { title: 'Менторство 2+ разработчиков', progress: 50 },
        { title: 'Участие в планировании', progress: 40 }
      ]
    },
    {
      title: 'Frontend Architect',
      readiness: 55,
      timeline: '18-24 месяцев',
      steps: [
        { title: 'Глубокое изучение архитектуры', progress: 60 },
        { title: 'Работа над инфраструктурой', progress: 45 },
        { title: 'Создание внутренних фреймворков', progress: 35 }
      ]
    }
  ];

  const developmentPlan = [
    {
      category: 'Обучение',
      items: [
        { title: 'Курс "Системный дизайн для фронтенда"', deadline: '15 дек 2024', priority: 'high' },
        { title: 'Книга "Designing Data-Intensive Applications"', deadline: '31 янв 2025', priority: 'medium' }
      ]
    },
    {
      category: 'Практика',
      items: [
        { title: 'Рефакторинг модуля авторизации', deadline: '1 дек 2024', priority: 'high' },
        { title: 'Внедрение микрофронтендов', deadline: '15 фев 2025', priority: 'medium' }
      ]
    },
    {
      category: 'Менторство',
      items: [
        { title: 'Менторство Junior-разработчика', deadline: 'Постоянно', priority: 'high' }
      ]
    }
  ];

  const resources = [
    { title: 'Frontend System Design', type: 'Курс', duration: '6 недель', icon: 'GraduationCap' },
    { title: 'Проект: Редизайн дашборда', type: 'Проект', duration: '3 месяца', icon: 'Briefcase' },
    { title: 'Внутренний митап по архитектуре', type: 'Событие', duration: '2 часа', icon: 'Users' },
    { title: 'Менторская программа', type: 'Программа', duration: '6 месяцев', icon: 'Award' }
  ];

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages([...chatMessages, { role: 'user', text: chatInput }]);
    
    setTimeout(() => {
      const responses = [
        'Для перехода в Senior я рекомендую сфокусироваться на системном дизайне и лидерских навыках.',
        'Вам стоит развивать навык code review и менторство — это ключевые компетенции для роста.',
        'Рекомендую начать с курса по системному дизайну и параллельно взять в менторство junior-разработчика.'
      ];
      setChatMessages(prev => [...prev, { 
        role: 'ai', 
        text: responses[Math.floor(Math.random() * responses.length)] 
      }]);
    }, 1000);
    
    setChatInput('');
  };

  const renderDiagnosis = () => (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="mb-8">
        <Progress value={(diagnosisStep / 5) * 100} className="h-2" />
        <p className="text-sm text-muted-foreground mt-2">Шаг {diagnosisStep} из 5</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {diagnosisStep === 1 && 'Какую роль вы занимаете сейчас?'}
            {diagnosisStep === 2 && 'Какие у вас карьерные цели?'}
            {diagnosisStep === 3 && 'Оцените свои навыки'}
            {diagnosisStep === 4 && 'Над чем хотите работать?'}
            {diagnosisStep === 5 && 'Какой формат развития вам ближе?'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {diagnosisStep === 1 && (
            <RadioGroup defaultValue="middle">
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="junior" id="junior" />
                <Label htmlFor="junior" className="flex-1 cursor-pointer">Junior Developer</Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="middle" id="middle" />
                <Label htmlFor="middle" className="flex-1 cursor-pointer">Middle Developer</Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="senior" id="senior" />
                <Label htmlFor="senior" className="flex-1 cursor-pointer">Senior Developer</Label>
              </div>
            </RadioGroup>
          )}

          {diagnosisStep === 2 && (
            <Textarea 
              placeholder="Например: Хочу стать Senior Developer в течение года и развить навыки лидерства..."
              className="min-h-[150px]"
            />
          )}

          {diagnosisStep === 3 && (
            <div className="space-y-4">
              {['React/Vue/Angular', 'TypeScript/JavaScript', 'Системный дизайн', 'Code Review', 'Менторство'].map(skill => (
                <div key={skill}>
                  <div className="flex justify-between mb-2">
                    <Label>{skill}</Label>
                    <span className="text-sm text-muted-foreground">0-100</span>
                  </div>
                  <Input type="number" min="0" max="100" placeholder="50" />
                </div>
              ))}
            </div>
          )}

          {diagnosisStep === 4 && (
            <RadioGroup>
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="technical" id="technical" />
                <Label htmlFor="technical" className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-semibold">Технический рост</p>
                    <p className="text-sm text-muted-foreground">Углубление в архитектуру, новые технологии</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="leadership" id="leadership" />
                <Label htmlFor="leadership" className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-semibold">Лидерство</p>
                    <p className="text-sm text-muted-foreground">Управление командой, менторство</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <RadioGroupItem value="mixed" id="mixed" />
                <Label htmlFor="mixed" className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-semibold">Комбинированный</p>
                    <p className="text-sm text-muted-foreground">И технический, и управленческий рост</p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          )}

          {diagnosisStep === 5 && (
            <div className="space-y-4">
              {[
                { value: 'courses', label: 'Онлайн-курсы', desc: 'Структурированное обучение' },
                { value: 'projects', label: 'Практические проекты', desc: 'Обучение через работу' },
                { value: 'mentoring', label: 'Менторство', desc: 'Один на один с экспертом' },
                { value: 'self', label: 'Самообучение', desc: 'Книги, статьи, документация' }
              ].map(option => (
                <div key={option.value} className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    <div>
                      <p className="font-semibold">{option.label}</p>
                      <p className="text-sm text-muted-foreground">{option.desc}</p>
                    </div>
                  </Label>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-4 pt-4">
            {diagnosisStep > 1 && (
              <Button variant="outline" onClick={() => setDiagnosisStep(diagnosisStep - 1)}>
                Назад
              </Button>
            )}
            <Button 
              className="flex-1" 
              onClick={() => {
                if (diagnosisStep === 5) {
                  setCurrentSection('profile');
                } else {
                  setDiagnosisStep(diagnosisStep + 1);
                }
              }}
            >
              {diagnosisStep === 5 ? 'Завершить диагностику' : 'Далее'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Target" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold">HR Консультант</h1>
                <p className="text-xs text-muted-foreground">Ваш путь к карьерному росту</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => setCurrentSection('home')} className="text-sm hover:text-primary transition-colors">Главная</button>
              <button onClick={() => setCurrentSection('diagnosis')} className="text-sm hover:text-primary transition-colors">Диагностика</button>
              <button onClick={() => setCurrentSection('profile')} className="text-sm hover:text-primary transition-colors">Профиль</button>
              <button onClick={() => setCurrentSection('career')} className="text-sm hover:text-primary transition-colors">Карьера</button>
              <button onClick={() => setCurrentSection('plan')} className="text-sm hover:text-primary transition-colors">План</button>
              <button onClick={() => setCurrentSection('resources')} className="text-sm hover:text-primary transition-colors">Ресурсы</button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {currentSection === 'home' && (
          <div className="max-w-6xl mx-auto space-y-16 animate-fade-in">
            <section className="text-center space-y-6 py-12">
              <Badge className="mb-4">Инструмент карьерного развития</Badge>
              <h2 className="text-5xl font-bold tracking-tight">Развивайтесь быстрее с ИИ-консультантом</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Платформа помогает сотрудникам анализировать навыки, ставить цели и строить персональные карьерные траектории
              </p>
              <div className="flex gap-4 justify-center pt-6">
                <Button size="lg" onClick={() => setCurrentSection('diagnosis')} className="text-lg px-8">
                  Начать диагностику
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => setCurrentSection('chat')} className="text-lg px-8">
                  Задать вопрос ИИ
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Brain" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Миссия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Мы создали этот инструмент, чтобы каждый сотрудник мог раскрыть свой потенциал. 
                    ИИ-консультант анализирует ваши навыки и предлагает персональный план развития на основе лучших практик и внутренних возможностей компании.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name="Sparkles" className="text-accent" size={24} />
                  </div>
                  <CardTitle>Почему это работает</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Традиционные HR-процессы требуют много времени. Наш ИИ работает 24/7, мгновенно анализирует данные 
                    и строит карьерные траектории с учётом ваших целей, навыков и возможностей компании.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h3 className="text-3xl font-bold text-center mb-12">Как это работает</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { icon: 'ClipboardList', title: '1. Диагностика', desc: 'Ответьте на 5 вопросов о целях и навыках' },
                  { icon: 'LineChart', title: '2. Анализ', desc: 'ИИ оценит ваш профиль и построит траектории' },
                  { icon: 'Target', title: '3. План', desc: 'Получите персональный план развития' },
                  { icon: 'TrendingUp', title: '4. Рост', desc: 'Следите за прогрессом и достигайте целей' }
                ].map((step, i) => (
                  <Card key={i} className="text-center hover:scale-105 transition-transform">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon name={step.icon as any} className="text-primary" size={32} />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {currentSection === 'diagnosis' && renderDiagnosis()}

        {currentSection === 'profile' && (
          <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">{userProfile.name}</h2>
                <p className="text-muted-foreground">{userProfile.role}</p>
              </div>
              <Badge variant="outline" className="text-lg px-4 py-2">
                <Icon name="Zap" className="mr-2" size={18} />
                Готовность к росту: {userProfile.readiness}%
              </Badge>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={24} />
                  Индикатор готовности к Senior
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Общий прогресс</span>
                    <span className="font-semibold">{userProfile.readiness}%</span>
                  </div>
                  <Progress value={userProfile.readiness} className="h-3" />
                  <p className="text-sm text-muted-foreground mt-4">
                    Вы на верном пути! Для перехода в Senior рекомендуем усилить навыки системного дизайна и менторства.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BarChart3" size={24} />
                    Навыки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {userProfile.skills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Trophy" size={24} />
                    Милестоны
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userProfile.milestones.map((milestone, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        milestone.completed ? 'bg-accent' : 'bg-muted'
                      }`}>
                        {milestone.completed && <Icon name="Check" size={14} className="text-accent-foreground" />}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${milestone.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {milestone.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{milestone.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentSection === 'career' && (
          <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Ваши карьерные траектории</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                ИИ проанализировал ваш профиль и построил возможные пути развития
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {careerPaths.map((path, i) => (
                <Card key={i} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <CardTitle className="text-xl">{path.title}</CardTitle>
                      <Badge>{path.timeline}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Готовность</span>
                        <span className="font-semibold">{path.readiness}%</span>
                      </div>
                      <Progress value={path.readiness} className="h-2" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm font-semibold">Ключевые шаги:</p>
                    {path.steps.map((step, j) => (
                      <div key={j} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{step.title}</span>
                          <span className="text-muted-foreground">{step.progress}%</span>
                        </div>
                        <Progress value={step.progress} className="h-1.5" />
                      </div>
                    ))}
                    <Button className="w-full mt-4" variant="outline">
                      Выбрать путь
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {currentSection === 'plan' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">План развития</h2>
              <p className="text-muted-foreground">
                Персональный план на ближайшие 3 месяца
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="learning">Обучение</TabsTrigger>
                <TabsTrigger value="practice">Практика</TabsTrigger>
                <TabsTrigger value="mentoring">Менторство</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6 mt-8">
                {developmentPlan.map((category, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name={category.category === 'Обучение' ? 'BookOpen' : category.category === 'Практика' ? 'Code' : 'Users'} size={20} />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex-1">
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">До: {item.deadline}</p>
                          </div>
                          <Badge variant={item.priority === 'high' ? 'default' : 'secondary'}>
                            {item.priority === 'high' ? 'Высокий' : 'Средний'}
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {currentSection === 'resources' && (
          <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Ресурсы для развития</h2>
              <p className="text-muted-foreground">
                ИИ подобрал релевантные возможности для вашего роста
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, i) => (
                <Card key={i} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name={resource.icon as any} className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{resource.title}</CardTitle>
                        <div className="flex gap-2">
                          <Badge variant="outline">{resource.type}</Badge>
                          <Badge variant="secondary">{resource.duration}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {currentSection === 'chat' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={24} />
                  ИИ-консультант
                </CardTitle>
                <p className="text-sm text-muted-foreground">Задайте вопрос о карьерном развитии</p>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Какая роль мне подходит? Что развивать?"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage}>
                    <Icon name="Send" size={18} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      <button
        onClick={() => setCurrentSection('chat')}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        <Icon name="MessageCircle" size={24} />
      </button>
    </div>
  );
};

export default Index;
