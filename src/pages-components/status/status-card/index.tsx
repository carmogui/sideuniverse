import { HTMLAttributes, ReactElement } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  icon?: ReactElement;
}

export function StatusCard({ title, description, icon, children }: Props) {
  return (
    <div className="relative flex min-h-40 w-full flex-1 flex-col justify-between gap-4 overflow-hidden rounded-lg border border-solid border-gray-200 p-4 sm:min-w-80">
      <div className="flex items-center gap-2">
        <div>{icon}</div>

        <div className="flex flex-col">
          <span className="text-xl font-bold leading-5">{title}</span>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <div>{children}</div>
      </div>
    </div>
  );
}
