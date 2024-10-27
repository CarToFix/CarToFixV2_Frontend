/**
 * This code is just data to fetch to test the code and will be replaced when db is available
 */

export const vehicleDataWithDetails = [
  {
    id: '1',
    brand: 'Ford',
    model: 'Fiesta Titanium',
    plate: 'ABC 1234',
    services: 'Mantenimiento general',
    lastService: '02/07/2023',
    kilometraje: 45000,
    owner: 'John Doe',
    color: 'Red',
    typeVehicle: 'Auto',
    mail: 'john.doe@example.com',
    number: '123-456-7890',
    inspeccion: 'Revisión completa después de viaje largo',
    works: [
      {
        id: 1,
        plate: 'ABC 1234',
        date: '01-10-2024',
        work: 'Mecanica',
        detail: 'Cambio de aceite y rotación de llantas.',
        assigned: 'Pepe',
        kilometraje: 46000,
        price: '$4000'
      },
      {
        id: 2,
        plate: 'ABC 1234',
        date: '15-10-2024',
        work: 'Mecanica',
        detail: 'Inspección de frenos y pastillas.',
        assigned: 'Luis',
        kilometraje: 46050,
        price: '$2500'
      },
      {
        id: 3,
        plate: 'ABC 1234',
        date: '30-10-2024',
        work: 'Electricidad',
        detail: 'Revisión del sistema eléctrico.',
        assigned: 'Sofia',
        kilometraje: 46100,
        price: '$1800'
      }
    ]
  },
  {
    id: '2',
    brand: 'Audi',
    model: 'A3 Sportback',
    plate: 'DEF 5678',
    services: 'Cambio de aceite',
    lastService: '15/05/2023',
    kilometraje: 32000,
    owner: 'Jane Smith',
    color: 'Blue',
    typeVehicle: 'Auto',
    mail: 'jane.smith@example.com',
    number: '987-654-3210',
    inspeccion: 'Cambio de aceite y revisión general',
    works: [
      {
        id: 1,
        plate: 'DEF 5678',
        date: '05-11-2023',
        work: 'Mecanica',
        detail: 'Reemplazo de pastillas de freno.',
        assigned: 'Martin',
        kilometraje: 33000,
        price: '$6500'
      },
      {
        id: 2,
        plate: 'DEF 5678',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Inspección de suspensión.',
        assigned: 'Carlos',
        kilometraje: 33100,
        price: '$3200'
      },
      {
        id: 3,
        plate: 'DEF 5678',
        date: '01-12-2023',
        work: 'Mecanica',
        detail: 'Revisión del sistema de frenos.',
        assigned: 'Ana',
        kilometraje: 33200,
        price: '$2000'
      }
    ]
  },
  {
    id: '3',
    brand: 'Toyota',
    model: 'Corolla',
    plate: 'GHI 9012',
    services: 'Revisión de frenos',
    lastService: '20/06/2023',
    kilometraje: 60000,
    owner: 'Carlos Mendez',
    color: 'White',
    typeVehicle: 'Auto',
    mail: 'carlos.m@example.com',
    number: '456-789-0123',
    inspeccion: 'Problemas con los frenos',
    works: [
      {
        id: 1,
        plate: 'GHI 9012',
        date: '15-08-2023',
        work: 'Mecanica',
        detail: 'Cambio de líquido de transmisión.',
        assigned: 'Juan',
        kilometraje: 61000,
        price: '$2760'
      },
      {
        id: 2,
        plate: 'GHI 9012',
        date: '01-09-2023',
        work: 'Mecanica',
        detail: 'Revisión de la alineación.',
        assigned: 'María',
        kilometraje: 61200,
        price: '$1200'
      },
      {
        id: 3,
        plate: 'GHI 9012',
        date: '10-09-2023',
        work: 'Mecanica',
        detail: 'Inspección de frenos.',
        assigned: 'Pedro',
        kilometraje: 61300,
        price: '$1500'
      }
    ]
  },
  {
    id: '4',
    brand: 'Honda',
    model: 'Civic',
    plate: 'JKL 3456',
    services: 'Inspección de motor',
    lastService: '11/08/2023',
    kilometraje: 54000,
    owner: 'Ana Martinez',
    color: 'Black',
    typeVehicle: 'Auto',
    mail: 'ana.martinez@example.com',
    number: '654-321-0987',
    inspeccion: 'Ruido extraño en el motor',
    works: [
      {
        id: 1,
        plate: 'JKL 3456',
        date: '22-09-2023',
        work: 'Mecanica',
        detail: 'Reemplazo de batería.',
        assigned: 'Luis',
        kilometraje: 55000,
        price: '$2000'
      },
      {
        id: 2,
        plate: 'JKL 3456',
        date: '10-10-2023',
        work: 'Mecanica',
        detail: 'Inspección del sistema de refrigeración.',
        assigned: 'Isabel',
        kilometraje: 55100,
        price: '$800'
      },
      {
        id: 3,
        plate: 'JKL 3456',
        date: '15-10-2023',
        work: 'Mecanica',
        detail: 'Mantenimiento de frenos.',
        assigned: 'Jorge',
        kilometraje: 55200,
        price: '$2200'
      }
    ]
  },
  {
    id: '5',
    brand: 'BMW',
    model: 'X5',
    plate: 'MNO 7890',
    services: 'Cambio de neumáticos',
    lastService: '30/09/2022',
    kilometraje: 78000,
    owner: 'Tom Perez',
    color: 'Silver',
    typeVehicle: 'Camión',
    mail: 'tom.perez@example.com',
    number: '321-654-9870',
    inspeccion: 'Cambio de neumáticos y revisión general',
    works: [
      {
        id: 1,
        plate: 'MNO 7890',
        date: '10-11-2023',
        work: 'Mecanica',
        detail: 'Puesta a punto del motor.',
        assigned: 'Marcos',
        kilometraje: 79000,
        price: '$150'
      },
      {
        id: 2,
        plate: 'MNO 7890',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Inspección del sistema de frenos.',
        assigned: 'Lara',
        kilometraje: 79100,
        price: '$2400'
      },
      {
        id: 3,
        plate: 'MNO 7890',
        date: '01-12-2023',
        work: 'Mecanica',
        detail: 'Revisión de la suspensión.',
        assigned: 'Alejandro',
        kilometraje: 79200,
        price: '$1900'
      }
    ]
  },
  {
    id: '6',
    brand: 'Mercedes',
    model: 'E-Class',
    plate: 'PQR 1234',
    services: 'Revisión de suspensión',
    lastService: '22/10/2023',
    kilometraje: 95000,
    owner: 'Sara Gomez',
    color: 'Grey',
    typeVehicle: 'Auto',
    mail: 'sara.g@example.com',
    number: '789-012-3456',
    inspeccion: 'Suspensión desgastada',
    works: [
      {
        id: 1,
        plate: 'PQR 1234',
        date: '12-12-2023',
        work: 'Mecanica',
        detail: 'Inspección general.',
        assigned: 'Carlos',
        kilometraje: 96000,
        price: '$5000'
      },
      {
        id: 2,
        plate: 'PQR 1234',
        date: '20-12-2023',
        work: 'Mecanica',
        detail: 'Reemplazo de filtros de aire.',
        assigned: 'Elena',
        kilometraje: 96100,
        price: '$300'
      },
      {
        id: 3,
        plate: 'PQR 1234',
        date: '30-12-2023',
        work: 'Mecanica',
        detail: 'Mantenimiento del sistema de frenos.',
        assigned: 'Lucas',
        kilometraje: 96200,
        price: '$2200'
      }
    ]
  },
  {
    id: '7',
    brand: 'Nissan',
    model: 'Altima',
    plate: 'STU 5678',
    services: 'Reemplazo de batería',
    lastService: '05/12/2022',
    kilometraje: 67000,
    owner: 'Robert Lee',
    color: 'Blue',
    typeVehicle: 'Auto',
    mail: 'robert.lee@example.com',
    number: '654-789-0123',
    inspeccion: 'Batería agotada',
    works: [
      {
        id: 1,
        plate: 'STU 5678',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Cambio de frenos delanteros.',
        assigned: 'Ana',
        kilometraje: 68000,
        price: '$3000'
      },
      {
        id: 2,
        plate: 'STU 5678',
        date: '30-11-2023',
        work: 'Mecanica',
        detail: 'Revisión del aire acondicionado.',
        assigned: 'Pedro',
        kilometraje: 68100,
        price: '$500'
      },
      {
        id: 3,
        plate: 'STU 5678',
        date: '10-12-2023',
        work: 'Mecanica',
        detail: 'Inspección general del vehículo.',
        assigned: 'María',
        kilometraje: 68200,
        price: '$600'
      }
    ]
  },
  {
    id: '8',
    brand: 'Hyundai',
    model: 'Elantra',
    plate: 'VWX 9012',
    services: 'Inspección de aire acondicionado',
    lastService: '14/01/2023',
    kilometraje: 55000,
    owner: 'Emily Davis',
    color: 'White',
    typeVehicle: 'Auto',
    mail: 'emily.d@example.com',
    number: '321-789-6540',
    inspeccion: 'Aire acondicionado no enfría',
    works: [
      {
        id: 1,
        plate: 'VWX 9012',
        date: '05-10-2023',
        work: 'Mecanica',
        detail: 'Cambio de aceite y revisión del aire acondicionado.',
        assigned: 'Tomás',
        kilometraje: 56000,
        price: '$3200'
      },
      {
        id: 2,
        plate: 'VWX 9012',
        date: '15-10-2023',
        work: 'Mecanica',
        detail: 'Reemplazo de filtro de aire.',
        assigned: 'Lucía',
        kilometraje: 56100,
        price: '$150'
      },
      {
        id: 3,
        plate: 'VWX 9012',
        date: '25-10-2023',
        work: 'Electricidad',
        detail: 'Revisión del sistema eléctrico.',
        assigned: 'Fernando',
        kilometraje: 56200,
        price: '$1200'
      }
    ]
  },
  {
    id: '9',
    brand: 'Kia',
    model: 'Sportage',
    plate: 'YZA 3456',
    services: 'Ajuste de alineación',
    lastService: '27/02/2023',
    kilometraje: 48000,
    owner: 'Mark Wilson',
    color: 'Red',
    typeVehicle: 'Camión',
    mail: 'mark.wilson@example.com',
    number: '987-654-0123',
    inspeccion: 'Alineación desajustada',
    works: [
      {
        id: 1,
        plate: 'YZA 3456',
        date: '01-11-2023',
        work: 'Mecanica',
        detail: 'Ajuste de alineación de ruedas.',
        assigned: 'Roberto',
        kilometraje: 49000,
        price: '$750'
      },
      {
        id: 2,
        plate: 'YZA 3456',
        date: '10-11-2023',
        work: 'Mecanica',
        detail: 'Revisión del sistema de frenos.',
        assigned: 'Clara',
        kilometraje: 49100,
        price: '$1000'
      },
      {
        id: 3,
        plate: 'YZA 3456',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Cambio de aceite.',
        assigned: 'Julián',
        kilometraje: 49200,
        price: '$500'
      }
    ]
  },
  {
    id: '10',
    brand: 'Chevrolet',
    model: 'Malibu',
    plate: 'BCD 1234',
    services: 'Revisión general',
    lastService: '15/09/2023',
    kilometraje: 60000,
    owner: 'Linda Brown',
    color: 'Green',
    typeVehicle: 'Auto',
    mail: 'linda.brown@example.com',
    number: '789-456-1230',
    inspeccion: 'Ruidos extraños en el motor',
    works: [
      {
        id: 1,
        plate: 'BCD 1234',
        date: '01-11-2023',
        work: 'Mecanica',
        detail: 'Revisión de aceite y filtros.',
        assigned: 'Miguel',
        kilometraje: 61000,
        price: '$900'
      },
      {
        id: 2,
        plate: 'BCD 1234',
        date: '10-11-2023',
        work: 'Mecanica',
        detail: 'Cambio de pastillas de freno.',
        assigned: 'Andrea',
        kilometraje: 61100,
        price: '$1200'
      },
      {
        id: 3,
        plate: 'BCD 1234',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Revisión del sistema de suspensión.',
        assigned: 'José',
        kilometraje: 61200,
        price: '$1500'
      }
    ]
  },
  {
    id: '11',
    brand: 'Subaru',
    model: 'Outback',
    plate: 'EFG 5678',
    services: 'Cambio de aceite',
    lastService: '22/05/2023',
    kilometraje: 55000,
    owner: 'Kevin Wright',
    color: 'Yellow',
    typeVehicle: 'Camioneta',
    mail: 'kevin.wright@example.com',
    number: '456-123-7890',
    inspeccion: 'Aceite contaminado',
    works: [
      {
        id: 1,
        plate: 'EFG 5678',
        date: '05-10-2023',
        work: 'Mecanica',
        detail: 'Revisión del sistema de frenos.',
        assigned: 'Daniel',
        kilometraje: 56000,
        price: '$800'
      },
      {
        id: 2,
        plate: 'EFG 5678',
        date: '15-10-2023',
        work: 'Electricidad',
        detail: 'Inspección de luces y señales.',
        assigned: 'Sofia',
        kilometraje: 56100,
        price: '$250'
      },
      {
        id: 3,
        plate: 'EFG 5678',
        date: '25-10-2023',
        work: 'Mecanica',
        detail: 'Alineación y balanceo.',
        assigned: 'Javier',
        kilometraje: 56200,
        price: '$600'
      }
    ]
  },
  {
    id: '12',
    brand: 'Volvo',
    model: 'XC60',
    plate: 'HIJ 9012',
    services: 'Cambio de neumáticos',
    lastService: '30/04/2023',
    kilometraje: 45000,
    owner: 'Sarah Miller',
    color: 'Black',
    typeVehicle: 'Camioneta',
    mail: 'sarah.miller@example.com',
    number: '321-654-9871',
    inspeccion: 'Neumáticos desgastados',
    works: [
      {
        id: 1,
        plate: 'HIJ 9012',
        date: '01-11-2023',
        work: 'Mecanica',
        detail: 'Reemplazo de neumáticos delanteros.',
        assigned: 'Luis',
        kilometraje: 46000,
        price: '$3000'
      },
      {
        id: 2,
        plate: 'HIJ 9012',
        date: '10-11-2023',
        work: 'Mecanica',
        detail: 'Revisión de frenos traseros.',
        assigned: 'Pedro',
        kilometraje: 46100,
        price: '$800'
      },
      {
        id: 3,
        plate: 'HIJ 9012',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Inspección del sistema de escape.',
        assigned: 'Ana',
        kilometraje: 46200,
        price: '$1500'
      }
    ]
  },
  {
    id: '13',
    brand: 'Fiat',
    model: '500',
    plate: 'KLM 3456',
    services: 'Revisión de frenos',
    lastService: '15/02/2023',
    kilometraje: 32000,
    owner: 'Angela Chen',
    color: 'Pink',
    typeVehicle: 'Auto',
    mail: 'angela.chen@example.com',
    number: '654-321-7890',
    inspeccion: 'Frenos ruidosos',
    works: [
      {
        id: 1,
        plate: 'KLM 3456',
        date: '01-11-2023',
        work: 'Mecanica',
        detail: 'Cambio de líquido de frenos.',
        assigned: 'Mario',
        kilometraje: 33000,
        price: '$400'
      },
      {
        id: 2,
        plate: 'KLM 3456',
        date: '10-11-2023',
        work: 'Mecanica',
        detail: 'Inspección de suspensión.',
        assigned: 'Clara',
        kilometraje: 33100,
        price: '$600'
      },
      {
        id: 3,
        plate: 'KLM 3456',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Revisión del sistema eléctrico.',
        assigned: 'Jorge',
        kilometraje: 33200,
        price: '$700'
      }
    ]
  },
  {
    id: '14',
    brand: 'Mazda',
    model: 'CX-5',
    plate: 'NOP 6789',
    services: 'Revisión de aceite',
    lastService: '10/07/2023',
    kilometraje: 72000,
    owner: 'Robert Johnson',
    color: 'Red',
    typeVehicle: 'Camioneta',
    mail: 'robert.johnson@example.com',
    number: '789-123-4560',
    inspeccion: 'Aceite sucio',
    works: [
      {
        id: 1,
        plate: 'NOP 6789',
        date: '01-11-2023',
        work: 'Mecanica',
        detail: 'Revisión del filtro de aceite.',
        assigned: 'Ana',
        kilometraje: 73000,
        price: '$300'
      },
      {
        id: 2,
        plate: 'NOP 6789',
        date: '10-11-2023',
        work: 'Mecanica',
        detail: 'Reemplazo de bujías.',
        assigned: 'Fernando',
        kilometraje: 73100,
        price: '$450'
      },
      {
        id: 3,
        plate: 'NOP 6789',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Alineación de ruedas.',
        assigned: 'Miguel',
        kilometraje: 73200,
        price: '$500'
      }
    ]
  },
  {
    id: '15',
    brand: 'Land Rover',
    model: 'Discovery',
    plate: 'QRS 0123',
    services: 'Revisión de suspensión',
    lastService: '01/06/2023',
    kilometraje: 83000,
    owner: 'Jessica Adams',
    color: 'Blue',
    typeVehicle: 'Camioneta',
    mail: 'jessica.adams@example.com',
    number: '321-789-4561',
    inspeccion: 'Suspensión desgastada',
    works: [
      {
        id: 1,
        plate: 'QRS 0123',
        date: '15-10-2023',
        work: 'Mecanica',
        detail: 'Inspección de suspensión delantera.',
        assigned: 'Carlos',
        kilometraje: 84000,
        price: '$2500'
      },
      {
        id: 2,
        plate: 'QRS 0123',
        date: '25-10-2023',
        work: 'Mecanica',
        detail: 'Reemplazo de amortiguadores.',
        assigned: 'Sofia',
        kilometraje: 84100,
        price: '$1800'
      },
      {
        id: 3,
        plate: 'QRS 0123',
        date: '05-11-2023',
        work: 'Mecanica',
        detail: 'Mantenimiento general.',
        assigned: 'Pedro',
        kilometraje: 84200,
        price: '$2200'
      }
    ]
  },
  {
    id: '16',
    brand: 'Chrysler',
    model: 'Pacifica',
    plate: 'TUV 3456',
    services: 'Revisión de frenos',
    lastService: '15/08/2023',
    kilometraje: 49000,
    owner: 'Tina White',
    color: 'Green',
    typeVehicle: 'Camioneta',
    mail: 'tina.white@example.com',
    number: '987-321-6540',
    inspeccion: 'Frenos desgastados',
    works: [
      {
        id: 1,
        plate: 'TUV 3456',
        date: '01-11-2023',
        work: 'Mecanica',
        detail: 'Cambio de pastillas de freno.',
        assigned: 'Luis',
        kilometraje: 50000,
        price: '$900'
      },
      {
        id: 2,
        plate: 'TUV 3456',
        date: '10-11-2023',
        work: 'Mecanica',
        detail: 'Revisión de líquido de frenos.',
        assigned: 'Fernando',
        kilometraje: 50100,
        price: '$200'
      },
      {
        id: 3,
        plate: 'TUV 3456',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Inspección del sistema de frenos traseros.',
        assigned: 'Isabel',
        kilometraje: 50200,
        price: '$700'
      }
    ]
  },
  {
    id: '17',
    brand: 'Lexus',
    model: 'RX 350',
    plate: 'WXY 7890',
    services: 'Cambio de aceite',
    lastService: '30/04/2023',
    kilometraje: 68000,
    owner: 'Gregory Clark',
    color: 'White',
    typeVehicle: 'Camioneta',
    mail: 'gregory.clark@example.com',
    number: '654-987-1234',
    inspeccion: 'Aceite contaminado',
    works: [
      {
        id: 1,
        plate: 'WXY 7890',
        date: '01-11-2023',
        work: 'Mecanica',
        detail: 'Revisión de filtros de aire.',
        assigned: 'Carla',
        kilometraje: 69000,
        price: '$500'
      },
      {
        id: 2,
        plate: 'WXY 7890',
        date: '10-11-2023',
        work: 'Mecanica',
        detail: 'Cambio de aceite del motor.',
        assigned: 'Luis',
        kilometraje: 69100,
        price: '$1200'
      },
      {
        id: 3,
        plate: 'WXY 7890',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Revisión del sistema de escape.',
        assigned: 'David',
        kilometraje: 69200,
        price: '$1500'
      }
    ]
  },
  {
    id: '18',
    brand: 'Dodge',
    model: 'Ram 1500',
    plate: 'ZAB 1234',
    services: 'Cambio de frenos',
    lastService: '25/03/2023',
    kilometraje: 40000,
    owner: 'Jessica Lee',
    color: 'Blue',
    typeVehicle: 'Camión',
    mail: 'jessica.lee@example.com',
    number: '321-654-9872',
    inspeccion: 'Frenos desgastados',
    works: [
      {
        id: 1,
        plate: 'ZAB 1234',
        date: '01-11-2023',
        work: 'Mecanica',
        detail: 'Cambio de pastillas y discos de freno.',
        assigned: 'Jorge',
        kilometraje: 41000,
        price: '$2000'
      },
      {
        id: 2,
        plate: 'ZAB 1234',
        date: '10-11-2023',
        work: 'Mecanica',
        detail: 'Revisión del sistema hidráulico.',
        assigned: 'Sara',
        kilometraje: 41100,
        price: '$300'
      },
      {
        id: 3,
        plate: 'ZAB 1234',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Inspección general del vehículo.',
        assigned: 'Mario',
        kilometraje: 41200,
        price: '$1200'
      }
    ]
  },
  {
    id: '19',
    brand: 'Nissan',
    model: 'Altima',
    plate: 'CDE 6789',
    services: 'Revisión de transmisión',
    lastService: '12/01/2023',
    kilometraje: 57000,
    owner: 'Hannah Martinez',
    color: 'Red',
    typeVehicle: 'Auto',
    mail: 'hannah.m@example.com',
    number: '789-456-1231',
    inspeccion: 'Transmisión irregular',
    works: [
      {
        id: 1,
        plate: 'CDE 6789',
        date: '01-11-2023',
        work: 'Mecanica',
        detail: 'Cambio de filtro de transmisión.',
        assigned: 'Pedro',
        kilometraje: 58000,
        price: '$700'
      },
      {
        id: 2,
        plate: 'CDE 6789',
        date: '10-11-2023',
        work: 'Mecanica',
        detail: 'Revisión de niveles de aceite.',
        assigned: 'Angela',
        kilometraje: 58100,
        price: '$200'
      },
      {
        id: 3,
        plate: 'CDE 6789',
        date: '20-11-2023',
        work: 'Mecanica',
        detail: 'Inspección de mangueras y conectores.',
        assigned: 'Luis',
        kilometraje: 58200,
        price: '$300'
      }
    ]
  },
  {
    id: '20',
    brand: 'Hyundai',
    model: 'Elantra',
    plate: 'FGH 1234',
    services: 'Cambio de batería',
    lastService: '15/07/2023',
    kilometraje: 35000,
    owner: 'Olivia Taylor',
    color: 'Silver',
    typeVehicle: 'Auto',
    mail: 'olivia.taylor@example.com',
    number: '456-789-3210',
    inspeccion: 'Batería descargada',
    works: [
      {
        id: 1,
        plate: 'FGH 1234',
        date: '01-11-2023',
        work: 'Mecanica',
        detail: 'Reemplazo de batería.',
        assigned: 'Martin',
        kilometraje: 36000,
        price: '$120'
      },
      {
        id: 2,
        plate: 'FGH 1234',
        date: '10-11-2023',
        work: 'Mecanica',
        detail: 'Inspección del sistema de carga.',
        assigned: 'Fernando',
        kilometraje: 36100,
        price: '$200'
      },
      {
        id: 3,
        plate: 'FGH 1234',
        date: '20-11-2023',
        work: 'Electricidad',
        detail: 'Revisión de luces y accesorios.',
        assigned: 'Clara',
        kilometraje: 36200,
        price: '$150'
      }
    ]
  }
];


