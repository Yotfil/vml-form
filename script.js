const inputs = [
  {
    id: '1',
    type: 'text',
    typeComponent: 'input',
    typeQuestion: '',
    name: 'name',
    label: 'Nombre preferido:',
    placeHolder: 'ej: John Doe',
    required: true,
    note: '',
  },
  {
    id: '2',
    type: 'email',
    typeComponent: 'input',
    typeQuestion: '',
    name: 'email',
    label: 'Correo:',
    placeHolder: 'ej: usuario@email.com',
    required: true,
    note: '',
  },
  {
    id: '3',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'gender',
    label: 'Género:',
    placeHolder: 'Escribe un género',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Masculino',
      },
      {
        id: '2',
        label: 'Femenino',
      },
      {
        id: '3',
        label: 'Otro',
      },
    ],
  },
  {
    id: '4',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'age',
    label: 'Edad:',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Menos de 18',
      },
      {
        id: '2',
        label: 'Entre 19 y 25',
      },
      {
        id: '3',
        label: 'Entre 25 y 35',
      },
      {
        id: '4',
        label: 'Entre 36 y 45',
      },
      {
        id: 5,
        label: 'Más de 45',
      },
    ],
  },
  {
    id: '5',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'live_alone',
    label: '¿Vives solo o con pareja?:',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Solo/a',
      },
      {
        id: '2',
        label: 'Con pareja',
      },
    ],
  },
  {
    id: '6',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'children',
    label: '¿Tienes hijos?:',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Sí',
      },
      {
        id: '2',
        label: 'No',
      },
    ],
  },
  {
    id: '7',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'income',
    label: 'Tu ingreso es:',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Variable',
      },
      {
        id: '2',
        label: 'Fijo',
      },
    ],
  },
  {
    id: '8',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'country',
    label: 'País:',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Colombia',
      },
      {
        id: '2',
        label: 'Panamá',
      },
      {
        id: '3',
        label: 'Ecuador',
      },
      {
        id: '4',
        label: 'Costa Rica',
      },
      {
        id: '5',
        label: 'México',
      },
      {
        id: '6',
        label: 'Otro',
      },
    ],
  },
  {
    id: '9',
    type: 'checkbox',
    typeComponent: 'checkbox',
    typeQuestion: '',
    name: 'hurting_most',
    label: '¿Qué te está doliendo más?',
    placeHolder: '',
    required: true,
    note: '(Puedes seleccionar varias)',
    options: [
      {
        id: '1',
        label: 'Me cuesta organizar mis finanzas',
      },
      {
        id: '2',
        label: 'Quiero salir de deudas',
      },
      {
        id: '3',
        label: 'Me cuesta ahorrar',
      },
      {
        id: '4',
        label: 'Quiero invertir, pero no sé por dónde empezar',
      },
      {
        id: '5',
        label: 'Quiero disfrutar mi plata',
      },
    ],
  },
  {
    id: '10',
    type: 'step',
    typeComponent: 'step',
    typeQuestion: '',
    name: 'feel_about_finances',
    label: '¿Cómo te sientes con tus finanzas?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: 'tranquilo',
        label: 'Muy tranquilo',
      },
      {
        id: 'estresado',
        label: 'Muy estresado',
      },
    ],
  },
  {
    id: '11',
    type: 'step',
    typeComponent: 'step',
    typeQuestion: '',
    name: 'money_dreams',
    label: '¿Tu plata te está ayudando a cumplir tus sueños? ',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Definitivamente sí',
      },
      {
        id: '2',
        label: 'Para nada',
      },
    ],
  },
  {
    id: '12',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'financial_goals',
    label: '¿Tienes claridad sobre tus metas financieras?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Si, clarísimo y tengo un plan',
      },
      {
        id: '2',
        label: 'Si las sé, pero no tengo un plan',
      },
      {
        id: '3',
        label: 'No, pero quisiera hacerlas',
      },
      {
        id: '4',
        label: 'No me interesa',
      },
    ],
  },
  {
    id: '13',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'know_finances',
    label: 'De lo que sabes de finanzas, ¿Dónde lo aprendiste?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'De mis papás o familiares cercanos',
      },
      {
        id: '2',
        label: 'En el colegio',
      },
      {
        id: '3',
        label: 'En la universidad',
      },
      {
        id: '4',
        label: 'En cursos de finanzas personales',
      },
      {
        id: '5',
        label: 'En redes sociales',
      },
    ],
  },
  {
    id: '14',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: 'budget',
    name: 'know_finances',
    label: '¿Tienes un plan mensual para tu plata?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label:
          'Si, tengo un presupuesto dividido por categorías que incluye ingresos, gastos, deudas, ahorros e inversiones.',
      },
      {
        id: '2',
        label: 'Tengo claro los gastos fijos.',
      },
      {
        id: '3',
        label: 'Voy viendo mes a mes',
      },
      {
        id: '4',
        label: 'No tengo un plan',
      },
    ],
  },
  {
    id: '15',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: 'budget',
    name: 'record_expenses',
    label: '¿Con qué recurrencia registras tus gastos mensuales?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Diario',
      },
      {
        id: '2',
        label: 'Semanal',
      },
      {
        id: '3',
        label: 'Mensual',
      },
      {
        id: '4',
        label: 'No lo hago',
      },
    ],
  },
  {
    id: '16',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'where_record_expenses',
    label: '¿Dónde registras tus gastos?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'App',
      },
      {
        id: '2',
        label: 'Excel',
      },
      {
        id: '3',
        label: 'Papel',
      },
      {
        id: '4',
        label: 'No lo hago',
      },
    ],
  },
  {
    id: '17',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: 'budget',
    name: 'budget_include',
    label: 'Tu presupuesto incluye:',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Ingresos, gastos fijos, gastos variables, ahorros, inversiones.',
      },
      {
        id: '2',
        label: 'Ingresos, gastos fijos, gastos variables, ahorros.',
      },
      {
        id: '3',
        label: 'Ingresos, gastos fijos, gastos variables.',
      },
      {
        id: '4',
        label: 'Ingresos, gastos fijos.',
      },
    ],
  },
  {
    id: '18',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'plan_large_expenses',
    label: '¿Te planificas para gastos grandes? Ejemplo: regalos de navidad',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Tengo un ahorro programado para estos gastos',
      },
      {
        id: '2',
        label: 'Ahorro los últimos meses',
      },
      {
        id: '3',
        label: 'No, uso mis ahorros',
      },
      {
        id: '4',
        label: 'No, me endeudo para eso',
      },
    ],
  },
  {
    id: '19',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'make_ends_meet',
    label: '¿Cómo llegas a final de mes?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Gasto menos de lo que gano',
      },
      {
        id: '2',
        label: 'Gasto todo lo que me gano',
      },
      {
        id: '3',
        label: 'Gasto más de lo que gano',
      },
      {
        id: '4',
        label: 'No lo tengo claro',
      },
    ],
  },
  {
    id: '20',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'pay_on_time',
    label: '¿Pagas a tiempo los recibos, deudas y demás obligaciones?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Pago a tiempo todos',
      },
      {
        id: '2',
        label: 'Pago la mayoría a tiempo',
      },
      {
        id: '3',
        label: 'Pagos algunos a tiempo',
      },
      {
        id: '4',
        label: 'Pago muy pocos a tiempo',
      },
    ],
  },
  {
    id: '21',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'do_you_save',
    label: '¿Ahorras? ',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Si',
      },
      {
        id: '2',
        label: 'Intento todos los meses',
      },
      {
        id: '3',
        label: 'Cuando me sobra',
      },
      {
        id: '4',
        label: 'No ahorro',
      },
    ],
  },
  {
    id: '22',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'how_much_save',
    label: '¿Cuánto ahorras cada mes? (insertar calculadora o calcúlalo así)',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Más del 20% de mis ingresos.',
      },
      {
        id: '2',
        label: 'Entre el 10% y 20% de mis ingresos.',
      },
      {
        id: '3',
        label: 'Entre un 1% y 10% de mis ingresos.',
      },
      {
        id: '4',
        label: 'No ahorro regularmente.',
      },
    ],
  },
  {
    id: '23',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: 'emergency_fund',
    name: 'buy_new_phone',
    label: 'Si en este momento pierdes tu celular, ¿podrías comprar uno nuevo sin endeudarte?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Si de una.',
      },
      {
        id: '2',
        label: 'La mayoría con ahorros y una partecita con deuda',
      },
      {
        id: '3',
        label: 'Un poco con ahorros y la mayoría con deuda',
      },
      {
        id: '4',
        label: 'Totalmente con deuda',
      },
    ],
  },
  {
    id: '24',
    type: 'checkbox',
    typeComponent: 'checkbox',
    typeQuestion: '',
    name: 'savings_for',
    label: '¿Para qué quieres destinar tus ahorros?',
    placeHolder: '',
    required: true,
    note: '(Puedes seleccionar varias)',
    options: [
      {
        id: '1',
        label: 'Vivienda',
      },
      {
        id: '2',
        label: 'Educación',
      },
      {
        id: '3',
        label: 'Vacaciones',
      },
      {
        id: '4',
        label: 'Retiro o jubilación',
      },
      {
        id: '5',
        label: 'Carro',
      },
    ],
  },
  {
    id: '25',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'savings_purpose',
    label: '¿Tus ahorros tienen un propósito específico?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Si',
      },
      {
        id: '2',
        label: 'Algunos',
      },
      {
        id: '3',
        label: 'Ahorro en general',
      },
      {
        id: '4',
        label: 'No',
      },
    ],
  },
  {
    id: '26',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: 'freedom_fund',
    name: 'live_with_savings',
    label: 'Si hoy dejas de recibir ingresos, ¿Cuánto tiempo podrías vivir con la plata que tienes en este momento?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Más de 6 meses',
      },
      {
        id: '2',
        label: 'Entre 3 y 6 meses',
      },
      {
        id: '3',
        label: 'Entre 1 y 2 meses',
      },
      {
        id: '4',
        label: 'Menos de 1 mes',
      },
    ],
  },
  {
    id: '27',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: 'retirement_fund',
    name: 'save_retirement',
    label: '¿Ahorras para tu retiro?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Si, tengo un plan',
      },
      {
        id: '2',
        label: 'Quisiera ahorrar más, pero no sé como',
      },
      {
        id: '3',
        label: 'Solamente la pensión obligatoria',
      },
      {
        id: '4',
        label: 'No estoy haciendo nada',
      },
    ],
  },
  {
    id: '28',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: 'retirement_fund',
    name: 'contributing_retirement',
    label: '¿En dónde estás aportando para tu retiro?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Tengo un portafolio de inversiones',
      },
      {
        id: '2',
        label: 'Si, tengo un fondo para el retiro obligatorio y otro voluntario',
      },
      {
        id: '3',
        label: 'Si, tengo un fondo para el retiro obligatorio',
      },
      {
        id: '4',
        label: 'No estoy aportando nada',
      },
    ],
  },
  {
    id: '29',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: 'retirement_fund',
    name: 'age_retire',
    label: '¿Sabes a que edad te gustaría retirarte?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Lo tengo claro y estoy trabajando en ello',
      },
      {
        id: '2',
        label: 'Me gustaría, pero no lo se',
      },
      {
        id: '3',
        label: 'Cuando me jubile',
      },
      {
        id: '4',
        label: 'No lo he pensado',
      },
    ],
  },
  {
    id: '30',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: 'yes_to_debts',
    name: 'part_to_pay_debts',
    label:
      '¿Qué parte de tus ingresos las destinas a pagar deudas? (Incluye: hipoteca, carro, tarjeta de crédito, educación)',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'No tengo deudas',
      },
      {
        id: '2',
        label: 'Menos de la mitad',
      },
      {
        id: '3',
        label: 'La mitad',
      },
      {
        id: '4',
        label: 'Más de la mitad',
      },
    ],
  },
]

