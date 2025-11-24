import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    {
      title: 'Массаж лица',
      description: 'Лимфодренажный, скульптурный, anti-age массаж для сияния кожи',
      price: 'от 3 500 ₽',
      icon: 'Sparkles'
    },
    {
      title: 'Массаж тела',
      description: 'Расслабляющий, антицеллюлитный, коррекция фигуры',
      price: 'от 5 000 ₽',
      icon: 'Heart'
    },
    {
      title: 'Уходовые процедуры',
      description: 'Персональные программы ухода за лицом и телом',
      price: 'от 4 000 ₽',
      icon: 'Flower2'
    },
    {
      title: 'Комплексные программы',
      description: 'Индивидуальные курсы для достижения ваших целей',
      price: 'от 15 000 ₽',
      icon: 'Crown'
    }
  ];

  const gallery = [
    { id: 1, alt: 'Результат процедуры 1' },
    { id: 2, alt: 'Результат процедуры 2' },
    { id: 3, alt: 'Результат процедуры 3' },
    { id: 4, alt: 'Интерьер салона' },
    { id: 5, alt: 'Процесс работы' },
    { id: 6, alt: 'Результат процедуры 4' }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Невероятный результат после курса массажа лица! Кожа стала упругой, исчезли отёки. Мастер подобрала индивидуальную программу.',
      rating: 5
    },
    {
      name: 'Елена Смирнова',
      text: 'Профессионализм на высшем уровне. Атмосфера располагает к расслаблению, а результат превзошёл ожидания.',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      text: 'Хожу на антицеллюлитный массаж уже 3 месяца. Результат заметен! Индивидуальный подход и забота о каждом клиенте.',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-serif leading-tight">
            <div className="font-bold tracking-tight" style={{ color: '#B8860B' }}>МОЛОДОСТЬ БЕЗ УКОЛОВ</div>
            <div className="text-primary">ИРИНЫ САДОВСКОЙ</div>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="story-link text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="story-link text-sm hover:text-primary transition-colors">Цены</a>
            <a href="#gallery" className="story-link text-sm hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="story-link text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#about" className="story-link text-sm hover:text-primary transition-colors">О нас</a>
            <Button asChild size="sm">
              <a href="#contact">Записаться</a>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-4 text-primary">
              <Icon name="Sparkles" size={32} />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-foreground">
              Эстетическая косметология
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Индивидуальный подход к красоте и здоровью вашей кожи
            </p>
            <Button asChild size="lg" className="hover-scale">
              <a href="#contact">Записаться на консультацию</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессиональные процедуры для лица и тела с использованием премиальных средств
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-scale animate-fade-in border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 text-primary">
                    <Icon name={service.icon} size={40} />
                  </div>
                  <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-xl font-semibold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Прайс-лист</h2>
            <p className="text-muted-foreground">Прозрачное ценообразование и гибкие пакеты услуг</p>
          </div>
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <h4 className="font-semibold text-lg">Лимфодренажный массаж лица</h4>
                    <p className="text-sm text-muted-foreground">45 минут</p>
                  </div>
                  <span className="text-xl font-semibold text-primary">3 500 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <h4 className="font-semibold text-lg">Скульптурный массаж лица</h4>
                    <p className="text-sm text-muted-foreground">60 минут</p>
                  </div>
                  <span className="text-xl font-semibold text-primary">4 500 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <h4 className="font-semibold text-lg">Антицеллюлитный массаж тела</h4>
                    <p className="text-sm text-muted-foreground">90 минут</p>
                  </div>
                  <span className="text-xl font-semibold text-primary">5 500 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <h4 className="font-semibold text-lg">Расслабляющий массаж тела</h4>
                    <p className="text-sm text-muted-foreground">90 минут</p>
                  </div>
                  <span className="text-xl font-semibold text-primary">5 000 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <h4 className="font-semibold text-lg">Комплексный уход за лицом</h4>
                    <p className="text-sm text-muted-foreground">90 минут</p>
                  </div>
                  <span className="text-xl font-semibold text-primary">6 000 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-lg">Курс из 10 процедур</h4>
                    <p className="text-sm text-muted-foreground">Индивидуальная программа</p>
                  </div>
                  <span className="text-xl font-semibold text-primary">от 35 000 ₽</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Галерея работ</h2>
            <p className="text-muted-foreground">Результаты наших процедур говорят сами за себя</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item, index) => (
              <div 
                key={item.id}
                className="aspect-square bg-muted rounded-lg overflow-hidden hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <Icon name="Image" size={48} className="text-primary/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground">Нам доверяют свою красоту</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="hover-scale animate-fade-in border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4 text-primary">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">О нас</h2>
            <div className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              <p>
                Belle Visage — это пространство, где красота встречается с профессионализмом. 
                Мы специализируемся на эстетической косметологии и массажах для лица и тела.
              </p>
              <p>
                Наша философия — индивидуальный подход к каждому клиенту. Мы создаём персональные 
                программы ухода, учитывая особенности вашей кожи, образ жизни и желаемый результат.
              </p>
              <p>
                Используем только премиальные средства и современные техники массажа, 
                чтобы вы получили максимальный эффект и удовольствие от каждой процедуры.
              </p>
              <div className="flex justify-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-serif text-primary mb-2">5+</div>
                  <div className="text-sm">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif text-primary mb-2">500+</div>
                  <div className="text-sm">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif text-primary mb-2">100%</div>
                  <div className="text-sm">результат</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Запись на процедуру</h2>
            <p className="text-muted-foreground">Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Анна Петрова"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Интересующая услуга</label>
                    <Input 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      placeholder="Массаж лица"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о ваших пожеланиях"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="border-primary/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="text-primary">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 10</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="text-primary">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="text-primary">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Часы работы</h4>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 21:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 11:00 - 19:00</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="text-primary">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@bellevisage.ru</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/50 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-serif text-primary">Belle Visage</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Belle Visage. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;