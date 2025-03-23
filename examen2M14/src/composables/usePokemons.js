import { ref, onMounted } from 'vue';
import axios from 'axios';

export function usePokemons() {
    const pokemons = ref([]);
    const pokemonDetail = ref([]); // Mantener como array
    const loading = ref(false);
    const error = ref(null);

    // REGLA ORO 
    // API DEVUELVE UN ARRARY - ASIGNAR DIRECTAMENTE
    // API DEVUELVE UN OBJETO, Y QUIERO UN ARRAY, ASIGNAR DENTRO DE [];

    /*
    CASO API POKEMONS, DEVUELVE UN ARRAY LLAMADO RESULTS, DENTRO ENCONTRAMOS A LOS
    POKEMONS, POR ESO ASIGNAMOS pokemons.value = response.data.results
    */

    // Obtener la lista de Pokémon
    const getPokemons = async () => {
        loading.value = true;
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            pokemons.value = response.data.results;
        } catch (err) {
            console.error('Error al obtener los datos:', err);
            error.value = 'Error al obtener los datos';
        } finally {
            loading.value = false;
        }
    };

    /*
    CASO API POKEMONS, la API devuelve un objeto individual,
    pero tu código espera un array, por eso ponemos [response.data]
    */

    // Obtener detalles de un Pokémon
    const getPokemonDetail = async (name) => {
        loading.value = true;
        error.value = null;
        pokemonDetail.value = []; // Limpia el array antes de agregar nuevo dato
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            pokemonDetail.value = [response.data]; // Guarda el objeto dentro del array
        } catch (err) {
            console.error('Error al obtener el detalle del Pokémon:', err);
            error.value = 'Error al obtener el detalle';
        } finally {
            loading.value = false;
        }
    };

    onMounted(getPokemons);

    return { pokemons, pokemonDetail, loading, error, getPokemonDetail };
}