const debtsQuestions = {
  si: [
    {
      id: '31',
      type: 'checkbox',
      typeComponent: 'checkbox',
      typeQuestion: '',
      name: 'type_of_debts',
      label: '¿Qué tipo de deudas tienes?',
      placeHolder: '',
      required: true,
      note: '(Puedes seleccionar varias)',
      options: [
        {
          id: '1',
          label: 'Hipoteca',
        },
        {
          id: '2',
          label: 'Carro',
        },
        {
          id: '3',
          label: 'Tarjeta de crédito',
        },
        {
          id: '4',
          label: 'Personal',
        },
      ],
    },
    {
      id: '32',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: 'roof',
      name: 'income_to_mortgage',
      label: '¿Qué parte de tu ingreso lo destinas a la hipoteca?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'No tengo hipoteca',
        },
        {
          id: '2',
          label: 'De 0% a 25 %',
        },
        {
          id: '3',
          label: 'De 26% a 50%',
        },
        {
          id: '4',
          label: 'Más del 50%',
        },
      ],
    },
    {
      id: '33',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: 'yes_to_debts',
      name: 'when_pay_debts',
      label: 'Cuando pagas tus deudas...',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'Pago el mínimo o letra, y abono a capital',
        },
        {
          id: '2',
          label: 'Pago el mínimo o letra',
        },
        {
          id: '3',
          label: 'Pago lo que puedo',
        },
        {
          id: '4',
          label: 'No lo tengo claro',
        },
      ],
    },
    {
      id: '34',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: 'yes_to_debts',
      name: 'interest_rate_credits',
      label: '¿Sabes cuál es la tasa de interés de tus créditos?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'Si',
        },
        {
          id: '2',
          label: 'De la mayoría',
        },
        {
          id: '3',
          label: 'De algunas',
        },
        {
          id: '4',
          label: 'De ninguna',
        },
      ],
    },
    {
      id: '35',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: 'yes_to_debts',
      name: 'know_total_paying',
      label: '¿Sabes cuál es el monto total que terminarás pagando (capital + intereses)?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'Si',
        },
        {
          id: '2',
          label: 'De la mayoría',
        },
        {
          id: '3',
          label: 'De algunas',
        },
        {
          id: '4',
          label: 'De ninguna',
        },
      ],
    },
    {
      id: '36',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: 'yes_to_debts',
      name: 'use_credit_for',
      label: '¿Qué uso le das a la tarjeta de crédito?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'Lo pago completa todos los meses (todo a una cuota)',
        },
        {
          id: '2',
          label: 'Solo pago el mínimo',
        },
        {
          id: '3',
          label: 'Pago lo que puedo',
        },
        {
          id: '4',
          label: 'No tengo',
        },
      ],
    },
    {
      id: '37',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: '',
      name: 'know_capital_work',
      label: '¿Sabes cómo funcionan los aportes a capital?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'Sé cómo funcionan perfectamente',
        },
        {
          id: '2',
          label: 'Si lo sé pero no lo estoy haciendo',
        },
        {
          id: '3',
          label: 'Entiendo generalidades, pero no detalles específicos',
        },
        {
          id: '4',
          label: 'Ni idea',
        },
      ],
    },
    {
      id: '38',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: 'yes_to_debts',
      name: 'extra_income_debt',
      label: 'Si mañana te llega un ingreso extra, ¿Sabrías a cuál deuda abonar?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'Si',
        },
        {
          id: '2',
          label: 'No estoy seguro',
        },
        {
          id: '3',
          label: 'Un poquito a todas',
        },
        {
          id: '4',
          label: 'No lo sé',
        },
      ],
    },
  ],
  no: [
    {
      id: '39',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: '',
      name: 'no_debt_because',
      label: 'Si tu respuesta fue: no tengo deudas, es porque:',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'Ya las pagué',
        },
        {
          id: '2',
          label: 'Nunca me he endeudado',
        },
      ],
    },
    {
      id: '40',
      type: 'checkbox',
      typeComponent: 'checkbox',
      typeQuestion: '',
      name: 'debts_would_have',
      label: '¿Qué tipo de deudas pensarías tener?',
      placeHolder: '',
      required: true,
      note: '(Puedes seleccionar varias)',
      options: [
        {
          id: '1',
          label: 'Hipoteca',
        },
        {
          id: '2',
          label: 'Carro',
        },
        {
          id: '3',
          label: 'Tarjeta de crédito',
        },
        {
          id: '4',
          label: 'Personal',
        },
      ],
    },
    {
      id: '41',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: 'roof',
      name: 'part_allocated_mortgage',
      label: '¿Qué parte de tu ingreso crees se debe destinar a la hipoteca?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'Menos de 25%',
        },
        {
          id: '2',
          label: '25 %',
        },
        {
          id: '3',
          label: '50%',
        },
        {
          id: '4',
          label: 'Más del 50%',
        },
      ],
    },
    {
      id: '42',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: 'no_to_debts',
      name: 'how_best_pay_debts',
      label: '¿Sabes cómo te conviene pagar tus deudas?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'El mínimo o letra, y abono a capital',
        },
        {
          id: '2',
          label: 'El mínimo o letra',
        },
        {
          id: '3',
          label: 'Lo que puedas',
        },
        {
          id: '4',
          label: 'No lo tengo claro',
        },
      ],
    },
    {
      id: '43',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: 'no_to_debts',
      name: 'should_consider_loan',
      label: '¿Sabes que se le debe mirar a un préstamo antes de tomarlo?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'Plazo, monto mensual, tasa de interés, monto total a pagar.',
        },
        {
          id: '2',
          label: 'Plazo, monto mensual, tasa de interés',
        },
        {
          id: '3',
          label: 'Monto mensual y tasa de interés',
        },
        {
          id: '4',
          label: 'Nada',
        },
      ],
    },
    {
      id: '44',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: 'no_to_debts',
      name: 'use_credit_card_for',
      label: '¿Qué uso le das a la tarjeta de crédito?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'La pago completa todos los meses (todo a una cuota)',
        },
        {
          id: '2',
          label: 'Solo pago el mínimo',
        },
        {
          id: '3',
          label: 'Pago lo que puedo',
        },
        {
          id: '4',
          label: 'No tengo',
        },
      ],
    },
    {
      id: '45',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: '',
      name: 'know_capital_work_2',
      label: '¿Sabes cómo funcionan los aportes a capital?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'Sé cómo funcionan perfectamente',
        },
        {
          id: '2',
          label: 'Si lo sé pero no lo he hecho.',
        },
        {
          id: '3',
          label: 'Entiendo generalidades, pero no detalles específicos',
        },
        {
          id: '4',
          label: 'Ni idea',
        },
      ],
    },
    {
      id: '46',
      type: 'radio',
      typeComponent: 'radio',
      typeQuestion: 'no_to_debts',
      name: 'extra_income_debt_2',
      label: 'Si mañana te llega un ingreso extra, ¿Sabrías como tomar la decisión de a cuál deuda abonar?',
      placeHolder: '',
      required: true,
      note: '',
      options: [
        {
          id: '1',
          label: 'Si',
        },
        {
          id: '2',
          label: 'No estoy seguro',
        },
        {
          id: '3',
          label: 'Un poquito a todas',
        },
        {
          id: '4',
          label: 'No lo se',
        },
      ],
    },
  ],
}

