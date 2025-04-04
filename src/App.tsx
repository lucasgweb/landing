import React, { useState } from 'react';
import { FileText, Truck, Receipt, FileCheck, Shield, Zap, Clock, Database, Menu, X } from 'lucide-react';
import dayjs from 'dayjs';

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-300 hover:text-white transition-colors">
      {children}
    </a>
  );
}

function ServiceCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PriceCard({ plan, price, features, popular = false }: { plan: string, price: string, features: string[], popular?: boolean }) {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative ${popular ? 'border-2 border-primary' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">Mais Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan}</h3>
      <p className="text-4xl font-bold mb-2 text-gray-900">R$ {price}<span className="text-sm text-gray-500">/mês</span></p>
      <p className="text-gray-500 mb-6 text-sm">Faturamento mensal</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <FileCheck className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-lg transition-colors font-bold ${popular
        ? 'bg-primary hover:bg-primary-dark text-white'
        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}>
        Começar Agora
      </button>
      {popular && (
        <p className="text-center text-sm text-gray-500 mt-4">
          Teste grátis por 14 dias
        </p>
      )}
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b  from-secondary to-secondary-light text-white">
      {/* Header */}
      <nav className="bg-secondary/95 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-primary" />
              <span className="ml-2 text-xl font-bold">PlugNFe</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#servicos">Serviços</NavLink>
              <NavLink href="#documentacao">Documentação</NavLink>
              <NavLink href="#precos">Preços</NavLink>
              <button className="bg-transparent hover:bg-primary-dark border border-primary text-white px-4 py-2 rounded-lg transition-colors">
                Login
              </button>
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors">
                Cadastre-se
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 flex flex-col">
              <NavLink href="#servicos">Serviços</NavLink>
              <NavLink href="#documentacao">Documentação</NavLink>
              <NavLink href="#precos">Preços</NavLink>
              <div className="space-y-2">
                <button className="w-full bg-transparent hover:bg-primary-dark border border-primary text-white px-4 py-2 rounded-lg transition-colors">
                  Login
                </button>
                <button className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors">
                  Cadastre-se
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative">
        <div className="absolute inset-0 bg-cover bg-center">
          <div className="absolute inset-0  bg-secondary"></div>
        </div>
        <div className="relative container mx-auto px-4 pt-32 pb-20 text-center max-w-screen-lg">
          <h1 className="md:text-6xl  text-4xl font-bold mb-6 ">
            <span className="text-primary">PlugNFe</span> - Sua Solução Completa em Notas Fiscais
          </h1>
          <p className="md:text-xl text-md mb-12 max-w-2xl mx-auto">
            Emita e gerencie todos os seus documentos fiscais de forma simples e segura através de nossas APIs.
            Integração rápida, suporte especializado e conformidade garantida com a legislação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Comece Gratuitamente
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Agende uma Demo
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicos" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="md:text-4xl  text-3xl font-bold text-center text-gray-900 mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={FileText}
              title="NFe"
              description="Emissão de notas fiscais eletrônicas modelo 55 para produtos. Suporte completo ao ciclo de vida do documento."
            />
            <ServiceCard
              icon={Receipt}
              title="NFSe"
              description="Emissão de notas fiscais de serviço para múltiplas cidades. Integração com mais de 500 municípios."
            />
            <ServiceCard
              icon={Truck}
              title="CTe"
              description="Conhecimento de transporte eletrônico integrado com validação automática e conformidade fiscal."
            />
            <ServiceCard
              icon={FileText}
              title="NFCe"
              description="Nota Fiscal do Consumidor Eletrônica para varejo com geração de QR Code e DANFE simplificada."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="md:text-4xl text-3xl font-bold text-center mb-12">Recursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Segurança</h3>
              <p className="text-gray-300">Dados criptografados e backup automático. Certificação SSL e conformidade com LGPD.</p>
            </div>
            <div>
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Alta Performance</h3>
              <p className="text-gray-300">APIs rápidas e eficientes com 99.9% de uptime garantido.</p>
            </div>
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">24/7 Online</h3>
              <p className="text-gray-300">Suporte técnico especializado disponível 24 horas por dia, 7 dias por semana.</p>
            </div>
            <div>
              <Database className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Escalável</h3>
              <p className="text-gray-300">Infraestrutura robusta que cresce com seu negócio. Sem limites de expansão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Preview Section */}
      <section id="documentacao" className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="md:text-4xl text-3xl font-bold text-center mb-12">Documentação Clara e Objetiva</h2>
          <div className="bg-secondary-light p-8 rounded-lg max-w-3xl mx-auto">
            <pre className="text-gray-300 overflow-x-auto">
              <code>{`// Exemplo de emissão de NFe
const response = await plugnfe.nfe.create({
  destinatario: {
    nome: "Cliente Exemplo",
    cnpj: "00000000000000"
  },
  items: [
    {
      descricao: "Produto A",
      quantidade: 1,
      valor_unitario: 100.00
    }
  ]
});`}</code>
            </pre>
            <div className="mt-8 text-center">
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Ver Documentação Completa
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="md:text-4xl text-3xl font-bold text-center text-gray-900 mb-4">Planos e Preços</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos os planos incluem acesso à nossa API REST e suporte técnico especializado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PriceCard
              plan="Starter"
              price="299"
              features={[
                "Até 200 notas/mês",
                "NFe e NFSe",
                "1 Certificado Digital A1",
                "Suporte por email",
                "API REST",
                "Ambiente de homologação",
                "Dashboard básico",
                "Validação de documentos",
                "Armazenamento por 5 anos",
                "1 usuário"
              ]}
            />
            <PriceCard
              plan="Business"
              price="599"
              popular={true}
              features={[
                "Até 1000 notas/mês",
                "NFe, NFSe, CTe e NFCe",
                "3 Certificados Digitais A1",
                "Suporte prioritário 12/5",
                "API REST e SDK",
                "Webhooks",
                "Dashboard avançado",
                "Relatórios personalizados",
                "Armazenamento ilimitado",
                "5 usuários"
              ]}
            />
            <PriceCard
              plan="Enterprise"
              price="1499"
              features={[
                "Notas ilimitadas",
                "Todos os documentos fiscais",
                "Certificados Digitais ilimitados",
                "Suporte 24/7 dedicado",
                "API personalizada",
                "Integrações customizadas",
                "BI e Analytics",
                "SLA garantido",
                "Ambiente dedicado",
                "Usuários ilimitados"
              ]}
            />
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Precisa de um plano personalizado?</p>
            <button className="bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Fale com nossa equipe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PlugNFe</h3>
              <p className="text-gray-400">Sua solução completa para documentos fiscais eletrônicos.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Produtos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>NFe</li>
                <li>NFSe</li>
                <li>CTe</li>
                <li>NFCe</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentação</li>
                <li>API Reference</li>
                <li>Status Page</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Suporte</li>
                <li>Vendas</li>
                <li>Parcerias</li>
                <li>Sobre nós</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {dayjs().get('year')} PlugNFe. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;