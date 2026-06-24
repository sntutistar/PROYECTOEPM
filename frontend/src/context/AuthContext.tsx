import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
}

interface AuthContextProps {
    user: User | null;
    token: string | null;

    login: (
        email: string,
        password: string
    ) => Promise<boolean>;

    logout: () => void;

    loading: boolean;
}

const AuthContext = createContext<AuthContextProps>(
    {} as AuthContextProps
);

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] =
        useState<User | null>(null);

    const [token, setToken] =
        useState<string | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        const storedToken =
            localStorage.getItem("token");

        const storedUser =
            localStorage.getItem("user");

        if (storedToken && storedUser) {
            setToken(storedToken);

            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    async function login(
        email: string,
        password: string

    ) {
        try {
            console.log("Intentando login...");
            const response = await fetch(
                "http://localhost:3000/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();
            console.log(data);

            if (!response.ok) {
                alert(data.message);

                return false;
            }

            localStorage.setItem(
                "token",
                data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            setToken(data.token);

            setUser(data.user);

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    }

    function logout() {
        localStorage.removeItem("token");

        localStorage.removeItem("user");

        setUser(null);

        setToken(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}