Basándonos en los requerimientos no funcionales establecidos, diseñaremos una estrategia de replicación que cumpla con los criterios de redundancia y disponibilidad 24x7 para la base de datos del torneo de MMA.

# Estrategia de Replicación:

## Número de Nodos:

Configuraremos un conjunto de réplicas con un mínimo de 3 nodos para garantizar redundancia y tolerancia a fallos.

## Resiliencia a Fallos:

Implementaremos una resiliencia a fallos configurando un conjunto de réplicas capaz de soportar la pérdida simultánea de hasta dos nodos secundarios sin afectar la disponibilidad del sistema.

## Replicación Asincrónica:

Se permitirá la replicación asincrónica entre nodos secundarios y el primario para garantizar una eficiencia óptima y evitar impactos significativos en las operaciones de escritura del nodo primario.

## Recuperación Rápida:

Estableceremos un tiempo de recuperación objetivo después de un fallo de nodo de no más de 30 segundos para mantener una alta disponibilidad del sistema.

## Escalabilidad Dinámica:

Implementaremos la capacidad de añadir nodos al conjunto de réplicas sin afectar negativamente la disponibilidad general del sistema.

## Copias de Seguridad Automatizadas:

Programaremos y ejecutaremos copias de seguridad automáticas diarias para garantizar la integridad de los datos y facilitar la recuperación en caso de desastres.