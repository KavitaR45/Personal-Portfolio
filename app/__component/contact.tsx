"use client";
import { useState } from "react";
import confetti from "canvas-confetti";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SendHorizontal } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button";
const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    mobno: z.string().regex(/^\d+$/),
    message: z.string().min(2).max(1000),
})

const handleConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
        if (Date.now() > end) return;

        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            startVelocity: 60,
            origin: { x: 0, y: 0.5 },
            colors: colors,
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            startVelocity: 60,
            origin: { x: 1, y: 0.5 },
            colors: colors,
        });

        requestAnimationFrame(frame);
    };

    frame();
};
export default function Contact() {
    const [loading, setLoading] = useState<boolean>(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            mobno: "",
            message: ""
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
        const formData = { ...values};
        await fetch("https://formspree.io/f/mnnajogb", {
            method: "POST",
            body: formData,
        });
        handleConfetti();
        setLoading(false);
    }

    return (
        <section className="flex h-full w-full flex-col items-center justify-between py-10">
            <h2 className="text-5xl font-bold ">Get In Touch</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full md:w-1/2 mt-10 text-center">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobno"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Mobile No." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Message" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={loading} type="submit">Submit <SendHorizontal className="ml-2 h-4 w-4"/></Button>
                </form>
            </Form>
        </section>
    );
}
