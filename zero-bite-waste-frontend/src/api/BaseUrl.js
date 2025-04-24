
console.log(import.meta.env.VITE_BASE_URL)
export const BaseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:3000/api"