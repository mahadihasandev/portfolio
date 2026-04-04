import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionTitle } from "./ui/SectionTitle";
import { Github, Star, GitFork } from "lucide-react";

interface Repo {
    name: string;
    description?: string;
    stars: number;
    forks: number;
    language?: string;
    html_url: string;
}

interface UserProfile {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    followers: number;
    public_repos: number;
    html_url: string;
}

interface GitHubRepoApi {
    name: string;
    description: string | null;
    stargazers_count: number;
    forks: number;
    language: string | null;
    html_url: string;
}

const FALLBACK_USER: UserProfile = {
    avatar_url: "https://github.com/mahadihasandev.png",
    name: "Mahadi Hasan",
    login: "mahadihasandev",
    bio: "Full-stack developer focused on practical products and clean engineering.",
    followers: 0,
    public_repos: 0,
    html_url: "https://github.com/mahadihasandev",
};

const FALLBACK_REPOS: Repo[] = [
    {
        name: "shop-nextjs-fullStack",
        description: "Serverless full-stack e-commerce app with Next.js, Stripe, and Sanity.",
        stars: 0,
        forks: 0,
        language: "TypeScript",
        html_url: "https://github.com/mahadihasandev/shop-nextjs-fullStack",
    },
    {
        name: "next-frontend-express-project",
        description: "Multi-vendor e-commerce project using Next.js frontend and Express backend.",
        stars: 0,
        forks: 0,
        language: "TypeScript",
        html_url: "https://github.com/mahadihasandev/next-frontend-express-project",
    },
    {
        name: "FireChat",
        description: "Realtime chat application with Firebase, auth, and modern UI.",
        stars: 0,
        forks: 0,
        language: "JavaScript",
        html_url: "https://github.com/mahadihasandev/FireChat",
    },
];

export function GitHub() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadGitHubData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const githubToken = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;
                const headers: HeadersInit = githubToken
                    ? {
                        Accept: "application/vnd.github+json",
                        Authorization: `Bearer ${githubToken}`,
                    }
                    : {
                        Accept: "application/vnd.github+json",
                    };

                const [userResponse, reposResponse] = await Promise.all([
                    fetch("https://api.github.com/users/mahadihasandev", { headers }),
                    fetch("https://api.github.com/users/mahadihasandev/repos?sort=pushed&direction=desc&per_page=6", { headers })
                ]);

                if (userResponse.status === 403 || reposResponse.status === 403) {
                    setUser(FALLBACK_USER);
                    setRepos(FALLBACK_REPOS);
                    // Keep UI quiet when rate-limited and show fallback content instead.
                    setError(null);
                    return;
                }

                if (!userResponse.ok || !reposResponse.ok) {
                    throw new Error(`GitHub API request failed (${userResponse.status}/${reposResponse.status})`);
                }

                const userData: UserProfile = await userResponse.json();
                const repoData: GitHubRepoApi[] = await reposResponse.json();

                setUser(userData);
                setRepos(
                    repoData.map((repo) => ({
                        name: repo.name,
                        description: repo.description || "No description available",
                        stars: repo.stargazers_count,
                        forks: repo.forks,
                        language: repo.language || "Unknown",
                        html_url: repo.html_url,
                    }))
                );
            } catch (err) {
                setUser(null);
                setRepos([]);
                setError(err instanceof Error ? err.message : "Unable to load GitHub data right now.");
            } finally {
                setIsLoading(false);
            }
        };

        loadGitHubData();
    }, []);

    return (
        <section id="github" className="section-shell">
            <div className="section-container">
                <SectionTitle>GitHub Contributions</SectionTitle>

                <div className="mb-12 flex flex-col items-center">
                    <div className="w-auto p-6 soft-card rounded-2xl">
                        <GitHubCalendar
                            username="mahadihasandev"
                            blockSize={13}
                            blockMargin={8}
                            colorScheme="light"
                            theme={{
                                light: ["#afb8c2", "#60a5fa", "#1a53e6", "#1c3dff", "#1c3dff"]
                            }}
                        />
                    </div>

                    <p className="mt-8 text-lg text-center text-sky-700 dark:text-slate-300 max-w-5xl">
                        Consistent contribution history, open-source curiosity, and project experimentation are central
                        to how I learn and improve as an engineer.
                    </p>
                </div>

                {error && (
                    <p className="mb-6 text-sm text-center text-amber-600 dark:text-amber-300">
                        {error}
                    </p>
                )}

                <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                    {isLoading && Array.from({ length: 3 }).map((_, index) => (
                        <div key={`loading-${index}`} className="soft-card h-48 animate-pulse" />
                    ))}
                    {!isLoading && repos.map((repo) => (
                        <a
                            key={repo.name}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-6 soft-card rounded-2xl hover:shadow-lg transition-transform duration-300 transform hover:scale-[1.02]"
                        >
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300">
                                {repo.name}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 line-clamp-3 text-sm mt-2">
                                {repo.description}
                            </p>
                            <div className="mt-4 flex items-center justify-between text-slate-500 dark:text-slate-400 text-sm">
                                <span>{repo.language}</span>
                                <div className="flex space-x-4">
                                    <span className="flex items-center gap-1"><Star className="w-4 h-4" /> {repo.stars}</span>
                                    <span className="flex items-center gap-1"><GitFork className="w-4 h-4" /> {repo.forks}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {user && (
                    <div className="mx-auto max-w-6xl">
                        <div className="flex flex-col md:flex-row items-center justify-between soft-card rounded-2xl p-6 gap-5">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={user.avatar_url}
                                    alt="GitHub Avatar"
                                    className="w-16 bg-blue-500 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-blue-500/70"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{user.name}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">@{user.login}</p>
                                </div>
                            </div>

                            <p className="hidden md:block text-slate-700 dark:text-slate-300 flex-1 text-center md:text-left mx-6">
                                {user.bio}
                            </p>

                            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 text-slate-600 dark:text-slate-400 mt-4 md:mt-0">
                                <span className="flex items-center gap-1 text-sm">👥 {user.followers} Followers</span>
                                <span className="flex items-center gap-1 text-sm">📦 {user.public_repos} Repos</span>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-auto text-center flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all mt-3 md:mt-0"
                                >
                                    <Github className="w-5 h-5" /> View Profile
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}