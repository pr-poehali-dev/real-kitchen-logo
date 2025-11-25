import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] via-background to-[#FFF8F0] flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Презентация логотипа
          </h1>
          <p className="text-xl text-muted-foreground">
            "Настоящая кухня" — бренд вашей мечты
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-12 flex items-center justify-center bg-white hover:shadow-2xl transition-all duration-300 hover-scale">
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://cdn.poehali.dev/projects/24b53bad-c039-4081-8e95-ea3d644714e5/files/61c5edf8-2bf8-413c-ac98-8db2ecc37866.jpg" 
                  alt="Логотип" 
                  className="w-32 h-32 mx-auto rounded-2xl shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Настоящая кухня
              </h2>
              <p className="text-muted-foreground text-sm tracking-wider">
                КАЧЕСТВО • УЮТ • ТРАДИЦИИ
              </p>
            </div>
          </Card>

          <Card className="p-12 flex items-center justify-center bg-gradient-to-br from-primary to-accent hover:shadow-2xl transition-all duration-300 hover-scale">
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://cdn.poehali.dev/projects/24b53bad-c039-4081-8e95-ea3d644714e5/files/61c5edf8-2bf8-413c-ac98-8db2ecc37866.jpg" 
                  alt="Логотип" 
                  className="w-32 h-32 mx-auto rounded-2xl shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Настоящая кухня
              </h2>
              <p className="text-white/90 text-sm tracking-wider">
                КАЧЕСТВО • УЮТ • ТРАДИЦИИ
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 bg-white/80 backdrop-blur hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/projects/24b53bad-c039-4081-8e95-ea3d644714e5/files/61c5edf8-2bf8-413c-ac98-8db2ecc37866.jpg" 
                  alt="Иконка" 
                  className="w-12 h-12 rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Настоящая кухня
                </h3>
                <p className="text-xs text-muted-foreground">Горизонтальный формат</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white/80 backdrop-blur hover:shadow-lg transition-all">
            <div className="text-center">
              <img 
                src="https://cdn.poehali.dev/projects/24b53bad-c039-4081-8e95-ea3d644714e5/files/61c5edf8-2bf8-413c-ac98-8db2ecc37866.jpg" 
                alt="Иконка" 
                className="w-20 h-20 mx-auto rounded-xl mb-3"
              />
              <h3 className="font-bold text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Настоящая<br/>кухня
              </h3>
              <p className="text-xs text-muted-foreground mt-2">Вертикальный формат</p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur hover:shadow-lg transition-all">
            <div className="flex flex-col items-center">
              <img 
                src="https://cdn.poehali.dev/projects/24b53bad-c039-4081-8e95-ea3d644714e5/files/61c5edf8-2bf8-413c-ac98-8db2ecc37866.jpg" 
                alt="Иконка" 
                className="w-16 h-16 rounded-xl mb-4"
              />
              <p className="text-xs text-muted-foreground text-center">Только иконка<br/>для соцсетей</p>
            </div>
          </Card>
        </div>

        <div className="mt-16 space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-primary">Применение логотипа</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white hover:shadow-xl transition-all">
              <h4 className="text-lg font-bold mb-6 text-foreground flex items-center gap-2">
                <span className="text-2xl">💼</span> Визитная карточка
              </h4>
              <div className="bg-gradient-to-br from-[#F5E6D3] to-white p-6 rounded-xl border-2 border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/24b53bad-c039-4081-8e95-ea3d644714e5/files/61c5edf8-2bf8-413c-ac98-8db2ecc37866.jpg" 
                    alt="Логотип" 
                    className="w-16 h-16 rounded-lg"
                  />
                  <div>
                    <h5 className="text-xl font-bold text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Настоящая кухня
                    </h5>
                    <p className="text-xs text-muted-foreground">Мебель для вашего дома</p>
                  </div>
                </div>
                <div className="border-t border-primary/20 pt-4 space-y-1 text-sm text-muted-foreground">
                  <p>📞 +7 (XXX) XXX-XX-XX</p>
                  <p>📧 info@real-kitchen.ru</p>
                  <p>📍 г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white hover:shadow-xl transition-all">
              <h4 className="text-lg font-bold mb-6 text-foreground flex items-center gap-2">
                <span className="text-2xl">🏪</span> Вывеска магазина
              </h4>
              <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-xl shadow-2xl">
                <div className="text-center">
                  <img 
                    src="https://cdn.poehali.dev/projects/24b53bad-c039-4081-8e95-ea3d644714e5/files/61c5edf8-2bf8-413c-ac98-8db2ecc37866.jpg" 
                    alt="Логотип" 
                    className="w-24 h-24 mx-auto rounded-2xl mb-4 shadow-lg"
                  />
                  <h5 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Настоящая кухня
                  </h5>
                  <p className="text-white/90 text-sm tracking-widest">МЕБЕЛЬ ДЛЯ ДОМА</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white hover:shadow-lg transition-all">
              <h5 className="font-bold mb-4 text-center">Для документов</h5>
              <div className="bg-white border-2 border-foreground p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/24b53bad-c039-4081-8e95-ea3d644714e5/files/61c5edf8-2bf8-413c-ac98-8db2ecc37866.jpg" 
                    alt="Логотип" 
                    className="w-12 h-12 rounded-lg"
                  />
                  <span className="text-sm font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Настоящая кухня</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-all">
              <h5 className="font-bold mb-4 text-center">Для упаковки</h5>
              <div className="bg-[#F5E6D3] p-4 rounded-lg">
                <div className="text-center">
                  <img 
                    src="https://cdn.poehali.dev/projects/24b53bad-c039-4081-8e95-ea3d644714e5/files/61c5edf8-2bf8-413c-ac98-8db2ecc37866.jpg" 
                    alt="Логотип" 
                    className="w-16 h-16 mx-auto rounded-lg mb-2"
                  />
                  <p className="text-xs font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Настоящая кухня</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 hover:shadow-lg transition-all">
              <h5 className="font-bold mb-4 text-center">Монохромная версия</h5>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-lg mb-2 bg-foreground flex items-center justify-center">
                    <span className="text-2xl">🍳</span>
                  </div>
                  <p className="text-xs font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Настоящая кухня</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-block p-8 bg-white/60 backdrop-blur">
              <h3 className="text-2xl font-bold mb-4 text-primary">Цветовая палитра</h3>
              <div className="flex gap-4 justify-center flex-wrap">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-xl bg-[#D2691E] shadow-lg mb-2"></div>
                  <p className="text-xs font-mono">#D2691E</p>
                  <p className="text-xs text-muted-foreground">Терракота</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-xl bg-[#8B4513] shadow-lg mb-2"></div>
                  <p className="text-xs font-mono">#8B4513</p>
                  <p className="text-xs text-muted-foreground">Шоколад</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-xl bg-[#F5E6D3] shadow-lg mb-2 border-2 border-primary/20"></div>
                  <p className="text-xs font-mono">#F5E6D3</p>
                  <p className="text-xs text-muted-foreground">Беж</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-xl bg-[#2C1810] shadow-lg mb-2"></div>
                  <p className="text-xs font-mono">#2C1810</p>
                  <p className="text-xs text-muted-foreground">Тёмный</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;