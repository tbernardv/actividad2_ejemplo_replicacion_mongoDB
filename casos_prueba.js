// Caso de Prueba 1: Creación del Replicaset

/**
 * Código de Prueba:
 */
MiejReplicaSet = new ReplSetTest ({name: "TorneoReplicaSet", nodes: 3});
MiejReplicaSet.startSet();
MiejReplicaSet.initiate();

/**
 * Resultados y Análisis:
 * Resultados: Se espera que el conjunto de réplicas sea creado, iniciado y configurado correctamente.
 * Análisis: Verifica si la creación e inicio del conjunto de réplicas se realizó sin errores.
 */


// Caso de Prueba 2: Inserción de Datos en el Nodo Primario
/**
 * Código de prueba:
 */
// Conexión al nodo primario del grupo de réplica
conn = new Mongo("localhost:27017");
testDB = conn.getDB("torneo_mma");

/**
 * Inserción de datos en el nodo primario
 */
// Conexión al nodo primario del grupo de réplica
conn = new Mongo("localhost:27017");

// Obtenemos la BD sobre la que realizaremos la prueba (torneo_mma en este caso)
testDB = conn.getDB("torneo_mma");

// Preguntamos si es el nodo primario utilizando la función isMaster()
testDB.isMaster();

// Inserción de registros en la colección 'deportistas'
testDB.deportistas.insert([
  {
    "nombre": "John Doe",
    "edad": 28,
    "categoria_peso": "Mediano",
    "equipo": "Team Alpha",
    "record": { "victorias": 10, "derrotas": 3, "empates": 1 }
  },
  // ... (resto de los datos)
]);

// Inserción de registros en la colección 'entrenadores'
testDB.entrenadores.insert([
  {
    "nombre": "Coach Johnson",
    "especialidad": "Boxeo",
    "equipo": "Team Alpha",
    "peleadores": ["John Doe"]
  },
  // ... (resto de los datos)
]);

// Inserción de registros en la colección 'arbitros'
testDB.arbitros.insert([
  {
    "nombre": "Referee Smith",
    "experiencia": "7 años"
  },
  // ... (resto de los datos)
]);

// Inserción de registros en la colección 'encuentros_deportivos'
testDB.encuentros_deportivos.insert([
  {
    "fecha": ISODate("2023-02-10T19:00:00Z"),
    "lugar": "Octagon Arena",
    "competidores": ["Mike Tyson", "Tyson Bernard"],
    "arbitro_asignado": "Referee Smith"
  },
  // ... (resto de los datos)
]);

// Inserción de registros en la colección 'resultados'
testDB.resultados.insert([
  {
    "encuentro_id": ObjectId("5f5b8f9a227c9a7c6a855999"),
    "ganador": "Mike Tyson",
    "metodo": "KO",
    "ronda": 1,
    "tiempo": "0:52"
  },
  // ... (resto de los datos)
]);

print("Datos insertados exitosamente en el nodo primario del conjunto de réplica.");

/**
 * Resultados y Análisis:
 * Resultados: Los datos se insertan correctamente en el nodo primario.
 * Análisis: Verifica si los datos se replican automáticamente a los nodos secundarios.
 */


// Caso de Prueba 3: Comprobación de la Réplica en Nodos Secundarios
/**
 * Código de la prueba:
 */
// Conexión al nodo secundario del grupo de réplica
connSecondary = new Mongo("localhost:20001");
secondaryTestDB = connSecondary.getDB("torneo_mma");

// Comprobación si el nodo secundario es maestro
secondaryTestDB.isMaster();

/**
 * Resultados y Análisis:
 * Resultados: Se espera que el nodo secundario sea un nodo de réplica y no el maestro.
 * Análisis: Verifica si la replicación asincrónica está funcionando adecuadamente.
 */

// Caso de Prueba 4: Prueba de Conmutación por Error (Failover)
/**
 * Código de prueba:
 */
// Detener específicamente el nodo primario para simular una caída
connPrimary = new Mongo("localhost:27017");
primaryDB = connPrimary.getDB("torneo_mma");

// Comprobamos si este nodo es el primario antes de detenerlo
primaryDB.isMaster();

// Ahora detenemos el nodo primario
MiejReplicaSet.stop(0);

/**
 * Resultados y Análisis:
 * Resultados: Se espera que el nodo secundario tome el rol de primario después de la caída.
 * Análisis: Verifica cómo el conjunto de réplicas maneja la conmutación por error y cómo se restablece la disponibilidad.
 */


// ---------------------------------- REPORTE -------------------------------

/**
 * Estado del Conjunto de Réplicas:
 * Ejecutar rs.status() y obtener información sobre el estado actual del conjunto de réplicas. (OK)
 * Estado de las Colecciones en Nodos Secundarios:
 * Verificamar si las colecciones en los nodos secundarios reflejan correctamente los datos del nodo primario. (OK)
 * 
 * Análisis de Rendimiento:
 * Observar el rendimiento de lectura y escritura durante las pruebas y evaluar la eficacia de la replicación. (OK)
 * Registro de Errores o Problemas:
 * Buscar cualquier mensaje de error en los logs de MongoDB que pueda indicar problemas durante las pruebas. (OK)
 * 
 * Nota: Con estos casos de prueba, obtuvimos información sobre la robustez y confiabilidad de la configuración de replicación para la base de datos torneo_mma en MongoDB.
 */