const lastBlockQuestions = [
  {
    id: '47',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'already_investing',
    label: '¿Ya estás invirtiendo?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Si ya tengo mi portafolio',
      },
      {
        id: '2',
        label: 'Tengo un par de inversiones',
      },
      {
        id: '3',
        label: 'Entiendo algunas cosas, pero no me he animado a hacerlo',
      },
      {
        id: '4',
        label: 'No sé cómo hacerlo',
      },
    ],
  },
  {
    id: '48',
    type: 'checkbox',
    typeComponent: 'checkbox',
    typeQuestion: '',
    name: 'investments_know',
    label: '¿Qué inversiones conoces?',
    placeHolder: '',
    required: true,
    note: '(Puedes seleccionar varias)',
    options: [
      {
        id: '1',
        label: 'ETFs',
      },
      {
        id: '2',
        label: 'Cripto',
      },
      {
        id: '3',
        label: 'Bienes Raíces',
      },
      {
        id: '4',
        label: 'Reits',
      },
      {
        id: '5',
        label: 'Dólares digitales',
      },
      {
        id: '6',
        label: 'Energías renovables',
      },
      {
        id: '7',
        label: 'Crowdfactoring',
      },
      {
        id: '8',
        label: 'Crowlending',
      },
      {
        id: '9',
        label: 'Fractional ownership',
      },
      {
        id: 10,
        label: 'Stable Coins',
      },
      {
        id: 11,
        label: 'Acciones',
      },
    ],
  },
  {
    id: '49',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'investment_next_level',
    label: '¿Qué te hace falta para llevar tu inversión al siguiente nivel?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Diversificar mi portafolio',
      },
      {
        id: '2',
        label: 'Tener un plan estratégico para invertir',
      },
      {
        id: '3',
        label: 'Aprender más para que se me quite el miedo',
      },
      {
        id: '4',
        label: 'No tengo plata para invertir',
      },
    ],
  },
  {
    id: '50',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'partner',
    label: '¿Tienes pareja actualmente?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Si',
      },
      {
        id: '2',
        label: 'No',
      },
    ],
  },
]

