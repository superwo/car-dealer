import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { HeartIcon } from "lucide-react";

type FavouriteButtonProps = {
    setIsFavourite: (isFavourite: boolean) => void;
    isFavourite: boolean;
    id: number;
};

export const FavouriteButton = (props: FavouriteButtonProps) => {
    const { setIsFavourite, isFavourite, id } = props;

    return (
        <Button
            variant="ghost"
            size="icon"
            className={cn(
                "absolute top-2.5 left-3.5 rounded-full z-10 group !h-6 !w-6 lg:!h-8 lg:!w-8 xl:!h-10 xl:!w-10"
            )}
        >
            <HeartIcon
                className={cn(
                    "duration-200 transition-colors ease-in-out w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-6 xl:h-6 text-white"
                    // isFavourite
                    // 	? "text-pink-500 fill-pink-500"
                    // 	: "group-hover:text-pink-500 group-hover:fill-pink-500",
                )}
            />
        </Button>
    );
};
