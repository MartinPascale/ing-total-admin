export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  failures?: string;
  failureCodes?: string;
  components?: string;
  brand?: string;
  models?: string;
  years?: string;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  image: string;
  services: string[];
}

export const services: Service[] = [
  {
    id: '1',
    name: 'ECU',
    description:
      'Servico de Reparacion de ECU (Computadora del motor) tanto debido a fallas de Hardware como de Software. Dentro de las fallas de hardware podemos mencionar fallos en salida de inyectores o bobinas, reguladores de voltaje quemados, daños por entrada de agua,etc. Asi mismo ofrecemos servicio de desinmovilizacion (anulacion de antiarranque o desbloqueo) muy util cuando alguna parte del sistema antiarranque del vehiculo no funciona correctamente y su reparacion resulta muy costosa o complicada. Otro de nuestros servicios consiste en la clonacion o copia de informacion de una ecu motor rota a una de segunda mano o comprada en desguace. Tambien ofrecemos el servicio de anulacion de subsistemas como la valvula EGR o el DPF en caso de vehiculos diesel, tambien podemos eliminar permanentemente fallos (Codigos DTC) que se cargan en memoria pero no provocan fallos en el funcionamiento del vehiculo.',
    image: '/images/Imagenes_serv_gener/Servicio_ECU.png',
  },
  {
    id: '10',
    name: 'Modulo Transmision Automatica',
    description:
      'Servicio de Reparacion de modulos de transmision automatica tanto de fallas de Hardware como fallas de software o programacion. Tambien ofrecemos servico de virginizacion y/o clonacion para poder instalar modulos o cajas usadas en su vehiculo.',
    image: '/images/Imagenes_serv_gener/Servicio_TCU.png',
  },
  {
    id: '11',
    name: 'Modulo Tranca volante',
    description:
      'Servicio de Reparacion o anulacion total del sistema de tranca de volante. Estos sistemas tienden a fallar ya que son componentes electromecanicos que sufren mucho desgaste ya que actuan cada vez que se pone y saca la llave del tambor. Tambien suelen tener fallos de programacion generados por picos de tension en el sistema de arranque. Anulando el sistema no solo soluciona el problema sino evita que la falla se vuelva a repetir. ',
    image: '/images/Imagenes_serv_gener/Servicio_ELV.png',
  },
  {
    id: '13',
    name: 'Bateria Litio',
    description:
      'Servicio de Reparacion de Bateria de Litio (48v o 12v)  en casos de no tener voltaje de salida por accidente (Choque) o por haber estado el vehiculo parado mucho tiempo y sin recibir carga. Chequeamos las celdas si estas estan en buen estado (generalmente es asi) se recargan se balancean y reseteamos la unidad de conrtrol interna (BMS). La bateria quedará pronta para instalarse en el vehiculo y tendra muchos años de vida util. Además con este servicio podrá ahorrar mucho dinero ya que estas baterias tienen un costo elevado',
    image: '/images/Imagenes_serv_gener/Servicio_Bateria_Litio.png',
  },
  {
    id: '14',
    name: 'Llaves codificadas',
    description:
      'Servicio de copia de llave en el caso de que tenga una en funcionamiento o generacion de llave nueva en caso de todas las llaves perdidas. La llave se entrega pronta para arrancar el vehiculo y programado el telemando (control remoto) si lo tuviera. Podemos hacer llaves convencionales o de presencia.',
    image: '/images/Imagenes_serv_gener/Servicio_LLaves.png',
  },
  {
    id: '2',
    name: 'BCM',
    description:
      'Servicio de Reparacion de unidades de carroceria (BCM/BSI/UCH) Estas modulos electronicos se encargan de controlar diversos sistemas de la carroceria del vehiculo como vidrios electricos,luces interiores,bloqueo de puertas,inmovilizador de arranque, etc. Podemos solucionar tanto fallas de Hardware es decir a nivel de componentes defectuosos como de software. Asi mismo es posible la virginizacion o el clonado de los mismos para instalar una unidad usada en su vehiculo.',
    image: '/images/Imagenes_serv_gener/Servicio_BCM.png',
  },
  {
    id: '3',
    name: 'Airbag',
    description:
      'Servicio de Reparacion de Airbags tanto debido a fallas de Hardware como de software. Entre las fallas mas comunes que podemos reparar es el reseteo por choque que permite reutilizar el modulo con el consiguuiente ahorro de dinero. Asi mismo podemos programar y configurar modulos nuevos o usados para ser instalados en un vehiculo con un equipamiento de airbags diferente del vehiculo original.',
    image: '/images/Imagenes_serv_gener/Servicio_AirBag.png',
  },
  {
    id: '4',
    name: 'Tablero',
    description:
      'Servicio de Reparacion de Tableros de instrumentos con fallas de distintos tipos, por ejemplo display defrectuoso, agujas indicadoras que no se mueven o iluminacion de fondo debil o inexistente en algunas zonas del tablero. A su vez podemos reprogramar tableros usados para ser instalados en su vehiculo evitando tener que instalar uno nuevo en caso que sea imposible la reparacion del original.',
    image: '/images/Imagenes_serv_gener/Servicio_Tableros.png',
  },
  {
    id: '5',
    name: 'ABS',
    description:
      'Servicio de Reparacion de modulos de ABS. Resolvemos fallos debido a componentes internos dañados como a problemas de programacion o configuracion.',
    image: '/images/Imagenes_serv_gener/Servicio_ABS.png',
  },
  {
    id: '6',
    name: 'Direccion Asistida',
    description:
      'Servicio de Reparacion de unidades de asistencia de direccion tanto en las versiones electrohidraulicas o totalmente electricas. Si su direccion quedo sin asistencia tanto permantemente como intermitentemente consultenos ya que es posible repararla y asi evitar los costos muy altos que implican el cambio total del sistema por uno nuevo. ',
    image: '/images/Imagenes_serv_gener/Servicio_EPS.png',
  },
  {
    id: '7',
    name: 'Multimedia',
    description:
      'Servicio de Reparacion de equipos multimedia. Las fallas pueden ser equipos que no prenden en absoluto, que quedan trancados en la pantalla inicial o se resetean permanentemente. Tambien reparamos la pantalla "touch screen" que en muchos equipos fallan prematuramente e impiden activar distintas funciones del vehiculo. Atencion solo reparamos equipos de las Marcas BMW, Mercedes Benz, Audi, Renault, Peugeot y Citroen',
    image: '/images/Imagenes_serv_gener/Servicio_Multimedia.png',
  },
  {
    id: '8',
    name: 'Farol Trasero Led',
    description:
      'Servicio de Reparacion de farol trasero de Leds. Podemos reparar faroles traseros que pueden llegar a ser muy costosos si hubiera que sustituirlos. Los casos mas comunes es que aparezcan zonas en donde no iluminan correctamente y esto puede ser por fallos debido al desgaste de los propios leds o de los componentes electronicos y tambien pueden dañarse debido a entradas de agua.',
    image: '/images/Imagenes_serv_gener/Servicio_Farol_Trasero.png',
  },
  {
    id: '9',
    name: 'Climatizadores',
    description:
      'Servicio de Reparacion de unidades de climatizacion (Calefaccion y Aire acondicionado). Estos modulos pueden presentar distintos tipos de fallas como no funcionar en absoluto o algunas de sus funciones inoperativas como la activacion del forzador del aire del habitaculo o el compresor del aire acondicionado.',
    image: '/images/Imagenes_serv_gener/Servicio_Climatizador.png',
  },
  {
    id: '15',
    brand: 'BMW',
    models: 'E8x E9x',
    years: '2006 - 2013',
    name: 'Reparacion Tablero',
    description:
      'Servicio de Reaparacion de tablero con display ilegible en el centro generalmente. Cambiamos el display y volverá a tener toda la informacion perfectamente legible. Esta solucion ademas de ahorrarle dinero evita tener que reprogramar el tablero si coloca uno usado de desarmadero.',
    failures: 'Display ilegible en el centro - Display no prende',
    failureCodes: '',
    components: 'Tablero',
    image: '/images/Imagenes_serv_espec/BMW_Tablero_E8x.png',
  },
  {
    id: '16',
    brand: 'BMW',
    models: 'E6x E8x E9x',
    years: '2004 - 2016',
    name: 'Reparacion CAS',
    description:
      'Servicio de Reparacion de Modulo CAS (Car Acces System). Este modulo muchas veces de daña por problemas de bateria o al hacer puente para arrancar. Los sintomas son : NO da arranque. No reconoce las llaves - Da arranque un segundo y se corta',
    failures: 'No da arranque o da arranque 1 segundo y se corta',
    failureCodes: 'AOC1 Salida Termianl 50',
    components: 'CAS',
    image: '/images/Imagenes_serv_espec/BMW_CAS.png',
  },
  {
    id: '17',
    brand: 'BMW',
    models: 'E6x E8x E9x Fxx',
    years: '2008 -',
    name: 'Reparacion Comando iDrive',
    description:
      'Servicio de Reparacion comando (perilla) idrive. La misma suele quedar totalmente inoperativa o parcialmente algunas teclas no funcionan tambien se puede notar que la perilla gira "loca". Reparamos su unidad con garantia y evitara tener que recurrir al dealer o colocar una usada que puede estar mas desgastada que la original de su vehiculo.',
    failures: 'Perilla suelta o floja - No responden las Teclas',
    failureCodes: '',
    components: 'Comando',
    image: '/images/Imagenes_serv_espec/BMW_iDrive.png',
  },
  {
    id: '18',
    brand: 'BMW',
    models: 'E39 E6x E7x E8x Fxx',
    years: '1998 - 2015',
    name: 'Reparacion ABS/DSC',
    description:
      'Servicio de Reparacion de modulo ABS / DSC. Estos pueden dar fallos diversos como luz de ABS encendida y no mostrar la velocidad en el tablero o ruidos al frenar.',
    failures:
      'Bomba no funciona - No hay indicacion de la velocidad en el tablero - No hay comunicacion',
    failureCodes: '',
    components: 'ABS',
    image: '/images/Imagenes_serv_espec/BMW_ABS.png',
  },
  {
    id: '19',
    brand: 'BMW',
    models: 'E6x E8x E9x Fxx',
    years: '2008 - 2015',
    name: 'Reparacion CIC',
    description:
      'Servicio de Reparacion unidad CIC (Pantalla Multimedia). La misma da fallos diversos como sin imagen, imagen trancada en el logo de BMW tambien es posible que funcione correctamente en frio pero se apague al calentar o que se reseta permanentemente. Reparamos su unidad de esta manera solo tendra que volver a conectarlo y queda listo para funcionar (no es necesario codificar como en el caso de sustitur por uno usado)  ',
    failures:
      'Se reseta - Trancado en logo - Funciona en frio pero no cuando caliente',
    failureCodes: '',
    components: 'Unidad Multimedia',
    image: '/images/Imagenes_serv_espec/BMW_CIC.png',
  },
  {
    id: '20',
    brand: 'BMW',
    models: 'Todos',
    years: '1998 - 2020',
    name: 'Reparacion ECU (DME-DME)',
    description:
      'Servico de Reparacion de DME - DDE (Computadora del motor Nafta o Diesel) tanto debido a fallas de Hardware como de Software. Dentro de las fallas de hardware podemos mencionar fallos en salida de inyectores o bobinas, reguladores de voltaje quemados, daños por entrada de agua,etc. Asi mismo ofrecemos servicio de desinmovilizacion (anulacion de antiarranque o desbloqueo en los modelos que es posible) muy util cuando alguna parte del sistema antiarranque del vehiculo no funciona correctamente y su reparacion resulta muy costosa o complicada. Otro de nuestros servicios consiste en la clonacion o copia de informacion de una ecu motor rota a una de segunda mano o comprada en desguace. Tambien ofrecemos el servicio de anulacion de subsistemas como la valvula EGR o el DPF en caso de vehiculos diesel, tambien podemos eliminar permanentemente fallos (Codigos DTC) que se cargan en memoria pero no provocan fallos en el funcionamiento del vehiculo. Siempre recomendamos la reparacion de la unidad original de su vehiculo ante la colocacion de una unidad de segunda mano de desguace.',
    failures:
      'Fallas de Hardware y Software - Clonacion - Anular Inmovilizador - Anular EGR/DPF/DTC -    ',
    failureCodes: '',
    components: 'DME - DDE',
    image: '/images/Imagenes_serv_espec/BMW_ECU.png',
  },
  {
    id: '21',
    brand: 'BMW',
    models: 'E6x E7x E8x E9x',
    years: '2004 - 2014',
    name: 'Reparacion Tranca Volante',
    description:
      'Servicio de Reparacion o Anulacion del sistema de tranca del colante de direccion. Este sistema suele dar fallos intermitentes o permanentes que imposibilitan el arranque del vehiculo. Solucion probada y permanente a este grave problema que puede dejar lo a ud varado en cualquier lugar y en cualquier momento.',
    failures: 'No da Contacto - No arranca',
    failureCodes: '',
    components: '',
    image: '/images/Imagenes_serv_espec/BMW_ELV.png',
  },
  {
    id: '22',
    brand: 'BMW',
    models: 'E7x E8x E9x',
    years: '2007 - 2016',
    name: 'Reparacion FRM',
    description:
      'Servicio de Reparacion de modulo FRM, es comun que luego de cambiar la bateria o la misma quedar mucho tiempo sin carga este modulo se deprograme generando mal funcionamiento de luces exyeriores y/o vidrios electricos. Reprogramamos su unidad original y devolvemos el 100% de su funcionalidad. Servicio mucho mas convenoente que colocar uno de segunda mano ya que no requerira programacion en el vehiculo (plug & play)',
    failures:
      'No funcionan vidrios - Mal funcionamiento Luces - No hay comunicacion',
    failureCodes: '',
    components: 'FRM',
    image: '/images/Imagenes_serv_espec/BMW_FRM.png',
  },
  {
    id: '23',
    brand: 'BMW',
    models: 'Fxx Gxx',
    years: '2014 -',
    name: 'Deshabilitacion funcion Start/Stop',
    description:
      'Servicio de Reprogramacion de la tecla del sistema Start/Stop de manera que es posible deshabilitar el sistema y este no vuleve a habilitarse al siguiente arranque del vehiculo, es decir memoriza el estado actual aun al pagar el vehiculo. Siempre es posible volver el funcionamiento al estado original de fabrica.',
    failures:
      'No necesita deshabilitar cada vez que arranca - Memoriza el ultimo estado - Reversible',
    failureCodes: '',
    components: 'Vehiculo',
    image: '/images/Imagenes_serv_espec/BMW_StartStop.png',
  },
  {
    id: '24',
    brand: 'BMW',
    models: 'F2x F3x',
    years: '2010 - 2020',
    name: 'Reparacion Tablero Fxx',
    description:
      'Servicio de Reparacion de tablero en modelos de la serie F. Una de las fallas mas comunes es el diplay que no prende en forma intermitente o permanente. Cambiamos el display y solucionamos estos problemas sobre su tablero original, esta solucion es "plug & play" de manera que solo debera volver a conectarlo en el vehiculo para que este quede totalmente funcional, esta solucion es siempre preferible a instalar un tablero de segunda mano ya que en ese caso debera resetear el kilometraje y codificar en su vehiculo. ',
    failures: 'Display no Prende',
    failureCodes: '',
    components: 'Tablero',
    image: '/images/Imagenes_serv_espec/BMW_TableroFxx.png',
  },
  {
    id: '25',
    brand: 'BMW',
    models: ' E39 - E46',
    years: '1999 - 2006',
    name: 'Reparacion Modulo de Luces',
    description:
      'Servicio de Reparacion modulo luces (LCM). Este modulo suele dar fallos tales como alguna de las luces exteriores no prende o quedan permanentemente prendidas. Reparamos a nivel de hardware el mismo modulo original de esta manera es solo volver a conectarlo y queda listo para funcionar (no es necesario codificar)  ',
    failures:
      'No funcionan luces exteriores o quedan prendidas permanentemente',
    failureCodes: '',
    components: 'LCM',
    image: '/images/Imagenes_serv_espec/BMW_LCM.png',
  },
  {
    id: '26',
    brand: 'BMW',
    models: 'E7x E8x E9x',
    years: '2006 - 2011',
    name: 'Reparacion  ECU (DME)',
    description:
      'Servicio de Reparacion de ECU (DME) para modelos de la serie E7 E8 E9 con motores N55 / N20 / N26 que provocan que su vehiculo no arranque generalmente debido a problemas electricos de bateria alternador o al hacer puente con otro vehiculo. ',
    failures: 'Motor de Arranque gira pero no arranca',
    failureCodes: '32E2 - 32E4 - 32AB - 32EB - A102 ',
    components: 'ECU - CAS - LLAVES',
    image: '/images/Imagenes_serv_espec/BMW_ECU_Mevd17.png',
  },
  {
    id: '27',
    brand: 'BMW',
    models: 'E46 - E60',
    years: '2001 - 2006 ',
    name: 'Reparacion ECU (DME)',
    description:
      'Servicio de Reparacion ECU (DME ) Motores M54 M56 (MS45.0 - MS45.1) Estas DME suelen dar fallos de hardware o software generalmente debidos a problemas electricos de bateria o laternador o al dar arranque con arrancador o con puente desde otro vehiculo. Reparamos su unidad de esta manera evita los problemas de codificacion o clonacion al colocar una computadora usada de desarmadero o aun nueva ya que estas requieren programacion y codificacion.',
    failures:
      'No arranca - Da fallo interno de procesador o memoria - Clonacion - Anulacion inmovilizador',
    failureCodes: '2830 - 2869 - 286B - P16A0 - P16A1',
    components: 'ECU - CAS - LLAVES',
    image: '/images/Imagenes_serv_espec/BMW_ECU_MS45.png',
  },
  {
    id: '28',
    brand: 'BMW',
    models: 'E3x E4x E6x E7x E8x E9x Gxx',
    years: '2001 - 2019',
    name: 'Programacion o Generacion de Llaves',
    description:
      'Servicio de Programacion de llaves tanto en caso de necesitar agregar una llave extra como de generacion de llaves nuevas en caso de haber perdido todas las llaves.',
    failures: 'Todas las llaves perdidas - Agregar llave de repuesto  ',
    failureCodes: '',
    components: 'Vehiculo',
    image: '/images/Imagenes_serv_espec/BMW_Llaves.png',
  },
  {
    id: '29',
    brand: 'BMW',
    models: 'E70 - E71',
    years: '2007 - 2012',
    name: 'Reparacion Palanca Selectora de Marchas',
    description:
      'Servicio de Reparacion de palanca selectora de marchas, Las fallas mas comunes son la misma no permite seleccionar modo Sport o puede escucharse un sonido extraño proveniente de la zona de la palanca.',
    failures: 'No permite pasar al modo Sport o Manual',
    failureCodes: 'a82e',
    components: 'Palanca Selectora',
    image: '/images/Imagenes_serv_espec/BMW_PalancaCambio.png',
  },
  {
    id: '30',
    brand: 'BMW',
    models: 'F30 - F31',
    years: '2011 - 2019 ',
    name: 'Reparacion Palanca Selectora de Marchas',
    description:
      'Servicio de Reparacion de palanca selectora de marchas cuando al seleccionar alguna marcha se apagan los leds indicadoresen forma intermitente o permanente.',
    failures: 'No se iluminan leds indicadores de marcha seleccionada',
    failureCodes: '802680',
    components: 'Palanca Selectora',
    image: '/images/Imagenes_serv_espec/BMW_PalancaCambioF30.png',
  },
  {
    id: '31',
    brand: 'BMW',
    models: 'Todos',
    years: '2003 - 2020',
    name: 'Reprogramacion (Tuning)',
    description:
      'Servicio de Remapeo (tuning) en todos los sistemas Nafta o Diesel tanto para mejorar potencia y torque como para obtener mejor rendimiento de combustible. ',
    failures: '',
    failureCodes: '',
    components: 'DME - DDE',
    image: '/images/Imagenes_serv_espec/BMW_REPRO.png',
  },
  {
    id: '32',
    brand: 'BMW',
    models: 'Todos',
    years: '2003 - 2020',
    name: 'Reprogramacion a Software Original',
    description:
      'Servicio de Remapeo en todos los sistemas Nafta o Diesel para volver al software original de fabrica. Esto es util cuando se ha realizado un remapero de mala calidad que provoca fallos o ante una falla de motor y se quiere descartar problemas de software. ',
    failures: '',
    failureCodes: '',
    components: 'DME - DDE',
    image: '/images/Imagenes_serv_espec/BMW_ECU_ORIG.png',
  },
];