const partnerQuestions = [
  {
    id: '51',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'how_expenses_distributed',
    label: '¿Cómo se distribuyen los gastos? ',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Proporcional a los ingresos de cada uno',
      },
      {
        id: '2',
        label: 'Miti-miti',
      },
      {
        id: '3',
        label: 'Nos repartimos algunos gastos',
      },
      {
        id: '4',
        label: 'Vamos viendo cada mes',
      },
    ],
  },
  {
    id: '52',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'manage_budget',
    label: '¿Cómo llevan el presupuesto?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Armamos un presupuesto conjunto',
      },
      {
        id: '2',
        label: 'Tenemos uno conjunto y otro aparte para cada uno',
      },
      {
        id: '3',
        label: 'Sabemos los gastos fijos',
      },
      {
        id: '4',
        label: 'No tenemos',
      },
    ],
  },
  {
    id: '53',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'dreams_budget',
    label: '¿En el presupuesto incluyen los sueños y proyectos conjuntos?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Si, todos',
      },
      {
        id: '2',
        label: 'Tenemos algunos que están incluidos',
      },
      {
        id: '3',
        label: 'Tenemos sueños/proyectos pero no está incluidos',
      },
      {
        id: '4',
        label: 'No, ninguno',
      },
    ],
  },
  {
    id: '54',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'talk_about_finances',
    label: '¿Hablan regularmente de finanzas?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Si, todas las semanas',
      },
      {
        id: '2',
        label: 'Si, una vez al mes',
      },
      {
        id: '3',
        label: 'De vez en cuando',
      },
      {
        id: '4',
        label: 'Nunca',
      },
    ],
  },
  {
    id: '55',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'who_manages_finance',
    label: '¿Quién lleva las finanzas en la casa?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'Ambos',
      },
      {
        id: '2',
        label: 'Yo',
      },
      {
        id: '3',
        label: 'Mi pareja',
      },
      {
        id: '4',
        label: 'Nadie',
      },
    ],
  },
  {
    id: '56',
    type: 'radio',
    typeComponent: 'radio',
    typeQuestion: '',
    name: 'argue_about_money',
    label: '¿Pelean cuando hablan de plata?',
    placeHolder: '',
    required: true,
    note: '',
    options: [
      {
        id: '1',
        label: 'No, nuestra comunicación es perfecta',
      },
      {
        id: '2',
        label: 'Si pero logramos llegar a acuerdos',
      },
      {
        id: '3',
        label: 'A veces cuando estamos en desacuerdo',
      },
      {
        id: '4',
        label: 'Si, casi siempre',
      },
    ],
  },
]

