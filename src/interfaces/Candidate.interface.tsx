// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
    id: string; 
    name: string;
    login: string;
    repos_url: string | null; 
    avatar_url: string; 
    email?: string | null; 
    html_url: string; 
    company?: string | null; 
    bio?: string | null; 
    followers: number; 
    following: number; 
    public_repos: number; 
    created_at: string; 
    updated_at: string; 
}