export const brands: Brand[] = [
  {
    id: 'bmw',
    name: 'BMW',
    description: '',
    image: '/images/bmw-logo.jpg',
    services: services
      .filter((service) => service.brand === 'BMW')
      .map((service) => service.id),
  },
];

export function getService(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getBrand(id: string): Brand | undefined {
  return brands.find((brand) => brand.id === id);
}

export function getBrandServices(brandId: string): Service[] {
  const brand = getBrand(brandId);
  if (!brand) return [];
  return brand.services
    .map((serviceId) => getService(serviceId))
    .filter((service): service is Service => service !== undefined);
}

export function getFeaturedServices(): Service[] {
  return services.slice(0, 6);
}

export function getFeaturedBrands(): Brand[] {
  return brands.slice(0, 6);
}

export const getSearchResults = (query: string) => {
  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query),
  );

  const filteredBrands = brands.filter(
    (brand) =>
      brand.name.toLowerCase().includes(query) ||
      brand.description.toLowerCase().includes(query),
  );

  return [...filteredServices, ...filteredBrands];
};

export const featuredBrands = getFeaturedBrands();

export const featuredServices: Service[] = getFeaturedServices();

export const genericServices = services.filter(
  (service) => !service.brand && !service.models,
);

export const specificServices = services
  .filter((service) => service.brand || service.models)
  .slice(0, 6);
