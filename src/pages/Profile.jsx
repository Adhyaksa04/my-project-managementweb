import { useEffect, useState } from "react";
import useAuthStore from "../stores/authStore";
import api from "../utils/api";


export default function Profile() {
    const { token } = useAuthStore();
    const [user, setUser] = useState(null);
    console.log(user);

    // const setUserStore = useAuthStore((state) => state.setUser);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await api.get("/api/auth/me",
                //     {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     }
                // }
            );

                setUser(response.data.user);
                // setUser(response.data);

            } catch (error) {
                console.error("Failed to fetch profile", error);
            }
        };

        fetchUserProfile();
    }, []);
    if (!user) {

        // if (!user) {
        //     return <div>Loading...</div>;
        //   }
        return (
            <div class="max-w-2xl mx-auto animate-pulse">
                <div class="h-6 w-1/4 bg-gray-200 rounded mb-6"></div>
                <div class="bg-white rounded-lg shadow p-6">
                    <div class="space-y-4">
                        <div>
                            <div class="h-4 w-1/6 bg-gray-200 rounded mb-1"></div>
                            <div class="mt-1 h-6 bg-gray-200 rounded w-3/4"></div>
                        </div>
                        <div>
                            <div class="h-4 w-1/6 bg-gray-200 rounded mb-1"></div>
                            <div class="mt-1 h-6 bg-gray-200 rounded w-3/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Profile</h1>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <p className="mt-1 text-lg" >{user.email}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <p className="mt-1 text-lg">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}