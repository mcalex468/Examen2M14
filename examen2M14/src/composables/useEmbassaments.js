// useEmbassaments.js
import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useEmbassaments() {
  const embassaments = ref([]);
  const uniqueEmbassaments = ref([]);
  const dades = ref([]);

  // REGLA ORO 
  // API DEVUELVE UN ARRARY - ASIGNAR DIRECTAMENTE
  // API DEVUELVE UN OBJETO, Y QUIERO UN ARRAY, ASIGNAR DENTRO DE [];

  /*
   CASO API AIGUA, DEVUELVE ARRAY 0, ARRAY 1, DENTRO ENCONTRAMOSLA INFO
   DE CADA, POR ESO ASIGNAMOS pokemons.value = response.data.results
   */

  // Obtener los datos de la API
  const getEmbassaments = async () => {
    try {
      const response = await axios.get('https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json');
      embassaments.value = response.data;
      filterUniqueEmbassaments();
    } catch (err) {
      console.error('Error al obtener los datos:', err);
    }
  };

  /*
  En aiguaDetall la API ya devuelve un array, no un objeto
  así que solo asignas response.data, no se necesita poner [] , porque ya es un array
  */

  // Filtrar embalses únicos
  const filterUniqueEmbassaments = () => {
    const uniqueEstaci = new Set();
    uniqueEmbassaments.value = embassaments.value.filter((embassament) => {
      if (uniqueEstaci.has(embassament.estaci)) {
        return false; // Si ya está en el Set, lo filtramos
      } else {
        uniqueEstaci.add(embassament.estaci); // Si no está, lo añadimos al Set
        return true;
      }
    });
  };

  /*
  En aiguaDetall la API ya devuelve un array, así que solo asignas response.data
  */

  // Obtener detalles de un embalse específico
  const getDetallEmbassament = async (nom) => {
    try {
      const response = await axios.get(`https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json?$query=SELECT%20%60dia%60%2C%60estaci%60%2C%60nivell_absolut%60%2C%60percentatge_volum_embassat%60%2C%60volum_embassat%60%20WHERE%20%60estaci%60%20=%20%27${nom}%27%20ORDER%20BY%20%60dia%60%20DESC%20LIMIT%20100`);
      dades.value = response.data;
    } catch (err) {
      console.error('Error al obtener el detalle del embassament:', err);
    }
  };

  onMounted(getEmbassaments);

  return { uniqueEmbassaments, dades, getDetallEmbassament };
}