const imgQuestionDesktop = ` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="370.126"
height="271.952" viewBox="0 0 370.126 271.952">
<defs>
  <clipPath id="clip-path">
    <rect id="Rectangle_95" data-name="Rectangle 95" width="204.125" height="201.53" fill="#ff8006" />
  </clipPath>
  <clipPath id="clip-path-2">
    <rect id="Rectangle_115" data-name="Rectangle 115" width="326.001" height="261.905" fill="none" />
  </clipPath>
</defs>
<g id="Group_353" data-name="Group 353" transform="translate(-393.999 -320)">
  <g id="Group_150" data-name="Group 150" transform="translate(560 320)">
    <g id="Group_149" data-name="Group 149" transform="translate(0)" clip-path="url(#clip-path)">
      <path id="Path_837" data-name="Path 837"
        d="M106.368,2.543,87.07,9.651A41.222,41.222,0,0,1,76.54,12.022L56.059,13.876a41.221,41.221,0,0,0-36.906,34.05L15.658,68.193a41.23,41.23,0,0,1-3.21,10.3L3.813,97.162a41.222,41.222,0,0,0,11.034,48.987l15.8,13.159a41.184,41.184,0,0,1,7.319,7.933l11.846,16.81a41.224,41.224,0,0,0,47.941,14.937l19.3-7.107a41.217,41.217,0,0,1,10.529-2.372l20.482-1.854a41.223,41.223,0,0,0,36.906-34.05l3.494-20.266a41.207,41.207,0,0,1,3.211-10.3l8.635-18.665a41.222,41.222,0,0,0-11.036-48.987l-15.8-13.159a41.238,41.238,0,0,1-7.319-7.932L154.309,17.48A41.222,41.222,0,0,0,106.368,2.543"
        transform="translate(0 0)" fill="#ff8006" />
    </g>
  </g>
  <g id="Group_181" data-name="Group 181" transform="translate(393.999 330.047)">
    <g id="Group_180" data-name="Group 180" clip-path="url(#clip-path-2)">
      <path id="Path_927" data-name="Path 927"
        d="M98.452,113.111l-77.477.941a17.816,17.816,0,0,1-18.032-17.6L2,18.975A17.818,17.818,0,0,1,19.6.943L97.078,0A17.815,17.815,0,0,1,115.11,17.6l.942,77.478a17.818,17.818,0,0,1-17.6,18.032"
        transform="translate(0.235 0)" fill="#ffb528" />
      <path id="Path_928" data-name="Path 928"
        d="M44.032,76a1.114,1.114,0,0,1-.79-.327L28.65,61.083a1.117,1.117,0,0,1,1.58-1.58l13.8,13.8L81.639,35.7a1.117,1.117,0,1,1,1.58,1.58l-38.4,38.4a1.114,1.114,0,0,1-.79.327"
        transform="translate(3.327 4.154)" fill="#1c0b00" />
      <path id="Path_929" data-name="Path 929"
        d="M20.872,226.62a19,19,0,0,1-18.928-18.7L1,130.438a18.934,18.934,0,0,1,18.7-19.163l77.712-.943a19,19,0,0,1,18.93,18.7l.941,77.477a18.936,18.936,0,0,1-18.7,19.163Z"
        transform="translate(0.117 12.958)" fill="#ffedcd" />
      <path id="Path_930" data-name="Path 930"
        d="M97.534,111.567a17.815,17.815,0,0,1,17.811,17.6l.942,77.477a17.817,17.817,0,0,1-17.6,18.032l-77.477.941h-.221a17.814,17.814,0,0,1-17.811-17.6l-.942-77.478a17.817,17.817,0,0,1,17.6-18.032l77.477-.941h.221m0-2.235h-.249l-77.477.941A20.054,20.054,0,0,0,0,130.569l.942,77.477a20.122,20.122,0,0,0,20.046,19.808h.248l77.477-.941a20.076,20.076,0,0,0,19.808-20.294l-.942-77.477a20.123,20.123,0,0,0-20.045-19.809"
        transform="translate(0 12.841)" fill="#1c0b00" />
      <path id="Path_931" data-name="Path 931"
        d="M44.032,187.332a1.114,1.114,0,0,1-.79-.327L28.65,172.414a1.117,1.117,0,0,1,1.58-1.58l13.8,13.8,37.607-37.608a1.117,1.117,0,0,1,1.58,1.58L44.822,187a1.114,1.114,0,0,1-.79.327"
        transform="translate(3.327 17.229)" fill="#1c0b00" />
      <path id="Path_932" data-name="Path 932"
        d="M169.284,71.756l-38.857,38.857,3.8,3.8a17.811,17.811,0,0,0,25.184,0l22.884-22.885Z"
        transform="translate(15.318 8.428)" fill="#ffedcd" />
      <path id="Path_933" data-name="Path 933"
        d="M146.935,120.853a18.87,18.87,0,0,1-13.383-5.534l-3.8-3.8a1.116,1.116,0,0,1,0-1.58L168.61,71.083a1.117,1.117,0,0,1,1.723.175l13.01,19.772a1.115,1.115,0,0,1-.143,1.4L160.317,115.32a18.866,18.866,0,0,1-13.381,5.534M132.125,110.73l3.008,3.009a16.711,16.711,0,0,0,23.6,0L180.977,91.5,169.22,73.633Z"
        transform="translate(15.201 8.31)" fill="#1c0b00" />
      <path id="Path_934" data-name="Path 934"
        d="M166,70.778,113.922,88.307l1.714,5.091a17.806,17.806,0,0,0,22.557,11.2l30.673-10.323Z"
        transform="translate(13.38 8.313)" fill="#ffedcd" />
      <path id="Path_935" data-name="Path 935"
        d="M132.646,106.762a18.958,18.958,0,0,1-17.952-12.89L112.98,88.78a1.119,1.119,0,0,1,.7-1.416l52.081-17.528a1.117,1.117,0,0,1,1.465.923l2.864,23.494a1.118,1.118,0,0,1-.752,1.195l-30.673,10.324a18.881,18.881,0,0,1-6.022.99M115.455,89.127l1.358,4.033a16.708,16.708,0,0,0,21.141,10.494L167.765,93.62l-2.588-21.228Z"
        transform="translate(13.262 8.195)" fill="#1c0b00" />
      <path id="Path_936" data-name="Path 936"
        d="M267.864,257.565l-57.005-57-34.9-34.9a66.149,66.149,0,0,1-19.374-46.774V52.58H110.76A19.313,19.313,0,0,1,91.447,33.267V27.441h92.558L240,64.007l20.569,93.7,53.576,53.577Z"
        transform="translate(10.74 3.223)" fill="#ffedcd" />
      <path id="Path_937" data-name="Path 937"
        d="M267.981,258.8a1.116,1.116,0,0,1-.79-.327l-91.909-91.909A66.826,66.826,0,0,1,155.582,119V53.815H110.876a20.452,20.452,0,0,1-20.429-20.43V27.558a1.118,1.118,0,0,1,1.117-1.117h92.558a1.122,1.122,0,0,1,.611.182l55.992,36.566a1.113,1.113,0,0,1,.48.7l20.5,93.382,53.346,53.346a1.117,1.117,0,0,1-1.58,1.58l-53.577-53.577a1.119,1.119,0,0,1-.3-.55L239.122,64.811,183.79,28.676H92.682v4.709a18.215,18.215,0,0,0,18.194,18.2H156.7a1.118,1.118,0,0,1,1.117,1.117V119a64.606,64.606,0,0,0,19.046,45.984l91.909,91.909a1.117,1.117,0,0,1-.79,1.908"
        transform="translate(10.623 3.105)" fill="#1c0b00" />
      <path id="Path_938" data-name="Path 938"
        d="M161.26,63.71H106.308v5.373A17.808,17.808,0,0,0,124.116,86.89h32.363Z"
        transform="translate(12.486 7.483)" fill="#ffedcd" />
      <path id="Path_939" data-name="Path 939"
        d="M156.6,88.125H124.233A18.947,18.947,0,0,1,105.308,69.2V63.827a1.117,1.117,0,0,1,1.117-1.117h54.952a1.117,1.117,0,0,1,1.094,1.343l-4.78,23.18a1.117,1.117,0,0,1-1.1.892m-49.053-23.18V69.2a16.709,16.709,0,0,0,16.69,16.69h31.453L160,64.945Z"
        transform="translate(12.368 7.365)" fill="#1c0b00" />
      <path id="Path_940" data-name="Path 940"
        d="M286.907,48.245,92.45,49.729,61.221,64.14,90.975,78.085,285.432,76.6l1.091-1.827a26.469,26.469,0,0,0,.97-25.35Z"
        transform="translate(7.19 5.666)" fill="#1c0b00" />
      <path id="Path_941" data-name="Path 941"
        d="M253.536,77.02h-.026a1.118,1.118,0,0,1-1.092-1.143l.618-26.668a1.1,1.1,0,0,1,1.143-1.092,1.119,1.119,0,0,1,1.092,1.143l-.618,26.668a1.118,1.118,0,0,1-1.117,1.092"
        transform="translate(29.646 5.651)" fill="#ffedcd" />
      <path id="Path_942" data-name="Path 942" d="M74.917,56.814l-13.7,6.32,13.7,6.419Z"
        transform="translate(7.19 6.673)" fill="#ffedcd" />
      <path id="Path_943" data-name="Path 943"
        d="M188.5,97.178,133.078,41.757l-.266.306a27.224,27.224,0,0,0-.974,34.467l20.913,30.611Z"
        transform="translate(14.817 4.904)" fill="#ffedcd" />
      <path id="Path_944" data-name="Path 944"
        d="M152.867,108.376a1.116,1.116,0,0,1-.924-.487L131.03,77.277a28.405,28.405,0,0,1,1.053-35.829l.266-.306a1.109,1.109,0,0,1,.8-.384,1.078,1.078,0,0,1,.831.326L189.4,96.505a1.117,1.117,0,0,1-1.58,1.58L133.26,43.522a26.189,26.189,0,0,0-.424,32.443l20.952,30.664a1.117,1.117,0,0,1-.922,1.748"
        transform="translate(14.702 4.787)" fill="#1c0b00" />
    </g>
  </g>
</g>
</svg>`
const imgQuestionMobile = `<svg id="Group_181" data-name="Group 181" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="265.103" height="212.98" viewBox="0 0 265.103 212.98">
<defs>
  <clipPath id="clip-path">
    <rect id="Rectangle_115" data-name="Rectangle 115" width="265.103" height="212.98" fill="none"/>
  </clipPath>
</defs>
<g id="Group_180" data-name="Group 180" clip-path="url(#clip-path)">
  <path id="Path_927" data-name="Path 927" d="M80.435,91.982l-63,.765A14.488,14.488,0,0,1,2.767,78.435L2,15.431A14.489,14.489,0,0,1,16.313.767l63-.765A14.487,14.487,0,0,1,93.981,14.313l.766,63.005A14.489,14.489,0,0,1,80.435,91.982" transform="translate(-0.183 0)" fill="#ffb528"/>
  <path id="Path_928" data-name="Path 928" d="M41.1,68.41a.906.906,0,0,1-.642-.266L28.589,56.279a.909.909,0,1,1,1.285-1.285L41.1,66.217,71.679,35.634a.909.909,0,1,1,1.285,1.285L41.74,68.144a.906.906,0,0,1-.642.266" transform="translate(-2.586 -3.229)" fill="#1c0b00"/>
  <path id="Path_929" data-name="Path 929" d="M17.159,204.9A15.452,15.452,0,0,1,1.767,189.686l-.766-63A15.4,15.4,0,0,1,16.211,111.1l63.195-.767A15.453,15.453,0,0,1,94.8,125.543l.765,63A15.4,15.4,0,0,1,80.354,204.13Z" transform="translate(-0.091 -10.073)" fill="#ffedcd"/>
  <path id="Path_930" data-name="Path 930" d="M79.314,111.149A14.487,14.487,0,0,1,93.8,125.462l.766,63A14.489,14.489,0,0,1,80.252,203.13l-63,.765h-.18A14.487,14.487,0,0,1,2.584,189.584l-.766-63.005A14.489,14.489,0,0,1,16.13,111.915l63-.765h.18m0-1.817h-.2l-63,.765A16.308,16.308,0,0,0,0,126.6l.766,63a16.363,16.363,0,0,0,16.3,16.108h.2l63-.765a16.326,16.326,0,0,0,16.108-16.5l-.766-63a16.364,16.364,0,0,0-16.3-16.109" transform="translate(0 -9.981)" fill="#1c0b00"/>
  <path id="Path_931" data-name="Path 931" d="M41.1,179.741a.906.906,0,0,1-.642-.266L28.589,167.61a.909.909,0,1,1,1.285-1.285L41.1,177.548l30.582-30.582a.909.909,0,1,1,1.285,1.285L41.74,179.475a.906.906,0,0,1-.642.266" transform="translate(-2.586 -13.393)" fill="#1c0b00"/>
  <path id="Path_932" data-name="Path 932" d="M162.025,71.756l-31.6,31.6,3.09,3.09a14.484,14.484,0,0,0,20.479,0l18.609-18.61Z" transform="translate(-11.907 -6.551)" fill="#ffedcd"/>
  <path id="Path_933" data-name="Path 933" d="M143.665,111.5a15.345,15.345,0,0,1-10.883-4.5l-3.089-3.09a.908.908,0,0,1,0-1.285l31.6-31.6a.908.908,0,0,1,1.4.143l10.58,16.079a.907.907,0,0,1-.116,1.141L154.546,107a15.342,15.342,0,0,1-10.882,4.5m-12.044-8.232,2.446,2.447a13.589,13.589,0,0,0,19.195,0l18.086-18.086L161.787,73.1Z" transform="translate(-11.816 -6.46)" fill="#1c0b00"/>
  <path id="Path_934" data-name="Path 934" d="M156.274,70.778,113.922,85.033l1.394,4.14a14.48,14.48,0,0,0,18.343,9.105L158.6,89.884Z" transform="translate(-10.401 -6.462)" fill="#ffedcd"/>
  <path id="Path_935" data-name="Path 935" d="M128.962,99.853a15.417,15.417,0,0,1-14.6-10.482l-1.394-4.141a.91.91,0,0,1,.572-1.151l42.352-14.254a.908.908,0,0,1,1.191.751l2.329,19.106a.909.909,0,0,1-.612.971l-24.943,8.4a15.354,15.354,0,0,1-4.9.805m-13.98-14.341,1.1,3.28a13.587,13.587,0,0,0,17.192,8.534l24.242-8.159-2.1-17.263Z" transform="translate(-10.309 -6.37)" fill="#1c0b00"/>
  <path id="Path_936" data-name="Path 936" d="M234.909,214.577l-46.357-46.356-28.383-28.384A53.792,53.792,0,0,1,144.414,101.8V47.884H107.152A15.705,15.705,0,0,1,91.447,32.179V27.441h75.268l45.533,29.736,16.727,76.2,43.568,43.569Z" transform="translate(-8.349 -2.505)" fill="#ffedcd"/>
  <path id="Path_937" data-name="Path 937" d="M234.818,215.394a.908.908,0,0,1-.642-.266l-74.74-74.74a54.342,54.342,0,0,1-16.02-38.679V48.7H107.06A16.632,16.632,0,0,1,90.447,32.088V27.35a.909.909,0,0,1,.909-.909h75.268a.912.912,0,0,1,.5.148l45.532,29.736a.905.905,0,0,1,.391.566l16.669,75.938,43.381,43.381a.909.909,0,0,1-1.285,1.285L228.24,133.925a.91.91,0,0,1-.245-.447L211.349,57.643l-45-29.385H92.264v3.829a14.812,14.812,0,0,0,14.8,14.8h37.263a.909.909,0,0,1,.909.909v53.916A52.538,52.538,0,0,0,160.72,139.1l74.74,74.74a.909.909,0,0,1-.642,1.551" transform="translate(-8.257 -2.414)" fill="#1c0b00"/>
  <path id="Path_938" data-name="Path 938" d="M150.994,63.71H106.308v4.369A14.481,14.481,0,0,0,120.789,82.56h26.318Z" transform="translate(-9.705 -5.816)" fill="#ffedcd"/>
  <path id="Path_939" data-name="Path 939" d="M147.015,83.378H120.7a15.408,15.408,0,0,1-15.39-15.39V63.619a.908.908,0,0,1,.909-.909H150.9a.908.908,0,0,1,.89,1.092l-3.887,18.85a.909.909,0,0,1-.891.725m-39.889-18.85v3.46A13.587,13.587,0,0,0,120.7,81.56h25.577l3.512-17.033Z" transform="translate(-9.614 -5.725)" fill="#1c0b00"/>
  <path id="Path_940" data-name="Path 940" d="M244.749,48.245,86.617,49.452,61.221,61.17l24.2,11.341L243.549,71.3l.887-1.486a21.524,21.524,0,0,0,.789-20.615Z" transform="translate(-5.589 -4.405)" fill="#1c0b00"/>
  <path id="Path_941" data-name="Path 941" d="M253.328,71.621h-.021a.909.909,0,0,1-.888-.93l.5-21.686a.894.894,0,0,1,.93-.888.91.91,0,0,1,.888.93l-.5,21.686a.909.909,0,0,1-.909.888" transform="translate(-23.045 -4.393)" fill="#ffedcd"/>
  <path id="Path_942" data-name="Path 942" d="M72.358,56.814l-11.137,5.14,11.137,5.22Z" transform="translate(-5.589 -5.187)" fill="#ffedcd"/>
  <path id="Path_943" data-name="Path 943" d="M176.854,86.825,131.786,41.757l-.216.249a22.139,22.139,0,0,0-.792,28.028l17.006,24.893Z" transform="translate(-11.518 -3.812)" fill="#ffedcd"/>
  <path id="Path_944" data-name="Path 944" d="M147.695,95.745a.908.908,0,0,1-.751-.4L129.937,70.455a23.1,23.1,0,0,1,.856-29.136l.216-.249a.9.9,0,0,1,.653-.313.876.876,0,0,1,.676.265l45.068,45.068a.909.909,0,0,1-1.285,1.285L131.751,43.005a21.3,21.3,0,0,0-.344,26.382l17.038,24.936a.908.908,0,0,1-.75,1.421" transform="translate(-11.428 -3.721)" fill="#1c0b00"/>
</g>
</svg>`

