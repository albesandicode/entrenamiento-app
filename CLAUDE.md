# Entrenamiento App

## Qué es

App para llevar un registro de mis entrenamientos, cuál fue el último, poder ver los detalles de cada uno, añadir un nuevo entrenamiento.

Tiene dos versiones:

- v1: Está terminada, sirve como referencia (carpeta raíz, JavaScript vanilla, publicada en GitHub Pages).
- Versión Angular: Es en la que se trabaja actualmente (carpeta entrenamiento-angular/, en desarrollo).

Funcionalidad propia: «¿Qué hago hoy?»

La aplicación recomendará el peso para cada ejercicio a partir del historial del usuario.

Regla de progresión del peso:

Si se completan todas las series con las repeticiones planificadas y un RIR igual o superior a 2 en cada serie, se aumentará el peso para la próxima sesión según el incremento definido para ese ejercicio.

Si no se cumple alguna de estas condiciones, se mantendrá el peso utilizado.

Importante: esta funcionalidad todavía no está implementada. La regla anterior describe el comportamiento previsto, no una funcionalidad disponible actualmente.

## Stack

- Angular ^22.2.0, con TypeScript en modo estricto.
- Datos: por ahora en el servicio workout-data.ts(WorkoutData - array en memoria). Próximo paso: leer y guardar por HTTP contra json-server (db.json).
- Más adelante: backend con Spring Boot y Java, base de datos (por decidir).

## Reglas

- Idioma: Responde siempre en español para las explicaciones y la comunicación; inglés para el código, los nombres de variables, funciones, clases.
- Antes de cambiar código: Propónme un plan analizando el problema antes de tocar cualquier archivo, explicar qué archivos se van a modificar, qué cambios se proponen y esperar mi aprobación.
- Git: No hacer commit ni push nunca; los hago yo.
- Dependencias (npm install): No instalar nada sin preguntarme antes y decirme para qué sirve y justificar por qué son necesarias.
- Explicaciones: Explicar detalladamente, con lenguaje claro, cada cambio línea a línea y por qué, alternativas relevantes.
- Comprobar que funciona: Ejecutar ng build desde entrenamiento-angular/ y comprobar que finaliza sin errores. No ejecutar tests hasta nuevo aviso. Después, indicarme qué debo comprobar en el navegador y qué resultado debería ver para que pueda verificarlo manualmente. Si no se puede comprobar algo, indicarlo claramente y no afirmar que funciona sin haberlo verificado.
- No refactorizar código que no esté relacionado con la tarea.
- No añadir funcionalidades que no te haya pedido.
- Si hay varias opciones técnicas, preséntamelas con sus pros y contras y espera a que elija.