export const budgetData = [
  { id: '1', brand: 'Ford', model: 'Fiesta Titanium', plate: 'ABC 1234', services: 'Mantenimiento general', lastService: '02/07/2023' },
  { id: '2', brand: 'Audi', model: 'A3 Sportback', plate: 'DEF 5678', services: 'Cambio de aceite', lastService: '15/05/2023' },
  { id: '3', brand: 'Toyota', model: 'Corolla', plate: 'GHI 9012', services: 'Revisión de frenos', lastService: '20/06/2023' },
  { id: '4', brand: 'Honda', model: 'Civic', plate: 'JKL 3456', services: 'Inspección de motor', lastService: '11/08/2023' },
  { id: '5', brand: 'BMW', model: 'X5', plate: 'MNO 7890', services: 'Cambio de neumáticos', lastService: '30/09/2022' },
  { id: '6', brand: 'Mercedes', model: 'E-Class', plate: 'PQR 1234', services: 'Revisión de suspensión', lastService: '22/10/2023' },
  { id: '7', brand: 'Nissan', model: 'Altima', plate: 'STU 5678', services: 'Reemplazo de batería', lastService: '05/12/2022' },
  { id: '8', brand: 'Hyundai', model: 'Elantra', plate: 'VWX 9012', services: 'Inspección de aire acondicionado', lastService: '14/01/2023' },
  { id: '9', brand: 'Kia', model: 'Sportage', plate: 'YZA 3456', services: 'Ajuste de alineación', lastService: '27/02/2023' },
  { id: '10', brand: 'Chevrolet', model: 'Malibu', plate: 'BCD 7890', services: 'Cambio de filtros', lastService: '08/03/2023' },
  { id: '11', brand: 'Volkswagen', model: 'Golf', plate: 'EFG 1234', services: 'Inspección de luces', lastService: '18/04/2023' },
  { id: '12', brand: 'Subaru', model: 'Outback', plate: 'HIJ 5678', services: 'Revisión de transmisión', lastService: '30/05/2023' },
  { id: '13', brand: 'Mazda', model: 'CX-5', plate: 'KLM 9012', services: 'Reemplazo de bujías', lastService: '12/06/2023' },
  { id: '14', brand: 'Jaguar', model: 'F-Pace', plate: 'NOP 3456', services: 'Inspección de frenos', lastService: '25/07/2023' },
  { id: '15', brand: 'Land Rover', model: 'Range Rover', plate: 'QRS 7890', services: 'Mantenimiento de caja de cambios', lastService: '25/07/2023' },
  { id: '16', brand: 'Porsche', model: 'Macan', plate: 'TUV 1234', services: 'Inspección general', lastService: '22/09/2023' },
  { id: '17', brand: 'Lexus', model: 'RX', plate: 'WXY 5678', services: 'Reemplazo de líquido de frenos', lastService: '05/10/2023' },
  { id: '18', brand: 'Acura', model: 'MDX', plate: 'ZAB 9012', services: 'Revisión de dirección', lastService: '18/11/2023' },
  { id: '19', brand: 'Infiniti', model: 'QX60', plate: 'CDE 3456', services: 'Ajuste de válvulas', lastService: '30/12/2023' },
  { id: '20', brand: 'Buick', model: 'Enclave', plate: 'FGH 7890', services: 'Reemplazo de correa de distribución', lastService: '15/01/2024' }
];

