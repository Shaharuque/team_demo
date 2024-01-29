"use client"
import { authenticate } from "@/lib/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect,useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import image1 from '../../../../public/images/image1.png';

const schema = z.object({
    email: z.string(),
    password: z.string().min(4),
});

type FormFields = z.infer<typeof schema>;

const TestForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        defaultValues: {
            email: "test@email.com",
        },
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            //   hitting a dummy api
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    username: 'kminchelle',
                    password: '0lelplR',
                    // expiresInMins: 60, // optional
                })
            }).then(res => res.json())

            // const postData = {
            //     grant_type: "password_username",
            //     username: data.email,
            //     password: data.password,
            //   };

            //   await new Promise((resolve) => setTimeout(resolve, 2000));
            //   const result = await authenticate(postData);
          
            //   //console.log(data)
          
            //   if (result) {
            //     router.replace("/dashboard");
            //   }

        } catch (error) {
            setError("root", {
                message: "This email is already taken",
            });
        }
    };

    return (
        <form className="tutorial gap-2" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} type="text" placeholder="Email" />
            {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
            )}
            <input {...register("password")} type="password" placeholder="Password" />
            {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
            )}
            <button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Loading..." : "Submit"}
            </button>
            {errors.root && <div className="text-red-500">{errors.root.message}</div>}
        </form>
    );
};

export default TestForm;