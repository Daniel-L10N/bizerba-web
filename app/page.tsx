import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a 
            href="https://controlmodularmx.com" 
            rel="dofollow"
            className="text-xl font-bold text-slate-100 hover:text-blue-400 transition-colors"
          >
            Control Modular MX
          </a>
          <a 
            href="https://controlmodularmx.com" 
            rel="dofollow"
            className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
          >
            ← Visitar sitio principal
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-6 leading-tight">
              Tarjetas de Control para Rebanadoras Bizerba: Solución Definitiva
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
              Reemplazo directo y mejorado para los números de parte OEM 60385075102 y 60377330156. 
              No detengas tu producción, tenemos la refacción que necesitas.
            </p>
            <div className="mb-8">
              <span className="inline-block bg-blue-600/20 border border-blue-500 text-blue-400 px-6 py-2 rounded-full text-lg font-semibold">
                💰 Precio especial: <span className="text-2xl font-bold text-blue-300">$6,999 MXN</span>
              </span>
            </div>
            <a
              href="https://wa.me/525525686595?text=Hola,%20me%20interesa%20la%20tarjeta%20de%20control%20Bizerba%20(60385075102/60377330156)%20-%20Precio:%204,999%20MXN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-slate-900 font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-green-500/25"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar ahora por WhatsApp
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 text-center mb-12">
              ¿Por qué elegir nuestra tarjeta de reemplazo?
            </h2>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex items-start gap-3 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-slate-100">Compatibilidad total</strong>
                  <p className="text-slate-400 text-sm">Diseñada específicamente para los modelos Bizerba OEM 60385075102 y 60377330156</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-slate-100">Componentes de grado industrial</strong>
                  <p className="text-slate-400 text-sm">Solo usamos componentes de primera calidad para máxima durabilidad</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-slate-100">Diseño de circuito optimizado</strong>
                  <p className="text-slate-400 text-sm">Circuito mejorado para mayor vida útil y rendimiento estable</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-slate-800 rounded-lg border border-slate-700">
                <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-slate-100">Soporte técnico especializado</strong>
                  <p className="text-slate-400 text-sm">Ingenieros especializados para asesorarte en la instalación</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Product Gallery / Compatibility */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 text-center mb-4">
              Compatibilidad Exacta
            </h2>
            <p className="text-slate-400 text-center mb-8">
              Números de parte compatibles: <strong className="text-blue-400">60385075102</strong> y <strong className="text-blue-400">60377330156</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <article className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                <div className="aspect-square bg-slate-700 flex items-center justify-center p-4">
                  <img 
                    src="/bizerba-60385.75102.jpg" 
                    alt="Tarjeta electrónica de repuesto para rebanadora Bizerba 60385075102"
                    className="max-w-full max-h-full object-contain rounded"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-300 mb-2">Tarjeta electrónica de repuesto para rebanadora Bizerba 60385075102</p>
                  <p className="text-xl font-bold text-blue-400">$4,999 MXN</p>
                </div>
              </article>
              <article className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                <div className="aspect-square bg-slate-700 flex items-center justify-center p-4">
                  <img 
                    src="/bizerba-60377330156.png" 
                    alt="Placa de control PCB 60377330156 para rebanadora industrial"
                    className="max-w-full max-h-full object-contain rounded"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-300 mb-2">Placa de control PCB 60377330156 para rebanadora industrial</p>
                  <p className="text-xl font-bold text-blue-400">$6,999 MXN</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 text-center mb-12">
              Proceso de Compra Simple
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Contáctanos por WhatsApp</h3>
                <p className="text-slate-400 text-sm">Escríbenos con el modelo de tu máquina y te cotizamos inmediatamente</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Confirma el modelo</h3>
                <p className="text-slate-400 text-sm">Nuestro equipo técnico verifica compatibilidad y confirma disponibilidad</p>
              </article>
              <article className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Envío seguro a todo México</h3>
                <p className="text-slate-400 text-sm">Embalaje especializado para refacciones electrónicas industriales</p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
              ¿Necesitas esta refacción hoy?
            </h2>
            <p className="text-slate-300 mb-8">
              No dejes que una tarjeta dañada detenga tu producción. Contáctanos ahora y te ayudamos a encontrar la solución correcta.
            </p>
            <a
              href="https://wa.me/525525686595?text=Hola,%20me%20interesa%20la%20tarjeta%20de%20control%20Bizerba%20(60385075102/60377330156)%20-%20Precio:%204,999%20MXN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-slate-900 font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-green-500/25"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar ahora por WhatsApp
            </a>
          </div>
        </section>

        {/* FAQ Section - SEO Optimized */}
        <section className="py-16 px-4 bg-slate-800/50" id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 text-center mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-slate-400 text-center mb-12">
              Resolvemos tus dudas sobre las tarjetas de control Bizerba
            </p>
            
            <div className="space-y-4">
              <details className="group bg-slate-800 rounded-lg border border-slate-700">
                <summary className="flex items-center justify-between cursor-pointer p-4 font-semibold text-slate-100">
                  ¿Cómo sé si mi rebanadora Bizerba necesita un reemplazo de tarjeta de control?
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-slate-400">
                  <p>Los síntomas más comunes incluyen: la máquina no enciende, el panel de control no responde, errores intermitentes en la pantalla, o el motor se detiene inesperadamente. Si tu rebanadora presenta alguno de estos síntomas, es probable que la tarjeta electrónica esté dañada.</p>
                </div>
              </details>

              <details className="group bg-slate-800 rounded-lg border border-slate-700">
                <summary className="flex items-center justify-between cursor-pointer p-4 font-semibold text-slate-100">
                  ¿Las tarjetas son compatibles con cualquier modelo de rebanadora Bizerba?
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-slate-400">
                  <p>Nuestras tarjetas de reemplazo son compatibles específicamente con los números de parte OEM 60385075102 y 60377330156. Contáctanos con el modelo de tu máquina para confirmar compatibilidad.</p>
                </div>
              </details>

              <details className="group bg-slate-800 rounded-lg border border-slate-700">
                <summary className="flex items-center justify-between cursor-pointer p-4 font-semibold text-slate-100">
                  ¿Ofrecen garantía en las tarjetas de control?
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-slate-400">
                  <p>Sí, todas nuestras tarjetas de control incluyen garantía de fabricación. Además, nuestro equipo técnico te asesora durante todo el proceso de instalación para asegurar el correcto funcionamiento.</p>
                </div>
              </details>

              <details className="group bg-slate-800 rounded-lg border border-slate-700">
                <summary className="flex items-center justify-between cursor-pointer p-4 font-semibold text-slate-100">
                  ¿Cuánto tiempo dura el envío a cualquier parte de México?
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-slate-400">
                  <p>Los envíos se realizan en 2-5 días hábiles a cualquier punto de México. Utilizamos embalaje especializado para refacciones electrónicas industriales.</p>
                </div>
              </details>

              <details className="group bg-slate-800 rounded-lg border border-slate-700">
                <summary className="flex items-center justify-between cursor-pointer p-4 font-semibold text-slate-100">
                  ¿Puedo instalar la tarjeta yo mismo o necesito un técnico?
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-slate-400">
                  <p>Si tienes experiencia en electrónica industrial, puedes instalar la tarjeta siguiendo nuestras instrucciones. Si prefieres, nuestro equipo técnico puede orientarte paso a paso por WhatsApp.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 Control Modular MX. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://controlmodularmx.com" rel="dofollow" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Sitio principal
            </a>
            <a href="https://wa.me/525525686595" className="text-slate-400 hover:text-green-400 text-sm transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  )
}