export const workData = [
  { id: '1', brand: 'Ford', model: 'Fiesta Titanium', employee: 'Juan Pérez', status: 'Finalizado', plate: 'ABC 1234', description: 'General maintenance and inspection after 10,000 km.', date: '02/07/2023', sparePart: 'Oil filter' },
  { id: '2', brand: 'Audi', model: 'A3 Sportback', employee: 'María López', status: 'Pendiente', plate: 'DEF 5678', description: 'Oil change and filter replacement due to reaching mileage limit.', date: '15/05/2023', sparePart: 'Engine oil' },
  { id: '3', brand: 'Toyota', model: 'Corolla', employee: 'Carlos García', status: 'Finalizado', plate: 'GHI 9012', description: 'Brake system check and replacement of worn pads.', date: '20/06/2023', sparePart: 'Brake pads' },
  { id: '4', brand: 'Honda', model: 'Civic', employee: 'Ana Rodríguez', status: 'Pendiente', plate: 'JKL 3456', description: 'Engine inspection and coolant flush to prevent overheating.', date: '11/08/2023', sparePart: 'Coolant' },
  { id: '5', brand: 'BMW', model: 'X5', employee: 'Luis Fernández', status: 'Finalizado', plate: 'MNO 7890', description: 'Tire rotation and alignment for better handling.', date: '30/09/2022', sparePart: 'Tire' },
  { id: '6', brand: 'Mercedes', model: 'E-Class', employee: 'Pedro Gómez', status: 'Pendiente', plate: 'PQR 1234', description: 'Suspension inspection and repair due to noise during driving.', date: '22/10/2023', sparePart: 'Shock absorbers' },
  { id: '7', brand: 'Nissan', model: 'Altima', employee: 'Sofía Martínez', status: 'Finalizado', plate: 'STU 5678', description: 'Battery replacement and electrical system check.', date: '05/12/2022', sparePart: 'Car battery' },
  { id: '8', brand: 'Hyundai', model: 'Elantra', employee: 'Diego Hernández', status: 'Pendiente', plate: 'VWX 9012', description: 'Air conditioning system service and recharge.', date: '14/01/2023', sparePart: 'AC refrigerant' },
  { id: '9', brand: 'Kia', model: 'Sportage', employee: 'Carmen Sánchez', status: 'Finalizado', plate: 'YZA 3456', description: 'Alignment and balance to correct steering issues.', date: '27/02/2023', sparePart: 'Alignment bolts' },
  { id: '10', brand: 'Chevrolet', model: 'Malibu', employee: 'Elena Torres', status: 'Pendiente', plate: 'BCD 7890', description: 'Filter change and inspection of fuel system.', date: '08/03/2023', sparePart: 'Fuel filter' },
  { id: '11', brand: 'Volkswagen', model: 'Golf', employee: 'Javier Ramírez', status: 'Finalizado', plate: 'EFG 1234', description: 'Light system inspection and replacement of burnt bulbs.', date: '18/04/2023', sparePart: 'Headlight bulbs' },
  { id: '12', brand: 'Subaru', model: 'Outback', employee: 'Beatriz Díaz', status: 'Pendiente', plate: 'HIJ 5678', description: 'Transmission fluid change to maintain performance.', date: '30/05/2023', sparePart: 'Transmission fluid' },
  { id: '13', brand: 'Mazda', model: 'CX-5', employee: 'José Castro', status: 'Finalizado', plate: 'KLM 9012', description: 'Spark plug replacement and engine tuning for efficiency.', date: '12/06/2023', sparePart: 'Spark plugs' },
  { id: '14', brand: 'Jaguar', model: 'F-Pace', employee: 'Clara Ortiz', status: 'Pendiente', plate: 'NOP 3456', description: 'Brake fluid change and inspection for safety.', date: '25/07/2023', sparePart: 'Brake fluid' },
  { id: '15', brand: 'Land Rover', model: 'Range Rover', employee: 'Roberto Morales', status: 'Finalizado', plate: 'QRS 7890', description: 'Transmission service to address shifting issues.', date: '12/09/2023', sparePart: 'Transmission fluid' },
  { id: '16', brand: 'Porsche', model: 'Macan', employee: 'Mónica Vargas', status: 'Pendiente', plate: 'TUV 1234', description: 'General inspection and oil change to maintain performance.', date: '22/09/2023', sparePart: 'Engine oil' },
  { id: '17', brand: 'Lexus', model: 'RX', employee: 'Hugo Romero', status: 'Finalizado', plate: 'WXY 5678', description: 'Fluid replacement and comprehensive vehicle inspection.', date: '05/10/2023', sparePart: 'All fluids' },
  { id: '18', brand: 'Acura', model: 'MDX', employee: 'Cecilia Navarro', status: 'Pendiente', plate: 'ZAB 9012', description: 'Power steering fluid change to prevent steering issues.', date: '18/11/2023', sparePart: 'Power steering fluids' },
  { id: '19', brand: 'Infiniti', model: 'QX60', employee: 'Fernando Rojas', status: 'Finalizado', plate: 'CDE 3456', description: 'Valve adjustment and engine check for optimal performance.', date: '30/12/2023', sparePart: 'Gasketsr' },
  { id: '20', brand: 'Buick', model: 'Enclave', employee: 'Paula Flores', status: 'Pendiente', plate: 'FGH 7890', description: 'Timing belt replacement due to age and mileage.', date: '15/01/2024', sparePart: 'Timing belt' }
];


