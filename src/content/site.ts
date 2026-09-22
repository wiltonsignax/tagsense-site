export type Locale = 'pt' | 'en' | 'es'
export type ModuleKey = 'receive' | 'inventory' | 'drone' | 'tunnel' | 'dock' | 'load' | 'connect' | 'analytics'

export const locales: Locale[] = ['pt', 'en', 'es']

export const localeLabels: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
}

export const routeSlugs: Record<Locale, Record<string, string>> = {
  pt: {
    home: '', platform: 'plataforma', how: 'como-funciona', technology: 'tecnologia', benefits: 'beneficios', implementation: 'implantacao', investors: 'investidores', about: 'sobre', contact: 'contato', modules: 'modulos'
  },
  en: {
    home: '', platform: 'platform', how: 'how-it-works', technology: 'technology', benefits: 'benefits', implementation: 'deployment', investors: 'investors', about: 'about', contact: 'contact', modules: 'modules'
  },
  es: {
    home: '', platform: 'plataforma', how: 'como-funciona', technology: 'tecnologia', benefits: 'beneficios', implementation: 'implementacion', investors: 'inversores', about: 'nosotros', contact: 'contacto', modules: 'modulos'
  },
}

export const modules: ModuleKey[] = ['receive', 'inventory', 'drone', 'tunnel', 'dock', 'load', 'connect', 'analytics']

