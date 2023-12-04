/**
 * Actividad 2:
 * Diseño y operaciones CRUD en Bases de datos NoSQL:
 * 
 * link: https://github.com/tbernardv/actividad2_ejemplo_replicacion_mongoDB
 * 
 * EJECUCIÓN DE LA ESTRATEGIA DE REPLICACIÓN >>
 * 
 */

// Paso 1: Creación del Conjunto de Réplicas
TorneoReplicaSet = new ReplSetTest({ name: "TorneoReplicaSet", nodes: 3 });
TorneoReplicaSet.startSet();

// Paso 2: Iniciar Réplica
TorneoReplicaSet.initiate();

// Paso 3: Prueba de Grupo de Réplica
// Conexión al nodo primario del grupo de réplica
conn = new Mongo("localhost:27017");
testDB = conn.getDB("torneo_mma");

// Comprobamos si es el nodo primario
testDB.isMaster();

// Paso 4: Inserción de Datos en el Nodo Primario
// Inserción de registros en la colección 'deportistas'
testDB.deportistas.insert([
    {
      "nombre": "John Doe",
      "edad": 28,
      "categoria_peso": "Mediano",
      "equipo": "Team Alpha",
      "record": { "victorias": 10, "derrotas": 3, "empates": 1 }
    },
    {
      "nombre": "Mike Tyson",
      "edad": 54,
      "categoria_peso": "Pesado",
      "equipo": "Iron Fist Gym",
      "record": { "victorias": 50, "derrotas": 6, "empates": 2 }
    },
    {
      "nombre": "Tyson Bernard",
      "edad": 30,
      "categoria_peso": "Wélter",
      "equipo": "Tiger MMA",
      "record": { "victorias": 12, "derrotas": 2, "empates": 0 }
    },
    {
      "nombre": "Deontay Wilder",
      "edad": 35,
      "categoria_peso": "Pesado",
      "equipo": "Wilder's Warriors",
      "record": { "victorias": 42, "derrotas": 1, "empates": 1 }
    },
    {
      "nombre": "Jon Jones",
      "edad": 34,
      "categoria_peso": "Semipesado",
      "equipo": "Jackson-Wink MMA",
      "record": { "victorias": 26, "derrotas": 1, "empates": 0 }
    }
  ]);
  
  // Inserción de registros en la colección 'entrenadores'
  testDB.entrenadores.insert([
    {
      "nombre": "Coach Johnson",
      "especialidad": "Boxeo",
      "equipo": "Team Alpha",
      "peleadores": ["John Doe"]
    },
    {
      "nombre": "Coach Tyson",
      "especialidad": "Kickboxing",
      "equipo": "Iron Fist Gym",
      "peleadores": ["Mike Tyson"]
    },
    {
      "nombre": "Coach Rodriguez",
      "especialidad": "Jiu-Jitsu",
      "equipo": "Tiger MMA",
      "peleadores": ["Tyson Bernard"]
    },
    {
      "nombre": "Coach Wilder",
      "especialidad": "Muay Thai",
      "equipo": "Wilder's Warriors",
      "peleadores": ["Deontay Wilder"]
    },
    {
      "nombre": "Coach Jones",
      "especialidad": "Wrestling",
      "equipo": "Jackson-Wink MMA",
      "peleadores": ["Jon Jones"]
    }
  ]);
  
  // Inserción de registros en la colección 'arbitros'
  testDB.arbitros.insert([
    {
      "nombre": "Referee Smith",
      "experiencia": "7 años"
    },
    {
      "nombre": "Referee Martinez",
      "experiencia": "4 años"
    },
    {
      "nombre": "Referee Brown",
      "experiencia": "6 años"
    },
    {
      "nombre": "Referee Taylor",
      "experiencia": "8 años"
    },
    {
      "nombre": "Referee White",
      "experiencia": "3 años"
    }
  ]);
  
  // Inserción de registros en la colección 'encuentros_deportivos'
  testDB.encuentros_deportivos.insert([
    {
      "fecha": ISODate("2023-02-10T19:00:00Z"),
      "lugar": "Octagon Arena",
      "competidores": ["Mike Tyson", "Tyson Bernard"],
      "arbitro_asignado": "Referee Smith"
    },
    {
      "fecha": ISODate("2023-03-05T20:15:00Z"),
      "lugar": "Thunderdome MMA",
      "competidores": ["Deontay Wilder", "Jon Jones"],
      "arbitro_asignado": "Referee Martinez"
    },
    {
      "fecha": ISODate("2023-04-20T18:45:00Z"),
      "lugar": "Strikeforce Arena",
      "competidores": ["John Doe", "Tyson Bernard"],
      "arbitro_asignado": "Referee Brown"
    },
    {
      "fecha": ISODate("2023-05-15T21:30:00Z"),
      "lugar": "Cage Warriors Stadium",
      "competidores": ["Mike Tyson", "Jon Jones"],
      "arbitro_asignado": "Referee Taylor"
    },
    {
      "fecha": ISODate("2023-06-08T19:45:00Z"),
      "lugar": "Warrior's Den",
      "competidores": ["Deontay Wilder", "John Doe"],
      "arbitro_asignado": "Referee White"
    }
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
    {
      "encuentro_id": ObjectId("5f5b8f9a227c9a7c6a85599b"),
      "ganador": "Tyson Bernard",
      "metodo": "Decisión Unánime",
      "ronda": 5,
      "tiempo": "25:00"
    },
    {
      "encuentro_id": ObjectId("5f5b8f9a227c9a7c6a85599c"),
      "ganador": "Deontay Wilder",
      "metodo": "TKO",
      "ronda": 2,
      "tiempo": "3:15"
    },
    {
      "encuentro_id": ObjectId("5f5b8f9a227c9a7c6a85599d"),
      "ganador": "Jon Jones",
      "metodo": "Sumisión",
      "ronda": 4,
      "tiempo": "4:30"
    },
    {
      "encuentro_id": ObjectId("5f5b8f9a227c9a7c6a85599e"),
      "ganador": "Tyson Bernard",
      "metodo": "KO",
      "ronda": 2,
      "tiempo": "1:10"
    }
  ]);
  
  print("Datos insertados exitosamente en el nodo primario del conjunto de réplica.");

// Paso 5: Comprobación de Réplica en Nodos Secundarios
// Conexión al nodo secundario del grupo de réplica
connSecondary = new Mongo("localhost:27018");
secondaryTestDB = connSecondary.getDB("torneo_mma");

// Comprobamos si este nodo es el secundario
secondaryTestDB.isMaster();

// Paso 6: Activar Permisos para Lecturas en Nodo Secundario
connSecondary.setSecondaryOk();

// Paso 7: Comprobar Datos Replicados en Nodo Secundario
// Consulta sobre la colección deportistas en el nodo secundario
secondaryTestDB.deportistas.count();

// Buscar uno en específico en la colección deportistas en el nodo secundario
secondaryTestDB.deportistas.findOne();

// Paso 8: Detener el Nodo Primario
// Detener específicamente el nodo primario
connPrimary = new Mongo("localhost:27017");
primaryDB = connPrimary.getDB("torneo_mma");
primaryDB.isMaster();
MiejReplicaSet.stop(0);

  


