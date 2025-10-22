import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { jwtDecode } from "jwt-decode";

const AuthButtons = () => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const [token, setToken] = useState(null);
  const [roles, setRoles] = useState("");

  useEffect(() => {
    if (!isAuthenticated || !user) return; // guard

    const fetchToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: import.meta.env.VITE_AUTH_AUDIENCE,
          scope: "openid profile email",
        });

        console.log("Access Token:", accessToken);
        console.log("User:", user);

        setToken(accessToken);

        const decoded = jwtDecode(accessToken);
        console.log("Decoded JWT:", decoded);

        const userRoles = decoded["https://exoln.com/roles"] || [];
        setRoles(userRoles);

        // Sync with backend with dummy profile data
        const res = await fetch("/api/users/me", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            sub: user.sub,
            email: user.email,
            name: user.name,
            // Dummy profile data
            fullName: "Khaled Essam",
            gender: "male",
            city: "Cairo",
            biography: "Software developer passionate about building great user experiences.",
            profession: "Software Engineer",
            ageGroup: "25-34",
            nationality: "Egyptian",
            employmentSector: "private",
          }),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Sync failed: ${res.status} - ${text}`);
        }

        const data = await res.json();
        console.log("✅ Synced user successfully:", data);
      } catch (err) {
        console.error("Error getting access token or syncing user:", err);
      }
    };

    fetchToken();
  }, [isAuthenticated, user, getAccessTokenSilently]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user?.nickname}</p>

          <p>
            Roles:{" "}
            {roles.length > 0 ? roles.join(", ") : "No roles assigned"}
          </p>

          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log out
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In / Sign Up</button>
      )}
    </div>
  );
};

export default AuthButtons;