export const site = {
  pt: {
    meta: {
      title: 'TagSense | Inteligência RFID para logística',
      description: 'Inteligência RFID para auditoria, rastreabilidade e automação logística do recebimento à expedição.'
    },
    nav: {
      platform: 'Plataforma', solutions: 'Soluções', how: 'Como funciona', technology: 'Tecnologia', benefits: 'Benefícios', investors: 'Investidores', about: 'Empresa', contact: 'Contato', demo: 'Agende uma demonstração'
    },
    hero: {
      kicker: 'INTELIGÊNCIA RFID PARA LOGÍSTICA',
      title: 'Inteligência RFID para uma logística que enxerga o mundo real.',
      subtitle: 'Do recebimento à expedição, a TagSense transforma cada movimentação física em dados confiáveis, auditáveis e acionáveis.',
      primary: 'Agende uma demonstração',
      secondary: 'Conheça a plataforma',
      chips: ['Visibilidade', 'Eficiência', 'Resultados']
    },
    thesis: {
      title: 'O sistema informa o que deveria acontecer.',
      highlight: 'A TagSense confirma o que realmente aconteceu.',
      body: 'Criamos uma camada de verdade física entre WMS, ERP, TMS e a operação real do centro de distribuição.'
    },
    gaps: {
      eyebrow: 'AS LACUNAS QUE FECHAMOS',
      title: 'Da baixa visibilidade à conferência automatizada em tempo real.',
      problems: [
        'Recebimento sem rastreabilidade imediata',
        'Divergência entre estoque físico e WMS',
        'Inventários lentos e manuais',
        'Erros na separação de fracionados',
        'Risco de carga na doca ou caminhão errado',
        'Falta de histórico e auditoria confiável'
      ],
      solutions: [
        'Etiquetagem e rastreabilidade desde a entrada',
        'Estoque auditável e confrontado com o WMS',
        'Inventário com coletor e drone RFID',
        'Túnel RFID para validar SKU e quantidade',
        'Doca inteligente com alerta em tempo real',
        'Histórico completo de eventos físicos'
      ]
    },
    platform: {
      eyebrow: 'PLATAFORMA TAGSENSE',
      title: 'Uma plataforma para toda a operação.',
      subtitle: 'Um núcleo tecnológico único para receber, interpretar e transformar eventos RFID em decisões operacionais.'
    },
    flow: {
      eyebrow: 'FLUXO DE PONTA A PONTA',
      title: 'Acompanhe a mercadoria do recebimento à expedição.',
      steps: [
        ['Recebimento', 'Entrada e identificação'],
        ['Etiquetagem RFID', 'Criação da identidade física'],
        ['Estoque / Pulmão', 'Estoque pronto para auditoria'],
        ['Inventário', 'Validação física recorrente'],
        ['Separação', 'Pedido em preparação'],
        ['Túnel RFID', 'SKU e quantidade validados'],
        ['Consolidação', 'Carga preparada'],
        ['Doca', 'Conferência em tempo real'],
        ['Caminhão', 'Carga final validada'],
        ['Expedição', 'Saída auditada']
      ]
    },
    architecture: {
      eyebrow: 'ARQUITETURA INTEGRADA',
      title: 'Entre os sistemas de gestão e a operação física.',
      subtitle: 'A TagSense integra dados corporativos, processamento local e dispositivos RFID sem substituir o WMS.',
      systems: 'WMS / ERP / TMS',
      connect: 'Integração segura e bidirecional',
      cloud: 'Gestão, regras, dashboards, analytics e auditoria',
      edge: 'Processamento local, cache, alertas e regras locais',
      devices: 'Leitores RFID · Portal de Doca · Túnel RFID · Impressora RFID · Coletores · Drone RFID'
    },
    benefitSection: {
      eyebrow: 'RESULTADOS PARA A OPERAÇÃO',
      title: 'Mais controle, mais produtividade e mais confiança logística.',
      cards: [
        ['Menos erros de expedição', 'Conferência automatizada para detectar divergências antes da saída.'],
        ['Conferência mais rápida', 'Leitura simultânea de múltiplos volumes sem depender de linha de visada.'],
        ['Mais visibilidade', 'Acompanhamento em tempo real do fluxo físico.'],
        ['Inventário mais confiável', 'Mais frequência de validação com menos esforço operacional.'],
        ['Menos retrabalho', 'Erros identificados no momento em que acontecem.'],
        ['Rastreabilidade ponta a ponta', 'Histórico completo e auditável desde a entrada até a expedição.']
      ]
    },
    implementation: {
      eyebrow: 'LAND & EXPAND',
      title: 'Comece por uma dor mensurável. Expanda conforme o valor é comprovado.',
      phases: [
        ['01', 'Diagnóstico', 'Mapeamento do fluxo, infraestrutura e indicadores atuais.'],
        ['02', 'Piloto em 1 doca', 'Validação técnica e operacional com escopo controlado.'],
        ['03', 'Expansão do Dock', 'Escala por docas, CDs e operações.'],
        ['04', 'Novos módulos', 'Receive, Tunnel, Inventory e demais módulos.'],
        ['05', 'Visão avançada', 'Drone RFID, analytics e automação ampliada.']
      ]
    },
    modules: {
      receive: { name: 'Receive', short: 'Etiquetagem e entrada de mercadorias', headline: 'Rastreabilidade começa no recebimento.', gap: 'Mercadoria recebida sem uma identidade física persistente.', capabilities: ['Registrar entrada de mercadorias', 'Associar EPC/tag a SKU, lote, volume, fornecedor e pedido', 'Imprimir e codificar etiquetas RFID', 'Criar rastreabilidade desde a entrada', 'Preparar estoque para inventário automatizado'] },
      inventory: { name: 'Inventory', short: 'Auditoria de estoque e pulmão', headline: 'Valide o estoque físico com mais frequência.', gap: 'Dependência de inventários manuais e baixa frequência de validação física.', capabilities: ['Auditar estoque físico', 'Comparar estoque real × WMS', 'Ler com coletores, leitores móveis e fixos', 'Executar inventários cíclicos', 'Registrar divergências e histórico'] },
      drone: { name: 'Drone', short: 'Inventário automatizado com drone RFID', headline: 'Leve o inventário RFID para os corredores do CD.', gap: 'Inventários extensos, caros e difíceis de executar com frequência.', capabilities: ['Drone equipado com leitor e antenas RFID', 'Percorrer corredores e posições', 'Localizar e contar EPCs', 'Confrontar leituras com o WMS', 'Roadmap para autonomia e fusão RFID + visão computacional'], roadmap: 'Módulo em evolução. A estratégia prevê combinar RFID, visão computacional e autonomia progressiva.' },
      tunnel: { name: 'Tunnel', short: 'Conferência de produtos fracionados', headline: 'Valide SKU e quantidade em segundos.', gap: 'Conferência manual de produtos fracionados após a separação.', capabilities: ['Etiqueta individual por item', 'Leitura simultânea de múltiplos itens', 'Validação de SKU e quantidade', 'Detecção de faltante, excedente e incorreto', 'Aprovação ou bloqueio do pedido'] },
      dock: { name: 'Dock', short: 'Auditoria e validação das docas', headline: 'Garanta que o caminhão certo saia com a carga certa.', gap: 'Risco de volumes corretos seguirem para a doca ou caminhão errado.', capabilities: ['Receber a carga esperada do WMS', 'Associar carga + doca + veículo', 'Ler EPCs durante a passagem', 'Detectar correto, incorreto, duplicado e faltante', 'Gerar alerta em tempo real e status de carregamento', 'Criar histórico e auditoria'] },
      load: { name: 'Load', short: 'Conferência final do caminhão', headline: 'Libere a carga com evidência física consolidada.', gap: 'Carga final sem uma validação física consolidada antes da saída.', capabilities: ['Consolidar esperado × carregado', 'Mostrar faltantes, excedentes e divergências', 'Aplicar liberação lógica', 'Retornar status ao WMS/TMS', 'Manter trilha completa da carga'] },
      connect: { name: 'Connect', short: 'Integrações com WMS, ERP e TMS', headline: 'Conecte o mundo físico aos sistemas que sua operação já usa.', gap: 'Sistemas legados desconectados dos eventos físicos da operação.', capabilities: ['APIs e webhooks', 'Arquivos e EDI', 'Conexão bidirecional com WMS, ERP e TMS', 'Pedidos, notas, cargas e status', 'Eventos, confirmações e rastreabilidade', 'Arquitetura agnóstica ao sistema legado'] },
      analytics: { name: 'Analytics', short: 'Dashboards, indicadores e rastreabilidade', headline: 'Transforme eventos RFID em decisão operacional.', gap: 'Dados operacionais dispersos e pouca visibilidade executiva.', capabilities: ['Dashboards executivos e operacionais', 'Volumes conferidos e divergências detectadas', 'Cargas liberadas e tempos de conferência', 'Inventários realizados', 'Histórico de eventos', 'Visão futura de perdas evitadas e produtividade'] }
    },
    pages: {
      how: { title: 'Como a TagSense funciona', subtitle: 'O Event Engine transforma leituras RFID em eventos físicos confiáveis e acionáveis.' },
      technology: { title: 'Tecnologia preparada para a operação real', subtitle: 'RFID, Edge, Cloud, integração e rastreabilidade em uma arquitetura modular.' },
      benefits: { title: 'Benefícios para cada área da operação', subtitle: 'Diretoria, gestão do CD, TI e operação enxergam valor por ângulos diferentes.' },
      investors: { title: 'Uma tese de inteligência física para logística', subtitle: 'Software + RFID + Edge + dados + integração, com expansão modular dentro do cliente.' },
      about: { title: 'Tecnologia aplicada à logística real', subtitle: 'A TagSense nasce para tornar o fluxo físico tão confiável e auditável quanto o fluxo digital.' },
      contact: { title: 'Agende uma demonstração', subtitle: 'Conte sobre sua operação e vamos estruturar o melhor ponto de entrada para uma POC.' }
    },
    contact: {
      submit: 'Solicitar demonstração',
      consent: 'Concordo com o uso destes dados para contato comercial conforme a LGPD.',
      success: 'Solicitação recebida. Nossa equipe entrará em contato após a integração comercial estar ativa.',
      fields: ['Nome', 'Empresa', 'Cargo', 'E-mail corporativo', 'Telefone (opcional)', 'Tipo de operação', 'Nº de CDs', 'Nº aproximado de docas', 'WMS utilizado', 'Principal desafio', 'Interesse']
    },
    investors: {
      cards: [
        ['Visão', 'Construir a camada de inteligência física da logística.'],
        ['Tese', 'Software + RFID + Edge + dados + integração.'],
        ['Modelo de receita', 'Implantação + SaaS + hardware + consumíveis.'],
        ['Go-to-market', 'Land and Expand começando pela doca.'],
        ['Mercado-alvo', 'Operadores logísticos, distribuidores, atacadistas, indústria e varejo.'],
        ['Moat', 'Event Engine, integrações, base histórica, hardware agnóstico e implantação padronizada.']
      ]
    }
  },
  en: {
    meta: { title: 'TagSense | RFID intelligence for logistics', description: 'RFID intelligence for logistics auditing, traceability and automation from receiving to shipping.' },
    nav: { platform: 'Platform', solutions: 'Solutions', how: 'How it works', technology: 'Technology', benefits: 'Benefits', investors: 'Investors', about: 'Company', contact: 'Contact', demo: 'Book a demo' },
    hero: { kicker: 'RFID INTELLIGENCE FOR LOGISTICS', title: 'RFID intelligence for logistics that sees the real world.', subtitle: 'From receiving to shipping, TagSense turns every physical movement into reliable, auditable and actionable data.', primary: 'Book a demo', secondary: 'Explore the platform', chips: ['Visibility', 'Efficiency', 'Outcomes'] },
    thesis: { title: 'Your systems tell you what should happen.', highlight: 'TagSense confirms what actually happened.', body: 'We create a physical truth layer between WMS, ERP, TMS and the real distribution-center operation.' },
    gaps: { eyebrow: 'THE GAPS WE CLOSE', title: 'From limited visibility to automated real-time verification.', problems: ['Receiving without immediate traceability','Mismatch between physical stock and WMS','Slow manual inventories','Split-order picking errors','Risk of loading the wrong dock or truck','Lack of reliable audit history'], solutions: ['Tagging and traceability from inbound','Auditable inventory reconciled with WMS','Inventory with handhelds and RFID drones','RFID tunnel to validate SKU and quantity','Smart dock with real-time alerts','Complete physical event history'] },
    platform: { eyebrow: 'TAGSENSE PLATFORM', title: 'One platform for the entire operation.', subtitle: 'A single technology core to receive, interpret and turn RFID events into operational decisions.' },
    flow: { eyebrow: 'END-TO-END FLOW', title: 'Follow goods from receiving to shipping.', steps: [['Receiving','Inbound and identification'],['RFID tagging','Physical identity created'],['Stock / Reserve','Inventory ready for audit'],['Inventory','Recurring physical validation'],['Picking','Order preparation'],['RFID Tunnel','SKU and quantity validated'],['Consolidation','Load prepared'],['Dock','Real-time verification'],['Truck','Final load validated'],['Shipping','Audited departure']] },
    architecture: { eyebrow: 'INTEGRATED ARCHITECTURE', title: 'Between management systems and physical operations.', subtitle: 'TagSense integrates corporate data, local processing and RFID devices without replacing the WMS.', systems: 'WMS / ERP / TMS', connect: 'Secure bidirectional integration', cloud: 'Management, rules, dashboards, analytics and audit', edge: 'Local processing, cache, alerts and local rules', devices: 'RFID Readers · Dock Portal · RFID Tunnel · RFID Printer · Handhelds · RFID Drone' },
    benefitSection: { eyebrow: 'OPERATIONAL OUTCOMES', title: 'More control, more productivity and more confidence.', cards: [['Fewer shipping errors','Automated verification detects discrepancies before departure.'],['Faster verification','Read multiple items at once without line of sight.'],['More visibility','Real-time visibility into the physical flow.'],['More reliable inventory','Validate stock more often with less operational effort.'],['Less rework','Identify errors at the moment they occur.'],['End-to-end traceability','Complete auditable history from inbound to shipping.']] },
    implementation: { eyebrow: 'LAND & EXPAND', title: 'Start with a measurable pain point. Expand as value is proven.', phases: [['01','Diagnosis','Map flow, infrastructure and current KPIs.'],['02','Single-dock pilot','Validate technical and operational performance in a controlled scope.'],['03','Scale Dock','Expand across docks, DCs and operations.'],['04','Add modules','Receive, Tunnel, Inventory and additional modules.'],['05','Advanced vision','RFID drones, analytics and broader automation.']] },
    modules: {
      receive: { name:'Receive', short:'Inbound and RFID tagging', headline:'Traceability starts at receiving.', gap:'Inbound goods without a persistent physical identity.', capabilities:['Register inbound goods','Associate EPC/tag with SKU, lot, package, supplier and order','Print and encode RFID labels','Create traceability from inbound','Prepare stock for automated inventory'] },
      inventory: { name:'Inventory', short:'Stock and reserve auditing', headline:'Validate physical inventory more frequently.', gap:'Dependence on manual inventory and low-frequency physical validation.', capabilities:['Audit physical inventory','Compare actual stock vs WMS','Read with handheld, mobile and fixed readers','Run cycle counts','Record discrepancies and history'] },
      drone: { name:'Drone', short:'Automated inventory with RFID drones', headline:'Bring RFID inventory into warehouse aisles.', gap:'Large, costly inventories that are hard to execute frequently.', capabilities:['Drone equipped with RFID reader and antennas','Traverse aisles and storage locations','Locate and count EPCs','Compare reads against WMS','Roadmap for autonomy and RFID + computer vision fusion'], roadmap:'Roadmap module. The strategy combines RFID, computer vision and progressive autonomy.' },
      tunnel: { name:'Tunnel', short:'Split-order verification', headline:'Validate SKU and quantity in seconds.', gap:'Manual verification of split-order items after picking.', capabilities:['Individual item-level tagging','Simultaneous reading of multiple items','SKU and quantity validation','Detect missing, excess and wrong items','Approve or block the order'] },
      dock: { name:'Dock', short:'Dock auditing and validation', headline:'Make sure the right truck leaves with the right load.', gap:'Risk of the right package going to the wrong dock or truck.', capabilities:['Receive expected load from WMS','Associate load + dock + vehicle','Read EPCs during passage','Detect correct, wrong, duplicate and missing items','Trigger real-time alerts and load status','Create full audit history'] },
      load: { name:'Load', short:'Final truck-load verification', headline:'Release loads with consolidated physical evidence.', gap:'Final load leaving without consolidated physical validation.', capabilities:['Consolidate expected vs loaded','Show missing, excess and discrepancies','Apply logical release','Return status to WMS/TMS','Maintain complete load trail'] },
      connect: { name:'Connect', short:'WMS, ERP and TMS integrations', headline:'Connect the physical world to the systems you already use.', gap:'Legacy systems disconnected from physical operational events.', capabilities:['APIs and webhooks','Files and EDI','Bidirectional WMS, ERP and TMS connectivity','Orders, invoices, loads and statuses','Events, confirmations and traceability','Legacy-agnostic architecture'] },
      analytics: { name:'Analytics', short:'Dashboards, KPIs and traceability', headline:'Turn RFID events into operational decisions.', gap:'Fragmented operational data and limited executive visibility.', capabilities:['Executive and operational dashboards','Verified volumes and detected discrepancies','Released loads and verification time','Inventory counts completed','Event history','Future view of avoided losses and productivity'] }
    },
    pages: { how:{title:'How TagSense works',subtitle:'The Event Engine turns RFID reads into trusted, actionable physical events.'}, technology:{title:'Technology built for real operations',subtitle:'RFID, Edge, Cloud, integration and traceability in a modular architecture.'}, benefits:{title:'Benefits for every area of the operation',subtitle:'Executives, DC management, IT and operations each see value from a different angle.'}, investors:{title:'A physical-intelligence thesis for logistics',subtitle:'Software + RFID + Edge + data + integration, with modular expansion inside each customer.'}, about:{title:'Technology for real logistics',subtitle:'TagSense exists to make physical flow as trustworthy and auditable as digital flow.'}, contact:{title:'Book a demo',subtitle:'Tell us about your operation and we will structure the best entry point for a proof of concept.'} },
    contact: { submit:'Request a demo', consent:'I agree to the use of this data for commercial contact in accordance with applicable privacy laws.', success:'Request received. Our team will contact you once the commercial integration is active.', fields:['Name','Company','Role','Corporate email','Phone (optional)','Operation type','Number of DCs','Approx. docks','WMS used','Main challenge','Interest'] },
    investors: { cards:[['Vision','Build the physical-intelligence layer for logistics.'],['Thesis','Software + RFID + Edge + data + integration.'],['Revenue model','Deployment + SaaS + hardware + consumables.'],['Go-to-market','Land and Expand starting with the dock.'],['Target market','3PLs, distributors, wholesalers, industry and retail.'],['Moat','Event Engine, integrations, historical data, hardware agnosticism and standardized deployment.']] }
  },
  es: {
    meta: { title:'TagSense | Inteligencia RFID para logística', description:'Inteligencia RFID para auditoría, trazabilidad y automatización logística desde la recepción hasta la expedición.' },
    nav: { platform:'Plataforma', solutions:'Soluciones', how:'Cómo funciona', technology:'Tecnología', benefits:'Beneficios', investors:'Inversores', about:'Empresa', contact:'Contacto', demo:'Agenda una demo' },
    hero: { kicker:'INTELIGENCIA RFID PARA LOGÍSTICA', title:'Inteligencia RFID para una logística que ve el mundo real.', subtitle:'Desde la recepción hasta la expedición, TagSense transforma cada movimiento físico en datos confiables, auditables y accionables.', primary:'Agenda una demo', secondary:'Conoce la plataforma', chips:['Visibilidad','Eficiencia','Resultados'] },
    thesis: { title:'El sistema informa lo que debería ocurrir.', highlight:'TagSense confirma lo que realmente ocurrió.', body:'Creamos una capa de verdad física entre WMS, ERP, TMS y la operación real del centro de distribución.' },
    gaps: { eyebrow:'LAS BRECHAS QUE CERRAMOS', title:'De la baja visibilidad a la verificación automatizada en tiempo real.', problems:['Recepción sin trazabilidad inmediata','Divergencia entre stock físico y WMS','Inventarios lentos y manuales','Errores en la separación de fraccionados','Riesgo de carga en muelle o camión incorrecto','Falta de historial y auditoría confiable'], solutions:['Etiquetado y trazabilidad desde la entrada','Stock auditable comparado con WMS','Inventario con colector y dron RFID','Túnel RFID para validar SKU y cantidad','Muelle inteligente con alerta en tiempo real','Historial completo de eventos físicos'] },
    platform: { eyebrow:'PLATAFORMA TAGSENSE', title:'Una plataforma para toda la operación.', subtitle:'Un único núcleo tecnológico para recibir, interpretar y transformar eventos RFID en decisiones operativas.' },
    flow: { eyebrow:'FLUJO DE PUNTA A PUNTA', title:'Acompañe la mercancía desde la recepción hasta la expedición.', steps:[['Recepción','Entrada e identificación'],['Etiquetado RFID','Creación de identidad física'],['Stock / Reserva','Stock listo para auditoría'],['Inventario','Validación física recurrente'],['Separación','Preparación del pedido'],['Túnel RFID','SKU y cantidad validados'],['Consolidación','Carga preparada'],['Muelle','Conferencia en tiempo real'],['Camión','Carga final validada'],['Expedición','Salida auditada']] },
    architecture: { eyebrow:'ARQUITECTURA INTEGRADA', title:'Entre los sistemas de gestión y la operación física.', subtitle:'TagSense integra datos corporativos, procesamiento local y dispositivos RFID sin reemplazar el WMS.', systems:'WMS / ERP / TMS', connect:'Integración segura y bidireccional', cloud:'Gestión, reglas, dashboards, analytics y auditoría', edge:'Procesamiento local, caché, alertas y reglas locales', devices:'Lectores RFID · Portal de Muelle · Túnel RFID · Impresora RFID · Colectores · Dron RFID' },
    benefitSection: { eyebrow:'RESULTADOS PARA LA OPERACIÓN', title:'Más control, más productividad y más confianza logística.', cards:[['Menos errores de expedición','Verificación automatizada para detectar divergencias antes de la salida.'],['Conferencia más rápida','Lectura simultánea de múltiples volúmenes sin línea de visión.'],['Más visibilidad','Seguimiento en tiempo real del flujo físico.'],['Inventario más confiable','Más frecuencia de validación con menos esfuerzo operativo.'],['Menos retrabajo','Errores identificados en el momento en que ocurren.'],['Trazabilidad de punta a punta','Historial completo y auditable desde la entrada hasta la expedición.']] },
    implementation: { eyebrow:'LAND & EXPAND', title:'Empiece por un dolor medible. Expanda a medida que se demuestre el valor.', phases:[['01','Diagnóstico','Mapeo del flujo, infraestructura e indicadores actuales.'],['02','Piloto en 1 muelle','Validación técnica y operativa con alcance controlado.'],['03','Expansión de Dock','Escala por muelles, CDs y operaciones.'],['04','Nuevos módulos','Receive, Tunnel, Inventory y módulos adicionales.'],['05','Visión avanzada','Dron RFID, analytics y automatización ampliada.']] },
    modules: {
      receive: { name:'Receive', short:'Etiquetado y entrada de mercancías', headline:'La trazabilidad comienza en la recepción.', gap:'Mercancía recibida sin una identidad física persistente.', capabilities:['Registrar entrada de mercancías','Asociar EPC/tag a SKU, lote, volumen, proveedor y pedido','Imprimir y codificar etiquetas RFID','Crear trazabilidad desde la entrada','Preparar el stock para inventario automatizado'] },
      inventory: { name:'Inventory', short:'Auditoría de stock y reserva', headline:'Valide el inventario físico con mayor frecuencia.', gap:'Dependencia de inventarios manuales y baja frecuencia de validación física.', capabilities:['Auditar inventario físico','Comparar stock real × WMS','Leer con colectores, lectores móviles y fijos','Ejecutar inventarios cíclicos','Registrar divergencias e historial'] },
      drone: { name:'Drone', short:'Inventario automatizado con dron RFID', headline:'Lleve el inventario RFID a los pasillos del CD.', gap:'Inventarios extensos, costosos y difíciles de ejecutar con frecuencia.', capabilities:['Dron equipado con lector y antenas RFID','Recorrer pasillos y posiciones','Localizar y contar EPCs','Comparar lecturas con WMS','Roadmap para autonomía y fusión RFID + visión computacional'], roadmap:'Módulo en evolución. La estrategia combina RFID, visión computacional y autonomía progresiva.' },
      tunnel: { name:'Tunnel', short:'Conferencia de productos fraccionados', headline:'Valide SKU y cantidad en segundos.', gap:'Conferencia manual de productos fraccionados después de la separación.', capabilities:['Etiqueta individual por ítem','Lectura simultánea de múltiples ítems','Validación de SKU y cantidad','Detección de faltantes, excedentes e incorrectos','Aprobación o bloqueo del pedido'] },
      dock: { name:'Dock', short:'Auditoría y validación de muelles', headline:'Asegure que el camión correcto salga con la carga correcta.', gap:'Riesgo de que volúmenes correctos vayan al muelle o camión equivocado.', capabilities:['Recibir la carga esperada del WMS','Asociar carga + muelle + vehículo','Leer EPCs durante el paso','Detectar correctos, incorrectos, duplicados y faltantes','Generar alertas en tiempo real y estado de carga','Crear historial y auditoría'] },
      load: { name:'Load', short:'Conferencia final del camión', headline:'Libere la carga con evidencia física consolidada.', gap:'Carga final sin validación física consolidada antes de la salida.', capabilities:['Consolidar esperado × cargado','Mostrar faltantes, excedentes y divergencias','Aplicar liberación lógica','Retornar estado al WMS/TMS','Mantener trazabilidad completa de la carga'] },
      connect: { name:'Connect', short:'Integraciones con WMS, ERP y TMS', headline:'Conecte el mundo físico a los sistemas que su operación ya utiliza.', gap:'Sistemas heredados desconectados de los eventos físicos de la operación.', capabilities:['APIs y webhooks','Archivos y EDI','Conexión bidireccional con WMS, ERP y TMS','Pedidos, notas, cargas y estados','Eventos, confirmaciones y trazabilidad','Arquitectura agnóstica al sistema heredado'] },
      analytics: { name:'Analytics', short:'Dashboards, indicadores y trazabilidad', headline:'Transforme eventos RFID en decisiones operativas.', gap:'Datos operativos dispersos y poca visibilidad ejecutiva.', capabilities:['Dashboards ejecutivos y operativos','Volúmenes verificados y divergencias detectadas','Cargas liberadas y tiempos de conferencia','Inventarios realizados','Historial de eventos','Visión futura de pérdidas evitadas y productividad'] }
    },
    pages: { how:{title:'Cómo funciona TagSense',subtitle:'El Event Engine transforma lecturas RFID en eventos físicos confiables y accionables.'}, technology:{title:'Tecnología preparada para la operación real',subtitle:'RFID, Edge, Cloud, integración y trazabilidad en una arquitectura modular.'}, benefits:{title:'Beneficios para cada área de la operación',subtitle:'Dirección, gestión del CD, TI y operación perciben valor desde diferentes ángulos.'}, investors:{title:'Una tesis de inteligencia física para logística',subtitle:'Software + RFID + Edge + datos + integración, con expansión modular dentro del cliente.'}, about:{title:'Tecnología aplicada a la logística real',subtitle:'TagSense existe para hacer el flujo físico tan confiable y auditable como el flujo digital.'}, contact:{title:'Agenda una demo',subtitle:'Cuéntenos sobre su operación y estructuraremos el mejor punto de entrada para una POC.'} },
    contact: { submit:'Solicitar demo', consent:'Acepto el uso de estos datos para contacto comercial conforme a la normativa de privacidad aplicable.', success:'Solicitud recibida. Nuestro equipo se pondrá en contacto cuando la integración comercial esté activa.', fields:['Nombre','Empresa','Cargo','E-mail corporativo','Teléfono (opcional)','Tipo de operación','Nº de CDs','Nº aproximado de muelles','WMS utilizado','Principal desafío','Interés'] },
    investors: { cards:[['Visión','Construir la capa de inteligencia física de la logística.'],['Tesis','Software + RFID + Edge + datos + integración.'],['Modelo de ingresos','Implementación + SaaS + hardware + consumibles.'],['Go-to-market','Land and Expand empezando por el muelle.'],['Mercado objetivo','Operadores logísticos, distribuidores, mayoristas, industria y retail.'],['Moat','Event Engine, integraciones, base histórica, hardware agnóstico e implementación estandarizada.']] }
  }
} as const

export type SiteCopy = typeof site.pt
