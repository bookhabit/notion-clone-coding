"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = ()=>{
    const {isAuthenticated,isLoading} = useConvexAuth()

    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas,Documents, & Plans. Unified. Welcome to <span className=" underline">Notion</span></h1>
            <h3 className="text-base sm:text-xl md:text-2xl">
                Notion is the connected workspace where<br/>
                better, faster work happens.
            </h3>
            {/* 로그인 중 로딩상태 */}
            {
                isLoading && (
                    <div className=" w-full flex items-center justify-center">
                        <Spinner size={'lg'} />
                    </div>
                )
            }
            {/* 로그인 된 상태 */}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href={'/documents'}>
                        Enter Notion
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Link>
                </Button>
            )}
            {/* 로그인 하지 않은 상태 */}
            {!isAuthenticated && !isLoading && (
                <SignInButton>
                    <Button>
                        Get Notion free
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}