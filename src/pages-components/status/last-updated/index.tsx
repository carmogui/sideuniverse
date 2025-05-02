import { Loading } from "components";
import { TbCalendarDot, TbClock } from "react-icons/tb";

interface Props {
  lastUpdated: string;
  isLoading: boolean;
}

export function LastUpdated({ lastUpdated, isLoading }: Props) {
  const lastUpdatedDate = new Date(lastUpdated).toLocaleString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const lastUpdatedHour = new Date(lastUpdated).toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="flex min-h-20 flex-wrap justify-between gap-4 overflow-hidden rounded-lg bg-gray-200 p-4">
      <div className="flex flex-col">
        <span className="text-xl font-bold leading-5">last updated</span>
      </div>

      <div className="flex min-w-40 flex-1 flex-col items-end justify-self-end">
        {isLoading ? (
          <Loading />
        ) : lastUpdated ? (
          <>
            <div className="flex items-center gap-2">
              <TbCalendarDot />
              <span>{lastUpdatedDate}</span>
            </div>

            <div className="flex items-center gap-2">
              <TbClock />
              <span>{lastUpdatedHour}</span>
            </div>
          </>
        ) : (
          <span className="text-gray-400">error</span>
        )}
      </div>
    </div>
  );
}