let currentQuestion = 0
// let totalQuestions = inputs.length
let lastQuestion = 0
const answersSaved = []
let currentComponent = inputs[lastQuestion]
let currentTargetId = 0
const dataToSend = {}
let checkboxOptions = []
let finalScore = {
  budget: 0,
  emergency_fund: 0,
  yes_to_debts: 0,
  no_to_debts: 0,
  freedom_fund: 0,
  retirement_fund: 0,
  roof: 0,
}
const score = {
  1: 4,
  2: 3,
  3: 2,
  4: 1,
}

const changeImageQuestion = () => {
  const containerQuestion = document.getElementById('containerImg')
  if (window.innerWidth < 700) {
    containerQuestion.innerHTML = imgQuestionMobile
  } else {
    containerQuestion.innerHTML = imgQuestionDesktop
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth < 700) {
      containerQuestion.innerHTML = imgQuestionMobile
    } else {
      containerQuestion.innerHTML = imgQuestionDesktop
    }
  })
}

const stepFinanzas = () => {
  const steps = Array.from(document.querySelectorAll(`.step-finanzas-${currentComponent.name}`))
  const pipes = Array.from(document.querySelectorAll('.pipe'))
  let time = 300
  steps.forEach((step, i) => {
    step.addEventListener('click', e => {
      steps.forEach(stepToRemove => {
        stepToRemove.classList.remove('step-checked')
      })

      pipes.forEach(pipe => {
        setTimeout(() => {
          pipe.classList.remove('pipe-checked')
        }, time)
      })

      for (let j = 0; j <= i; j++) {
        steps[j].classList.add('step-checked')
      }

      for (let j = 0; j < i; j++) {
        setTimeout(() => {
          pipes[j].classList.add('pipe-checked')
        }, time)
      }
    })
  })
}

