"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // مراقبة التمرير لإظهار أو إخفاء الزر
    useEffect(() => {
        const toggleVisibility = () => {
            // يظهر الزر بعد التمرير لأسفل بمقدار 300 بكسل
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // التمرير السلس
        });
    };

    return (
        <div className="bottom-25 sm:bottom-8 right-8 z-50 fixed">
            <Button
                variant="default"
                size="icon"
                onClick={scrollToTop}
                className={cn(
                    "h-12 w-12 rounded-full bg-primary transition-all duration-300 shadow",
                    isVisible  ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
                )}
                aria-label="العودة إلى الأعلى"
            >
                <ArrowUp className="h-6 w-6" />
                
                {/* Scroll to top */}
            </Button>
        </div>
    );
}