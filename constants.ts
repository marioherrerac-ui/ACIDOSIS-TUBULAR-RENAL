
import { LearningModuleData } from './types';

export const COURSE_DATA: LearningModuleData[] = [
  {
    id: 1,
    title: "Módulo 1: El Equilibrio Vital - El pH de Nuestro Cuerpo",
    content: [
      "Imagina que el cuerpo es como una piscina. Para que el agua esté perfecta, ni muy ácida ni muy alcalina, necesita tener un balance exacto. En nuestro cuerpo, ese balance se mide con algo llamado 'pH'. La sangre necesita mantenerse en un rango muy estrecho y saludable: entre 7,35 y 7,45.",
      "Para mantener este equilibrio, el cuerpo tiene un equipo de superhéroes. Los dos jugadores estrella son el bicarbonato (una sustancia que neutraliza el ácido) y el dióxido de carbono (el gas que exhalamos). Trabajan juntos constantemente para que el pH no se descontrole. Si hay demasiado ácido, el bicarbonato actúa para neutralizarlo. Es un sistema de defensa increíblemente preciso y vital para que todas nuestras células funcionen correctamente."
    ],
    quiz: [
      {
        text: "¿Cuál es el rango de pH normal y saludable en la sangre de una persona?",
        options: ["Entre 7.0 y 7.2", "Entre 7.35 y 7.45", "Entre 7.8 y 8.0"],
        correctAnswerIndex: 1,
        feedback: "¡Correcto! El cuerpo humano mantiene un control muy estricto sobre el pH de la sangre, manteniéndolo entre 7,35 y 7,45 para un funcionamiento óptimo."
      },
      {
        text: "¿Qué dos elementos son clave para regular el pH en el cuerpo?",
        options: ["Sal y Azúcar", "Oxígeno y Nitrógeno", "Bicarbonato y Dióxido de Carbono"],
        correctAnswerIndex: 2,
        feedback: "¡Así es! El bicarbonato actúa como un 'amortiguador' contra el ácido, mientras que los niveles de dióxido de carbono son regulados por la respiración, ambos cruciales para el equilibrio."
      },
      {
        text: "Si el cuerpo tiene un exceso de ácido, ¿qué hace el sistema para solucionarlo?",
        options: ["Produce más ácido para combatirlo", "Usa el bicarbonato para neutralizarlo", "No hace nada, se corrige solo"],
        correctAnswerIndex: 1,
        feedback: "¡Exacto! El bicarbonato es la primera línea de defensa del cuerpo para neutralizar el exceso de ácido y mantener el pH en su nivel correcto."
      }
    ]
  },
  {
    id: 2,
    title: "Módulo 2: Los Riñones - Los Súper Filtros del Cuerpo",
    content: [
      "Siguiendo con la analogía de la piscina, los riñones serían el sistema de filtrado más avanzado del mundo. Su trabajo es mantener el 'agua' de nuestro cuerpo (la sangre) limpia y en perfecto equilibrio. Lo hacen decidiendo qué sustancias útiles se quedan y cuáles se van por la orina.",
      "Una de sus tareas más importantes es gestionar el bicarbonato y los ácidos. Los riñones son muy inteligentes: 'reabsorben' el bicarbonato, es decir, lo rescatan para que no se pierda en la orina y pueda seguir neutralizando ácidos en el cuerpo. Al mismo tiempo, se encargan de 'excretar' (eliminar) el exceso de ácido para que no se acumule. Son los guardianes maestros del equilibrio ácido-base."
    ],
    quiz: [
      {
        text: "¿Cuál es una de las funciones más importantes de los riñones para el equilibrio del cuerpo?",
        options: ["Producir hormonas del crecimiento", "Regular el pH de la sangre", "Digerir los alimentos"],
        correctAnswerIndex: 1,
        feedback: "¡Correcto! Los riñones son fundamentales para mantener el equilibrio ácido-base, filtrando la sangre y ajustando los niveles de bicarbonato y ácidos."
      },
      {
        text: "Cuando los riñones 'reabsorben' bicarbonato, ¿qué están haciendo?",
        options: ["Lo están eliminando por la orina", "Lo están devolviendo a la sangre para que sea útil", "Lo están convirtiendo en ácido"],
        correctAnswerIndex: 1,
        feedback: "¡Muy bien! 'Reabsorber' significa que el riñón recupera el valioso bicarbonato y lo devuelve al torrente sanguíneo para que pueda seguir cumpliendo su función."
      },
      {
        text: "¿Qué eliminan principalmente los riñones para evitar que la sangre se vuelva demasiado ácida?",
        options: ["Azúcar y grasas", "Iones de hidrógeno (ácido)", "Vitaminas y minerales"],
        correctAnswerIndex: 1,
        feedback: "¡Exacto! Los riñones filtran y eliminan activamente los iones de hidrógeno, que son la causa de la acidez, a través de la orina."
      }
    ]
  },
  {
    id: 3,
    title: "Módulo 3: El Riñón del Recién Nacido - Un Órgano en Desarrollo",
    content: [
      "Los riñones de un recién nacido, y especialmente los de un bebé prematuro, son como un empleado nuevo en su primer día de trabajo. Tienen todas las herramientas, pero todavía están aprendiendo a usarlas con total eficiencia. Son órganos inmaduros.",
      "Esto significa que su capacidad para filtrar la sangre (conocida como 'tasa de filtración glomerular') es mucho más baja que la de un adulto. No son tan buenos reabsorbiendo bicarbonato ni eliminando ácido. Por esta razón, los bebés, y en particular los prematuros, son mucho más vulnerables a que su equilibrio de pH se altere. Es una etapa delicada donde su sistema aún se está adaptando al mundo exterior."
    ],
    quiz: [
      {
        text: "¿Cómo es la función renal de un recién nacido en comparación con un adulto?",
        options: ["Es mucho más eficiente", "Es idéntica", "Es inmadura y menos eficiente"],
        correctAnswerIndex: 2,
        feedback: "¡Correcto! Los riñones de un neonato aún están en desarrollo y no funcionan con la misma eficiencia que los de un adulto."
      },
      {
        text: "¿Por qué los bebés prematuros tienen un riesgo aún mayor de problemas con el equilibrio ácido-base?",
        options: ["Porque duermen demasiado", "Porque sus riñones no han completado su desarrollo", "Porque no beben suficiente agua"],
        correctAnswerIndex: 1,
        feedback: "¡Así es! La prematuridad significa que los riñones están aún más inmaduros, lo que los hace menos capaces de manejar el equilibrio de ácidos."
      },
      {
        text: "Una 'tasa de filtración glomerular' baja en un neonato significa que...",
        options: ["Sus riñones filtran la sangre de forma más lenta y menos eficaz", "Sus riñones son más grandes de lo normal", "No necesitan filtrar la sangre todavía"],
        correctAnswerIndex: 0,
        feedback: "¡Exacto! Esta baja tasa de filtración es una característica normal de la inmadurez renal neonatal y es una de las razones de su vulnerabilidad."
      }
    ]
  },
  {
    id: 4,
    title: "Módulo 4: ¿Qué es la Acidosis Tubular Renal (ATR)?",
    content: [
      "El nombre 'Acidosis Tubular Renal' puede sonar complicado, pero podemos descomponerlo. 'Acidosis' significa que hay demasiado ácido en la sangre. 'Tubular Renal' nos dice dónde está el problema: en los 'túbulos' de los riñones, que son como las tuberías del sistema de filtrado.",
      "En resumen, la ATR es una condición en la que los riñones no pueden hacer bien su trabajo de mantener el equilibrio ácido-base. Esto puede ocurrir por dos razones principales: o bien los riñones no son capaces de eliminar el ácido del cuerpo a través de la orina, o bien pierden demasiado bicarbonato (la sustancia que neutraliza el ácido). El resultado es el mismo: la sangre se vuelve demasiado ácida, lo que puede afectar el crecimiento y la salud general del bebé."
    ],
    quiz: [
      {
        text: "¿Qué significa 'Acidosis' en el término ATR?",
        options: ["Una infección en los riñones", "Un exceso de ácido en la sangre", "Un exceso de azúcar en la orina"],
        correctAnswerIndex: 1,
        feedback: "¡Correcto! 'Acidosis' se refiere a un estado en el que el pH del cuerpo es más bajo de lo normal, es decir, más ácido."
      },
      {
        text: "¿En qué parte del riñón se origina el problema en la ATR?",
        options: ["En los vasos sanguíneos", "En los túbulos renales", "En la cápsula externa"],
        correctAnswerIndex: 1,
        feedback: "¡Así es! El problema reside en los túbulos, que son las estructuras responsables de la reabsorción y secreción de sustancias."
      },
      {
        text: "¿Cuáles son las dos causas principales de la ATR?",
        options: ["No eliminar suficiente ácido o perder demasiado bicarbonato", "No producir suficiente orina o beber poca agua", "Comer demasiada sal o azúcar"],
        correctAnswerIndex: 0,
        feedback: "¡Excelente! Estos son los dos mecanismos de fallo que conducen a la acumulación de ácido en el cuerpo en la ATR."
      }
    ]
  },
    {
    id: 5,
    title: "Módulo 5: Los Diferentes Tipos de ATR",
    content: [
      "No todas las ATR son iguales. Se clasifican en tipos, dependiendo de la parte específica del 'sistema de tuberías' del riñón que esté fallando. Pensemos en una fábrica:",
      "**ATR tipo I (distal):** El problema está al final de la línea. La fábrica produce los desechos (ácido), pero el camión de la basura no puede sacarlos de la fábrica para eliminarlos. El ácido no puede ser excretado en la orina.",
      "**ATR tipo II (proximal):** El problema está al principio de la línea. Un ingrediente clave (el bicarbonato) se escapa por un agujero en la cinta transportadora y se pierde. El riñón no puede reabsorber suficiente bicarbonato.",
      "**ATR tipo IV:** Este es un problema de 'comunicación'. El jefe (una hormona llamada aldosterona) da la orden de trabajar, pero los empleados (los riñones) no la escuchan o no responden bien. Esto afecta principalmente el manejo del potasio y del ácido."
    ],
    quiz: [
      {
        text: "En la ATR tipo I, ¿cuál es el problema principal?",
        options: ["El riñón no puede excretar el ácido al final del proceso.", "El riñón pierde mucho bicarbonato al principio.", "El riñón no responde a las hormonas."],
        correctAnswerIndex: 0,
        feedback: "¡Correcto! El tipo I es un defecto en la 'secreción' final de ácido en la orina."
      },
      {
        text: "Imagina que el bicarbonato se 'escapa' por la orina porque el riñón no puede retenerlo. ¿A qué tipo de ATR corresponde?",
        options: ["ATR tipo I", "ATR tipo II", "ATR tipo IV"],
        correctAnswerIndex: 1,
        feedback: "¡Muy bien! El tipo II se caracteriza por un defecto en la 'reabsorción' de bicarbonato, haciendo que se pierda."
      },
      {
        text: "La ATR tipo IV está relacionada con un problema con la hormona...",
        options: ["Insulina", "Tiroides", "Aldosterona"],
        correctAnswerIndex: 2,
        feedback: "¡Exacto! El tipo IV implica una deficiencia de aldosterona o una resistencia del riñón a sus efectos."
      }
    ]
  },
  {
    id: 6,
    title: "Módulo 6: Diagnóstico, Tratamiento y Pronóstico",
    content: [
      "¿Cómo saben los médicos si un bebé tiene ATR? No es algo que se vea a simple vista. Se diagnostica mediante análisis de sangre y orina. Los médicos miden el pH, los niveles de bicarbonato, cloro y otros electrolitos. Si ven que la sangre es ácida pero la orina no lo es tanto como debería, es una señal de alerta.",
      "La buena noticia es que la ATR tiene tratamiento. El objetivo es simple: neutralizar el exceso de ácido en el cuerpo. Esto se logra dando al bebé suplementos de una sustancia alcalina, como bicarbonato de sodio o citrato de potasio. Es como darle al cuerpo un antiácido para restaurar el equilibrio.",
      "Con un diagnóstico temprano y un tratamiento adecuado, el pronóstico para los niños con ATR es generalmente muy bueno. Pueden llevar una vida normal y saludable. La clave es identificar el problema a tiempo y seguir el tratamiento para corregir el desequilibrio."
    ],
    quiz: [
      {
        text: "¿Qué pruebas son esenciales para diagnosticar la ATR?",
        options: ["Radiografías de los huesos", "Análisis de sangre y orina", "Pruebas de visión"],
        correctAnswerIndex: 1,
        feedback: "¡Correcto! Los análisis de sangre y orina permiten a los médicos ver el desequilibrio ácido-base y el funcionamiento de los riñones."
      },
      {
        text: "¿Cuál es el objetivo principal del tratamiento para la ATR?",
        options: ["Fortalecer los músculos", "Aumentar el peso del bebé", "Corregir el exceso de ácido en el cuerpo"],
        correctAnswerIndex: 2,
        feedback: "¡Así es! El tratamiento se centra en administrar agentes alcalinos para neutralizar la acidosis y restaurar el pH normal."
      },
      {
        text: "Con un diagnóstico y tratamiento rápidos, el pronóstico para los pacientes con ATR es generalmente...",
        options: ["Reservado", "Bueno, permitiendo una vida normal", "Desconocido"],
        correctAnswerIndex: 1,
        feedback: "¡Exacto! La detección temprana y el manejo adecuado son clave para un excelente pronóstico a largo plazo."
      }
    ]
  }
];
