# REQUERIMIENTOS NO FUNCIONALES

## Estudiantes: Tyson Bernard Villada - 10092917, Jhors Fernandez Diaz - 100092961 Y Edwin Daza franco - 100090581

## Descripción:

### Disponibilidad:

Objetivo: El sistema debe estar disponible en todo momento, incluso en situaciones de fallos parciales.
Requerimientos:
El conjunto de réplicas debe garantizar la disponibilidad continua incluso en caso de fallo de un nodo.
El tiempo de recuperación después de un fallo no debe exceder un cierto umbral.

### Rendimiento:

Objetivo: El sistema debe manejar cargas de trabajo de lectura y escritura dentro de límites aceptables.
Requerimientos:
El rendimiento de lectura debe ser óptimo, permitiendo consultas rápidas y eficientes en los nodos secundarios.
La replicación no debe afectar significativamente el rendimiento del nodo primario durante la escritura.

### Consistencia:

Objetivo: Los datos replicados deben ser consistentes entre todos los nodos del conjunto.
Requerimientos:
La replicación debe garantizar la consistencia eventual de los datos entre el nodo primario y los nodos secundarios.
Las lecturas desde los nodos secundarios no deben devolver datos desactualizados.

### Escalabilidad:

Objetivo: El sistema debe ser capaz de manejar un crecimiento en la cantidad de datos y la carga de trabajo.
Requerimientos:
Debería ser posible agregar nodos secundarios al conjunto de réplicas para escalar horizontalmente.
La adición de nodos no debería afectar negativamente el rendimiento general del sistema.

### Recuperación de Desastres:

Objetivo: El sistema debe ser capaz de recuperarse rápidamente después de eventos catastróficos.
Requerimientos:
Debería ser posible realizar copias de seguridad y restaurar el conjunto de réplicas en caso de pérdida total de datos.

### Monitoreo y Diagnóstico:

Objetivo: Administradores y operadores deben poder monitorear y diagnosticar el estado del conjunto de réplicas.
Requerimientos:
Proporcionar herramientas de monitoreo en tiempo real para verificar el estado de cada nodo y la salud general del conjunto.
Los registros de eventos deben ser detallados y accesibles para facilitar la resolución de problemas.

### Seguridad:

Objetivo: Garantizar la integridad y confidencialidad de los datos replicados.
Requerimientos:
La comunicación entre nodos debe ser segura y encriptada.
Los nodos secundarios deben requerir autenticación para unirse al conjunto de réplicas.

### Tiempos de Respuesta:

Objetivo: Mantener tiempos de respuesta razonables para consultas y actualizaciones.
Requerimientos:
Las operaciones de escritura no deben experimentar retrasos significativos debido a la replicación.
Las lecturas desde los nodos secundarios deben proporcionar tiempos de respuesta competitivos.

# Nota:
Este documento de requerimientos no funcionales establece los criterios clave para garantizar la redundancia y disponibilidad 24x7 del sistema de gestión de la base de datos del torneo de MMA en MongoDB. Estos criterios son esenciales para cumplir con los estándares de calidad y la continuidad operativa del sistema.