export const spareParts = [
  { id: '1', name: 'Filtro de aire', size: 'Pequeño', quantity: 15, description: 'Filtro de aire para motor de combustión interna.', date: '02-11-2023' },
  { id: '2', name: 'Bujía', size: 'Pequeño', quantity: 50, description: 'Componente que enciende la mezcla de aire y combustible en motores de gasolina.', date: '01-01-2023' },
  { id: '3', name: 'Amortiguador', size: 'Mediano', quantity: 25, description: 'Dispositivo para absorber impactos en la suspensión.', date: '05-04-2023' },
  { id: '4', name: 'Disco de freno', size: 'Grande', quantity: 40, description: 'Disco metálico utilizado en sistemas de freno de vehículos.', date: '05-05-2023' },
  { id: '5', name: 'Pastilla de freno', size: 'Mediano', quantity: 100, description: 'Pieza de fricción para frenos de disco.', date: '07-08-2023' },
  { id: '6', name: 'Radiador', size: 'Grande', quantity: 10, description: 'Componente de enfriamiento para motores.', date: '01-09-2023' },
  { id: '7', name: 'Filtro de aceite', size: 'Pequeño', quantity: 60, description: 'Filtro para eliminar impurezas del aceite del motor.', date: '03-08-2023' },
  { id: '8', name: 'Banda de distribución', size: 'Mediano', quantity: 30, description: 'Correa que sincroniza el giro del motor.', date: '28-07-2023' },
  { id: '9', name: 'Rotor de freno', size: 'Grande', quantity: 20, description: 'Componente del freno de disco en la rueda.', date: '24-01-2023' },
  { id: '10', name: 'Termostato', size: 'Pequeño', quantity: 45, description: 'Dispositivo que regula la temperatura del motor.', date: '21-12-2023' },
  { id: '11', name: 'Embrague', size: 'Mediano', quantity: 15, description: 'Mecanismo que conecta o desconecta el motor de la transmisión.', date: '16-12-2023' },
  { id: '12', name: 'Espejo lateral', size: 'Mediano', quantity: 25, description: 'Espejo para visión lateral del conductor.', date: '01-09-2023' },
  { id: '13', name: 'Manguera de radiador', size: 'Mediano', quantity: 35, description: 'Manguera que transporta el refrigerante del motor.', date: '16-08-2023' },
  { id: '14', name: 'Válvula EGR', size: 'Pequeño', quantity: 20, description: 'Válvula para reducir emisiones contaminantes.', date: '10-10-2023' },
  { id: '15', name: 'Bomba de agua', size: 'Mediano', quantity: 15, description: 'Bomba que impulsa el refrigerante a través del motor.', date: '01-11-2023' },
  { id: '16', name: 'Limpiaparabrisas', size: 'Pequeño', quantity: 80, description: 'Escobilla para limpiar el parabrisas de lluvia y suciedad.', date: '11-02-2023' },
  { id: '17', name: 'Alternador', size: 'Grande', quantity: 12, description: 'Generador eléctrico que alimenta el sistema eléctrico del vehículo.', date: '01-05-2023' },
  { id: '18', name: 'Sensor de oxígeno', size: 'Pequeño', quantity: 30, description: 'Sensor para medir la cantidad de oxígeno en el escape.', date: '21-03-2023' },
  { id: '19', name: 'Cinturón de seguridad', size: 'Mediano', quantity: 40, description: 'Cinturón para seguridad de los ocupantes del vehículo.', date: '24-01-2023' },
  { id: '20', name: 'Tubo de escape', size: 'Grande', quantity: 18, description: 'Tubo para expulsar gases del motor hacia el exterior.', date: '02-11-2023' }
];