function nextQuestion() {
  if (currentComponent.typeQuestion) {
    finalScore[currentComponent.typeQuestion] += score[currentTargetId]
  }

  lastQuestion++
  checkboxOptions = []
  currentComponent = inputs[lastQuestion]
  const container = document.querySelector('.container-input')
  container.classList.remove('transition')
  container.classList.add('hide')
  setTimeout(() => {
    render(createComponentByType(inputs[lastQuestion]))
  }, 100)
  updateProgressBar()
  toggleBtnNext('hide')
  console.log(dataToSend, 'data to send')
}

const toggleBtnNext = action => {
  const btnNext = document.getElementById('next')
  if (action === 'show') {
    if (lastQuestion === inputs.length - 1) {
      btnNext.classList.add('hideItem', 'removeItem')
      btnNext.disabled = true
      btnNext.removeEventListener('click', nextQuestion)
      showSendButton('show')
    } else {
      btnNext.classList.remove('removeItem')
      setTimeout(() => {
        btnNext.classList.remove('hideItem')
        btnNext.disabled = false
        btnNext.addEventListener('click', nextQuestion)
      }, 10)
      showSendButton('hide')
    }
  } else {
    btnNext.classList.add('hideItem')
    btnNext.removeEventListener('click', nextQuestion)
    setTimeout(() => {
      btnNext.disabled = true
      btnNext.classList.add('removeItem')
    }, 10)
    showSendButton('hide')
  }
}

const showSendButton = action => {
  if (action === 'show') {
    const btnSend = document.getElementById('btnSend')
    btnSend.classList.remove('removeItem', 'hideItem')
  } else {
    const btnSend = document.getElementById('btnSend')
    btnSend.classList.add('removeItem', 'hideItem')
  }
}

const setFinalScore = (key, value) => {
  finalScore[key] = value
}

const validateEmail = email => {
  const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/
  return regex.test(email)
}

const validateInputQuestion = (target, dataset) => {
  if (target.type !== 'email' && target.value.length > 1) {
    dataToSend[dataset] = target.value
  } else if (target.type === 'email' && validateEmail(target.value)) {
    dataToSend[dataset] = target.value
  } else {
    delete dataToSend[dataset]
  }
  return !!dataToSend[dataset]
}

const setLastQuestions = () => {
  inputs.splice(inputs.length, 0, ...lastBlockQuestions)
}

const setNoDebtsQuestions = option => {
  const questionToSplit = inputs.findIndex(q => q.name === 'part_to_pay_debts') + 1
  if (Number(option) === 1) {
    inputs.splice(questionToSplit, inputs.length, ...debtsQuestions['no'])
    setLastQuestions()
    updateTotalQuestions()
    updateProgressBar()
  } else {
    inputs.splice(questionToSplit, inputs.length, ...debtsQuestions['si'])
    setLastQuestions()
    updateTotalQuestions()
    updateProgressBar()
  }
}

const setPartnerQuestions = option => {
  const questionToSplit = inputs.findIndex(q => q.name === 'partner') + 1
  if (Number(option) === 1) {
    inputs.splice(questionToSplit, 0, ...partnerQuestions)
    updateTotalQuestions()
    updateProgressBar()
  } else {
    inputs.splice(questionToSplit, inputs.length)
    updateTotalQuestions()
    updateProgressBar()
  }
}

const validateStepRadioQuestion = (target, dataset) => {
  if (target.id > 0) {
    dataToSend[dataset] = target.id
    if (currentComponent.typeQuestion) {
      currentTargetId = target.id
    }
    if (currentComponent.name === 'part_to_pay_debts') {
      setNoDebtsQuestions(target.id)
    }
    if (currentComponent.name === 'partner') {
      setPartnerQuestions(target.id)
    }
  } else {
    delete dataToSend[dataset]
  }
  return !!dataToSend[dataset]
}

const validateCheckboxQuestion = (target, dataset) => {
  if (checkboxOptions.includes(target.id)) {
    const position = checkboxOptions.indexOf(target.id)
    checkboxOptions.splice(position, 1)
  } else {
    checkboxOptions.push(target.id)
  }

  if (checkboxOptions.length > 0) {
    dataToSend[dataset] = checkboxOptions
  } else {
    delete dataToSend[dataset]
  }
  return dataToSend[dataset]
}

const enableNextBtnQuestion = e => {
  const target = e?.target
  const typeInput = e?.target.closest('#containerInput').dataset.type
  const datasetValue = e?.target.closest('#containerInput').dataset.name
  let isValidQuestion = false

  if (!datasetValue) return

  switch (typeInput) {
    case 'input':
      isValidQuestion = validateInputQuestion(target, datasetValue)
      break
    case 'checkbox':
      isValidQuestion = validateCheckboxQuestion(target, datasetValue)
      break

    default:
      isValidQuestion = validateStepRadioQuestion(target, datasetValue)
      break
  }

  if (isValidQuestion) {
    toggleBtnNext('show')
  } else {
    toggleBtnNext('hide')
  }
}

const createContainerQuestions = (name, type) => {
  const div = document.createElement('div')
  div.dataset.name = name
  div.dataset.type = type
  div.id = 'containerInput'
  div.classList.add('container-input')
  setTimeout(() => {
    div.classList.add('transition')
    const container = document.querySelector('.container-question')
    const height = div.clientHeight
    const width = div.clientWidth
    container.style.height = `${height}px`
    container.style.width = `${width}px`
  }, 10)
  return div
}

