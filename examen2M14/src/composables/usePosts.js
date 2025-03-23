import { ref, onMounted } from 'vue';
import axios from 'axios';

export function usePosts() {
    const posts = ref([]);
    const postsId = ref({}); // SOLO DEVUELVE 1, USAMOS UN OBJETO
    const postsUserId = ref([]);

    // REGLA DE ORO 
    // API DEVUELVE UN ARRAY - ASIGNAR DIRECTAMENTE
    // API DEVUELVE UN OBJETO, Y QUIERO UN ARRAY, ASIGNAR DENTRO DE [];

    // ESTA API DEVUELVE ARRAYS, ASÍ QUE NORMAL

    // Obtener todos los posts
    const getPosts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts.value = response.data;
        } catch (err) {
            console.log('Error al obtener los datos:', err);
        }
    };

    // Obtener un post por ID
    const getPostsId = async (id) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            postsId.value = response.data;
        } catch (err) {
            console.log('Error al obtener el post:', err);
        }
    };

    // Obtener posts de un usuario específico
    const getPostsUserId = async (userId) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            postsUserId.value = response.data; // Devuelve un array de posts del usuario
        } catch (err) {
            console.log('Error al obtener los posts del usuario:', err);
        }
    };

    // Llamar a getPosts al montar el componente
    onMounted(getPosts);

    return { posts, postsId, postsUserId, getPosts, getPostsId, getPostsUserId };
}
