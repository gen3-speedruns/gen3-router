import React from "react";
import { getGameLabel, type RouteFrontmatter } from "../markdoc/frontmatter";

export const RouteHeader: React.FC<{ frontmatter: RouteFrontmatter }> = ({
  frontmatter,
}) => {
  const { title, game, category, author, date } = frontmatter;

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="mb-8 pb-6 border-b border-base-content/10">
      <div className="flex items-center gap-2 mb-2">
        <span className="badge badge-primary badge-outline">
          {getGameLabel(game)}
        </span>
        <span className="badge badge-secondary badge-outline">{category}</span>
      </div>
      <h1 className="text-4xl font-black tracking-tight">{title}</h1>
      <p className="text-base-content/50 text-sm mt-1">
        by {author}
        {formattedDate && (
          <>
            <span className="mx-2">·</span>
            {formattedDate}
          </>
        )}
      </p>
    </div>
  );
};
