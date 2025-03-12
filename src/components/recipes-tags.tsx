"use client";

import { getTags } from "@/utils/get";
import { useEffect, useState } from "react";

export default function RecipesTags() {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchTags() {
      const tagsData = await getTags();
      setTags(tagsData);
      setLoading(false);
    }
    fetchTags();
  }, []);

  return (
    <div style={{ display: "flex", gap: 5, overflow: "auto", whiteSpace: "nowrap", padding: 5 }}>
      {loading ? (
        <p>Chargement des tags...</p>
      ) : (
        tags.map((tag) => (
          <p key={tag} style={{ padding: 5, flex: 1, backgroundColor: "#f0f0f0", borderRadius: 5 }}>
            {tag}
          </p>
        ))
      )}
    </div>
  );
}
