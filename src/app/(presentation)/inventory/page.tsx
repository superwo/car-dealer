import { ClassifiedCard } from "@/components/inventory/classified-card";
import { AwaitedPageProps, PageProps } from "@/config/types";
import { prisma } from "@/lib/prisma";

const getInventory = async (searchParams: AwaitedPageProps["searchParams"]) => {
    return prisma.classified.findMany({
        include: { images: true },
    });
};

export default async function InventoryPage(props: PageProps) {
    const searchParams = await props.searchParams;
    const classifieds = await getInventory(searchParams);
    const count = await prisma.classified.count();

    return (
        <div className="grid grid-cols-1">
            {classifieds.map((classified) => (
                <ClassifiedCard
                    key={classified.id}
                    classified={classified}
                    favourites={[]}
                />
            ))}
        </div>
    );
}
