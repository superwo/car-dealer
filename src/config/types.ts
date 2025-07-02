// import type { UpdateClassifiedType } from "@/app/schemas/classified.schema";
import type { Prisma } from "@prisma/client";
import { ChangeEvent } from "react";
// import type { ChangeEvent } from "react";

export interface MultiStepFormComponentProps extends AwaitedPageProps {
    classified: Prisma.ClassifiedGetPayload<{
        include: { make: true };
    }>;
}

type Params = {
    [x: string]: string | string[];
};

export type PrevState = {
    success: boolean;
    message: string;
};

export type PageProps = {
    params?: Promise<Params>;
    searchParams?: Promise<{ [x: string]: string | string[] | undefined }>;
};

export type AwaitedPageProps = {
    params?: Awaited<PageProps["params"]>;
    searchParams?: Awaited<PageProps["searchParams"]>;
};

export type ClassifiedWithImages = Prisma.ClassifiedGetPayload<{
    include: {
        images: true;
    };
}>;

export type CustomerWithClassified = Prisma.CustomerGetPayload<{
    include: { classified: true };
}>;

export enum MultiStepFormEnum {
    WELCOME = 1,
    SELECT_DATE = 2,
    SUBMIT_DETAILS = 3,
}

export interface Favourites {
    ids: number[];
}

export interface TaxonomyFiltersProps extends AwaitedPageProps {
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export type FilterOptions<LType, VType> = Array<{
    label: LType;
    value: VType;
}>;

export interface SidebarProps extends AwaitedPageProps {
    minMaxValues: Prisma.GetClassifiedAggregateType<{
        _min: {
            year: true;
            price: true;
            odoReading: true;
        };
        _max: {
            year: true;
            odoReading: true;
            price: true;
        };
    }>;
}
