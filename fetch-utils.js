// Enter Supabase Information
const SUPABASE_URL = 'https://hndnxodsordjzcxmohou.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZG54b2Rzb3JkanpjeG1vaG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDQ3MDEsImV4cCI6MTk2Nzg4MDcwMX0.d0akgji877V3JjW_u9QrFkhTnA5GHvZKs90nCkQ6V_w';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUP({ email, password });

    return response.user;
}

export async function signInUser(email, password) {}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}
