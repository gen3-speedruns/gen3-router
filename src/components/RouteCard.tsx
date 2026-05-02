interface RouteCardProps {
  left?: React.ReactNode;
  title: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
  faded?: boolean;
}

export const RouteCard: React.FC<RouteCardProps> = ({
  left,
  title,
  action,
  children,
  faded = false,
}) => {
  return (
    <section
      className={`card my-4 border border-base-content/10 bg-base-100 shadow-sm ${
        faded ? "opacity-60" : ""
      }`}
    >
      <div className="card-body gap-4 p-4">
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {left}
            <div className="card-title flex-wrap items-center gap-x-2 gap-y-1">
              {title}
            </div>
          </div>
          {action && <div className="card-actions">{action}</div>}
        </header>
        {children && <div className="space-y-3">{children}</div>}
      </div>
    </section>
  );
};
