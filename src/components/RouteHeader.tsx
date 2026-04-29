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
    <div className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-bold uppercase tracking-widest bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
          {getGameLabel(game)}
        </span>
        <span className="text-xs font-bold uppercase tracking-widest bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
          {category}
        </span>
      </div>
      <h1 className="text-3xl font-black tracking-tight mt-2">{title}</h1>
      <p className="text-sm text-gray-400 mt-1">
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
