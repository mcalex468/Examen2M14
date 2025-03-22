import { ref, onMounted } from 'vue';
import axios from 'axios';

export function usePokemons() {
    const pokemons = ref([]);
    const pokemonDetail = ref([]);
    const uniquePokemons = ref([]);
    const loading = ref(false);
    const error = ref(null);

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

    // Filtrar Pokémon únicos (por si en otra API hubiera repetidos)
    const filterUniquePokemons = () => {
        const uniqueNames = new Set();
        uniquePokemons.value = pokemons.value.filter((pokemon) => {
            if (uniqueNames.has(pokemon.name)) {
                return false; // Si ya está en el Set, lo filtramos
            } else {
                uniqueNames.add(pokemon.name); // Si no está, lo añadimos al Set
                return true;
            }
        });
    };

    // Obtener detalles de un Pokémon por nombre
    const getPokemonDetail = async (name) => {
        loading.value = true;
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            pokemonDetail.value = response.data;
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
