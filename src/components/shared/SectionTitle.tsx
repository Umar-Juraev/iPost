import { FC } from "react";
import { cn } from "@/lib/utils"
interface Props {
    title: string;
    mode?: "dark" | "light";
    className?: string;
}
const SectionTitle: FC<Props> = ({ title, mode = "dark",className }) => {
    const isLight = mode === "light";
    return (
        <div
            className={cn(
            "w-full pb-4 border-b text-2xl uppercase font-organetto",
            isLight ? "border-b-white" : "border-b-[#FFFFFF80]",
            className
            )}
        >
            <h3 className={cn("text-[20px] font-normal", "text-white")}>
            {title}
            </h3>
        </div>
    );
};

export default SectionTitle;
