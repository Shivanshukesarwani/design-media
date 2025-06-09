import React, { createContext, useContext, useState } from "react";
import JellyfinClient from "../api/jellyfin";

interface JellyfinCtx {
  jellyfin: JellyfinClient | null;
  setJellyfin: (client: JellyfinClient | null) => void;
  user: { id: string; name: string } | null;
  setUser: (u: { id: string; name: string } | null) => void;
  token: string | null;
  setToken: (t: string | null) => void;
}

const JellyfinContext = createContext<JellyfinCtx | undefined>(undefined);

export const JellyfinProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jellyfin, setJellyfin] = useState<JellyfinClient | null>(null);
  const [user, setUser] = useState<{ id: string; name: string } | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <JellyfinContext.Provider value={{ jellyfin, setJellyfin, user, setUser, token, setToken }}>
      {children}
    </JellyfinContext.Provider>
  );
};

export const useJellyfin = () => {
  const ctx = useContext(JellyfinContext);
  if (!ctx) throw new Error("useJellyfin must be used within JellyfinProvider");
  return ctx;
};