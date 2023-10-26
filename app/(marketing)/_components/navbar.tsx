"use client"

import { useConvexAuth } from "convex/react";
import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar = ()=>{
    const {isAuthenticated,isLoading} = useConvexAuth();
    const scrolled = useScrollTop();
    return(
        <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",scrolled && "border-b shadow-sm")}>
            <Logo/>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {/* 로그인 시 로딩 상태 */}
                {isLoading&&(
                    <Spinner/>
                )}
                {/* 로그인 하지 않은 상태 */}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode='modal'>
                            <Button variant={'ghost'} size={'sm'}>
                                Log in
                            </Button>
                        </SignInButton>
                        <SignInButton mode='modal'>
                            <Button variant={'ghost'} size={'sm'}>
                                Get Notion free
                            </Button>
                        </SignInButton>
                    </>
                )}
                {/* 로그인 후 */}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant={'ghost'} size={'sm'} asChild>
                            <Link href={'/documents'}>
                                Enter Notion
                            </Link>
                        </Button>
                        <UserButton
                            afterSignOutUrl="/"
                        />
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    )
}