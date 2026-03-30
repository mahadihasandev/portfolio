import { useState, useEffect, useRef } from "react";
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

export function GitHub() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [shouldLoad, setShouldLoad] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!shouldLoad) return;

        const loadGitHubData = async () => {
            setIsLoading(true);
            try {
                const [userResponse, reposResponse] = await Promise.all([
                    fetch("https://api.github.com/users/mahadihasandev"),
                    fetch("https://api.github.com/users/mahadihasandev/repos?sort=pushed&direction=desc&per_page=6")
                ]);

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
            } catch {
                setRepos([]);
            } finally {
                setIsLoading(false);
            }
        };

        loadGitHubData();
    }, [shouldLoad]);

    return (
        <section ref={sectionRef} id="github" className="section-shell">
            <div className="section-container max-w-6xl">
                <SectionTitle>GitHub Contributions</SectionTitle>

                <div className="mb-12 flex flex-col items-center">
                    <div className="w-full p-6 soft-card rounded-2xl">
                        {shouldLoad ? (
                            <GitHubCalendar
                                username="mahadihasandev"
                                blockSize={17}
                                blockMargin={10}
                                colorScheme="light"
                                theme={{
                                    light: ["#afb8c2", "#60a5fa", "#1a53e6", "#1c3dff", "#1c3dff"]
                                }}
                            />
                        ) : (
                            <div className="h-[152px] animate-pulse rounded-xl bg-slate-200/60 dark:bg-slate-800/60" />
                        )}
                    </div>

                    <p className="mt-8 text-lg text-center text-slate-600 dark:text-slate-300 max-w-5xl">
                        Consistent contribution history, open-source curiosity, and project experimentation are central
                        to how I learn and improve as an engineer.
                    </p>
                </div>

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
                    <div className="flex flex-col md:flex-row items-center justify-between soft-card rounded-2xl p-6 gap-5">
                        <div className="flex items-center space-x-4">
                            <img
                                src={user.avatar_url}
                                alt="GitHub Avatar"
                                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-500/70"
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
                )}
            </div>
        </section>
    );
}