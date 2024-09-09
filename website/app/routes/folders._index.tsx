import { useLoaderData, useSearchParams } from "@remix-run/react";
import { useDeferredValue } from "react";

import { FoldersIcons, iIcons } from "@/data/svgs";
import { searchParamKey, iconSizeParamKey } from "@/data/searchParams";

import Grid from "@/components/grid";
import Card from "@/components/card";
import Loading from "@/components/loading";

import { cn } from "@/utils";
import { containerClasses } from "@/ui/container";

export async function clientLoader() {
  const data = FoldersIcons;
  return data;
}

export function HydrateFallback() {
  return <Loading className="my-10 flex items-center justify-center" />;
}

export default function Folders() {
  const data = useLoaderData<typeof clientLoader>();
  const [searchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey) || "";
  const iconSizeValue = searchParams.get(iconSizeParamKey) || 45;
  const deferredSize = useDeferredValue(Number(iconSizeValue));

  const filteredIcons = data.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase()),
  ) as iIcons[];

  return (
    <main className="animate-in fade-in-40 duration-500">
      <Grid className={cn(containerClasses, "pb-14 pt-6")}>
        {filteredIcons.map((icon) => {
          return (
            <Card
              key={icon.name}
              isFolder={false}
              iconSize={deferredSize}
              {...icon}
            />
          );
        })}
      </Grid>
    </main>
  );
}