function debounce(func, wait) {
  let timeout

  return function executedFunction(args) {
    const later = () => {
      clearTimeout(timeout)
      func(args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
/************INPUT COMPONENT*********************/
const createInput = data => {
  const label = document.createElement('label')
  label.classList.add('label')
  label.htmlFor = data.name
  label.textContent = data.label

  const input = document.createElement('input')
  input.type = data.type
  input.required = data.required
  input.id = data.name
  input.placeholder = data.placeHolder
  input.classList.add('input')
  input.autocomplete = 'off'
  input.autofocus = true

  const debouncedInputHandler = debounce(enableNextBtnQuestion, 300)
  input.addEventListener('input', debouncedInputHandler)

  // input.addEventListener('keyup', enableNextBtnQuestion)

  const div = createContainerQuestions(data.name, data.typeComponent)
  div.appendChild(label)
  div.appendChild(input)
  return div
}

/************CHECKBOX COMPONENT*********************/
const createCheckboxGroup = data => {
  const container = document.createElement('div')

  const labelQuestion = document.createElement('p')
  labelQuestion.textContent = data.label
  labelQuestion.classList.add('label', 'label-multi')

  const note = document.createElement('span')
  note.classList.add('note')
  note.textContent = data.note

  container.appendChild(labelQuestion)
  container.appendChild(note)

  const div = createContainerQuestions(data.name, data.typeComponent)

  div.appendChild(container)

  data.options.forEach(option => {
    const label = document.createElement('label')
    label.classList.add('container-checkbox', 'label-interno')
    label.htmlFor = option.id
    label.textContent = option.label

    const input = document.createElement('input')
    input.type = 'checkbox'
    input.id = option.id
    input.addEventListener('click', enableNextBtnQuestion)

    const span = document.createElement('span')
    span.classList.add('checkmark')

    label.appendChild(input)
    label.appendChild(span)
    div.appendChild(label)
  })

  return div
}

/************RADIO COMPONENT*********************/
const createRadioGroup = data => {
  const container = document.createElement('div')

  const labelQuestion = document.createElement('p')
  labelQuestion.textContent = data.label
  labelQuestion.classList.add('label', 'label-multi')

  const note = document.createElement('span')
  note.classList.add('note')
  note.textContent = data.note

  container.appendChild(labelQuestion)
  container.appendChild(note)

  // const div = createContainerQuestions(data.name)
  const div = createContainerQuestions(data.name, data.typeComponent)

  div.appendChild(container)

  data.options.forEach(option => {
    const label = document.createElement('label')
    label.classList.add('container-radio', 'label-interno')
    label.htmlFor = option.id
    label.textContent = option.label

    const input = document.createElement('input')
    input.type = 'radio'
    input.id = option.id
    input.name = data.name
    input.addEventListener('click', enableNextBtnQuestion)

    const span = document.createElement('span')
    span.classList.add('checkmark')

    label.appendChild(input)
    label.appendChild(span)

    div.appendChild(label)
  })

  return div
}

/************STEP COMPONENT*********************/
const createStepComponent = data => {
  const label = document.createElement('label')
  label.htmlFor = data.name
  label.textContent = data.label
  label.classList.add('label')

  const stepInput = document.createElement('div')
  stepInput.classList.add('step-input')

  const steps = Array.from({ length: 5 }, (_, index) => {
    const fragment = document.createDocumentFragment()
    const step = document.createElement('button')
    step.type = 'button'
    step.classList.add('step', `step-finanzas-${data.name}`)
    step.id = `${index + 1}`
    step.addEventListener('click', enableNextBtnQuestion)
    fragment.appendChild(step)
    if (index < 4) {
      const pipe = document.createElement('span')
      pipe.classList.add('pipe')
      fragment.appendChild(pipe)
    }

    return fragment
  })

  const textStepInput = document.createElement('div')
  textStepInput.classList.add('text-step-input')

  data.options.forEach(option => {
    const labelInterno = document.createElement('p')
    labelInterno.classList.add('label-interno')
    labelInterno.innerHTML = option.label.replace(/\s/g, '<br>')
    textStepInput.appendChild(labelInterno)
  })

  stepInput.append(...steps)

  const div = createContainerQuestions(data.name, data.typeComponent)
  div.appendChild(label)
  div.appendChild(stepInput)
  div.appendChild(textStepInput)

  return div
}

const listCreateComponents = {
  input: createInput,
  checkbox: createCheckboxGroup,
  step: createStepComponent,
  radio: createRadioGroup,
}

const createComponentByType = data => {
  const component = data.typeComponent

  return listCreateComponents[component](data)
}

const render = component => {
  const divQuestions = document.getElementById('questions')
  divQuestions.appendChild(component)
  if (currentComponent.typeComponent === 'step') {
    stepFinanzas()
  }
  if (lastQuestion > 0) {
    setTimeout(() => {
      divQuestions.removeChild(divQuestions.firstElementChild)
    }, 500)
  }
}

function sendForm(e) {
  e.preventDefault()
  if (lastQuestion < inputs.length - 1) return

  // const url = document.getElementById('containerQuestions').getAttribute('data-url')
  // const nonce = document.getElementById('containerQuestions').getAttribute('data-nonce')

  dataToSend.action = 'add_survey_form'
  dataToSend.score = JSON.stringify(finalScore)

  const params = new URLSearchParams()
  for (const key in dataToSend) {
    if (dataToSend.hasOwnProperty(key)) {
      // params.append(key, dataToSend[key])
      if (Array.isArray(dataToSend[key])) {
        // Para cada elemento del array, agregamos la misma clave con diferentes valores
        dataToSend[key].forEach(item => {
          params.append(key + '[]', item) // Agregamos '[]' al nombre de la clave para indicar que es un array
        })
      } else {
        // Para valores no array, simplemente agregamos la clave y el valor
        params.append(key, dataToSend[key])
      }
    }
  }
  console.log(params)
  params.append('nonce', nonce)

  const fetchConfig = {
    method: 'POST',
    body: params,
  }

  fetch(url, fetchConfig)
    .then(res => res.json())
    .then(data => console.log(data, 'server response'))
    .catch(err => {
      console.log(err, 'error')
    })
}

const eventForm = () => {
  const form = document.getElementById('form')
  form.addEventListener('submit', sendForm)
}

const updateTotalQuestions = () => {
  const totalQuestionsValue = document.getElementById('totalQuestions')
  console.log(inputs.length, lastBlockQuestions.length)
  totalQuestionsValue.textContent = inputs.length
  // totalQuestionsValue.textContent = inputs.length + lastQuestion.length
}

const updateProgressBar = () => {
  const progressBar = document.querySelector('.fill-progress-bar')

  const currentQuestion = document.getElementById('currentQuestion')
  currentQuestion.textContent = lastQuestion + 1

  const percentage = Math.round(((lastQuestion + 1) * 100) / inputs.length)
  progressBar.style.width = `${percentage}%`
}

window.addEventListener('DOMContentLoaded', () => {
  eventForm()
  changeImageQuestion()
  setLastQuestions()
  render(createComponentByType(inputs[lastQuestion]))
  updateProgressBar()
  updateTotalQuestions()
})
