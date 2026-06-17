import { type FC } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { CustomLogo } from "@/components/customs/CustomLogo";
import { CustomMenu } from "./CustomMenu";

export const CustomHeader: FC = () => {
    
    return (
        <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <CustomLogo />

                    {/* Navigation - Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={cn(`text-sm font-medium transition-colors hover:text-primary`)}>
                            Pagos
                        </Link>
                    </nav>

                    {/* Search and Cart */}
                    <div className="flex items-center space-x-4">
                        <CustomMenu />
                    </div>
                </div>
            </div>
        </header>
    );
};