export const sparePartsStock = [
  { id: '1', name: 'Filtro de aire', size: 'Pequeño', quantity: 15, description: 'Filtro de aire para motor de combustión interna.', date: '07-03-2023' },
  { id: '2', name: 'Bujía', size: 'Pequeño', quantity: 50, description: 'Componente que enciende la mezcla de aire y combustible en motores de gasolina.', date: '01-01-2023' },
  { id: '3', name: 'Amortiguador', size: 'Mediano', quantity: 25, description: 'Dispositivo para absorber impactos en la suspensión.', date: '21-05-2023' },
  { id: '4', name: 'Disco de freno', size: 'Grande', quantity: 40, description: 'Disco metálico utilizado en sistemas de freno de vehículos.', date: '14-01-2023' },
  { id: '5', name: 'Pastilla de freno', size: 'Mediano', quantity: 100, description: 'Pieza de fricción para frenos de disco.', date: '21-11-2023' },
  { id: '6', name: 'Radiador', size: 'Grande', quantity: 10, description: 'Componente de enfriamiento para motores.', date: '01-09-2023' },
  { id: '7', name: 'Filtro de aceite', size: 'Pequeño', quantity: 60, description: 'Filtro para eliminar impurezas del aceite del motor.', date: '08-01-2023' },
  { id: '8', name: 'Banda de distribución', size: 'Mediano', quantity: 30, description: 'Correa que sincroniza el giro del motor.', date: '01-01-2023' },
  { id: '9', name: 'Rotor de freno', size: 'Grande', quantity: 20, description: 'Componente del freno de disco en la rueda.', date: '03-09-2023' },
  { id: '10', name: 'Termostato', size: 'Pequeño', quantity: 45, description: 'Dispositivo que regula la temperatura del motor.', date: '02-07-2023' },
  { id: '11', name: 'Embrague', size: 'Mediano', quantity: 15, description: 'Mecanismo que conecta o desconecta el motor de la transmisión.', date: '05-01-2023' },
  { id: '12', name: 'Espejo lateral', size: 'Mediano', quantity: 25, description: 'Espejo para visión lateral del conductor.', date: '06-06-2023' },
  { id: '13', name: 'Manguera de radiador', size: 'Mediano', quantity: 35, description: 'Manguera que transporta el refrigerante del motor.', date: '01-04-2023' },
  { id: '14', name: 'Válvula EGR', size: 'Pequeño', quantity: 20, description: 'Válvula para reducir emisiones contaminantes.', date: '01-03-2023' },
  { id: '15', name: 'Bomba de agua', size: 'Mediano', quantity: 15, description: 'Bomba que impulsa el refrigerante a través del motor.', date: '01-02-2023' }
];