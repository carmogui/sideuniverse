import { Header, Loading } from "components";
import Link from "next/link";
import {
  TbDatabase,
  TbExternalLink,
  TbListTree,
  TbUsers,
} from "react-icons/tb";
import useSWR from "swr";
import { LastUpdated, StatusCard } from "pages-components/status";
import styles from "./styles.module.css";

async function fetchAPI(key: string) {
  const response = await fetch(key);

  return await response.json();
}

export default function StatusPage() {
  const { data = {}, isLoading } = useSWR("api/v1/status", fetchAPI);

  const { updated_at, dependencies } = data || {};
  const { version, max_connections, opened_connections } =
    dependencies?.database || {};

  return (
    <div className="flex h-dvh flex-col">
      <Header />

      <div className="flex h-fit w-full flex-1 flex-col items-center justify-center gap-24 p-7 pb-14">
        <div className="relative">
          <div
            data-status={isLoading ? "loading" : data ? "success" : "error"}
            className={styles.statusIndicator}
          />
          <h2 className="text-end text-4xl font-bold sm:text-5xl">
            system status
          </h2>
        </div>

        <div className="flex w-full max-w-[820px] flex-col justify-center gap-8">
          <LastUpdated isLoading={isLoading} lastUpdated={updated_at} />

          <div className="flex flex-col flex-wrap gap-8 sm:flex-row">
            <StatusCard
              title="database"
              description="postgreSQL"
              icon={<TbDatabase size={40} />}
            >
              {isLoading ? (
                <Loading />
              ) : data ? (
                <>
                  <span className="text-4xl font-bold">v</span>
                  <span className="text-4xl">{version}</span>
                </>
              ) : (
                <span className="text-gray-400">error</span>
              )}
            </StatusCard>

            <StatusCard
              title="connections"
              description="open connections"
              icon={<TbUsers size={40} />}
            >
              {isLoading ? (
                <Loading />
              ) : data ? (
                <>
                  <span className="text-4xl font-bold">
                    {opened_connections}
                  </span>
                  <span className="text-4xl">/{max_connections}</span>
                </>
              ) : (
                <span className="text-gray-400">error</span>
              )}
            </StatusCard>
          </div>

          <div className="flex justify-end">
            <Link
              href="api/v1/status"
              target="_blank"
              className="flex items-center gap-2 rounded-lg border border-solid border-gray-200 px-4 py-2 md:hover:border-gray-400"
            >
              <TbListTree />
              raw data
              <TbExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
