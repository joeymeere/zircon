"use client"

import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/components/ui/toast"
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast"

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.005,
    restSpeed: 0.001,
};

export function Toaster() {
    const { toasts } = useToast()

    return (
        <ToastProvider>
            {toasts.map(function ({ id, title, description, action, ...props }) {
                return (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, scale: 0.85, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={transition}
                    >
                        <Toast {...props}>
                            <div className="grid gap-1 font-plex">
                                {title && <ToastTitle>{title}</ToastTitle>}
                                {description && (
                                    <ToastDescription>{description}</ToastDescription>
                                )}
                            </div>
                            {action}
                            <ToastClose />
                        </Toast>
                    </motion.div>
                )
            })}
            <ToastViewport />
        </ToastProvider>
    )
}
