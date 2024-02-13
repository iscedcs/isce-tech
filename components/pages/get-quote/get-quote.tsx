'use client'
import { Button } from "@/components/ui/button";
import { z } from 'zod'
import MaxWidthContainer from "@/components/ui/container";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";


const userFormSchema = z.object({
    firstname: z
        .string({
            required_error: 'Name is required',
        })
        .min(2, {
            message: 'Please enter your name',
        }),
    lastname: z
        .string({
            required_error: 'Enter your last name.',
        })
        .min(2, {
            message: 'Please enter your last name.',
        }),
    phone: z
        .string({
            required_error: 'Enter phone number',
        }),
    email: z
        .string({
            required_error: 'Please enter an email.',
        })
        .email(),
    project: z
        .string({
            required_error: 'Select a service.',
        }),
    company: z
        .string({
            required_error: 'Please enter valid company.',
        }),
    country: z
        .string({
            invalid_type_error: 'Enter a valid country name.',
        }),
    message: z
        .string({ required_error: 'Please enter message' })
        .min(10, {
            message: 'Message must be at least 10 characters.',
        })
        .max(200, {
            message: 'Message must not be longer than 200 charaters.',
        }),
})
type userFormSchema = z.infer<typeof userFormSchema>;

const defaultValues: Partial<userFormSchema> = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    project: '',
    company: '',
    country: '',
    message: '',
}
export default function GetQoute() {
    const form = useForm<userFormSchema>({
        resolver: zodResolver(userFormSchema),
        defaultValues,
        mode: 'onSubmit',
    });

    function onSubmit(data: userFormSchema) {
        if (data.message) {
            toast({
                title: 'Your quotation has been sent successfully.',
                description: (
                    <pre></pre>
                ),

            });
            form.reset();
        }
    }

    return (
        <div className=" bg-black  ">
            <MaxWidthContainer>
                <div className=" bg-white gap-6 p-8 my-12 max-w-3xl mx-auto  rounded-lg shadow-md">
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <Form {...form}>
                            <div className="grid grid-cols-2 gap-5 space-x-4">
                                <FormField
                                    control={form.control}
                                    name='firstname'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription className="mb-2 text-sm font-medium text-gray-900">
                                                {`First Name`}
                                            </FormDescription>
                                            <FormControl>
                                                <Input
                                                    type='text'
                                                    placeholder="Enter your first name"
                                                    {...field}
                                                    className="border-gray-300 rounded-md shadow-sm"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='lastname'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription className="mb-2 text-sm font-medium text-gray-900">
                                                {`Lastname`}
                                            </FormDescription>
                                            <FormControl>
                                                <Input
                                                    type='text'
                                                    placeholder="Enter your last name"
                                                    {...field}
                                                    className="border-gray-300 rounded-md shadow-sm"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='phone'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription className="mb-2 text-sm font-medium text-gray-900">
                                                {` Phone Number`}
                                            </FormDescription>
                                            <FormControl>
                                                <Input
                                                    type='tel'
                                                    placeholder="Enter your phone number"
                                                    {...field}
                                                    className="border-gray-300 rounded-md shadow-sm"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription className="mb-2 text-sm font-medium text-gray-900">
                                                {` Email`}
                                            </FormDescription>
                                            <FormControl>
                                                <Input
                                                    type='email'
                                                    placeholder="Enter your email"
                                                    {...field}
                                                    className="border-gray-300 rounded-md shadow-sm"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='project'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription className="mb-2 text-sm font-medium text-gray-900">
                                                {` Project Type`}
                                            </FormDescription>
                                            <FormControl>
                                                <Select  {...field}>
                                                    <SelectTrigger className="border-gray-300  rounded-md shadow-sm">
                                                        <SelectValue className="text-black" placeholder="Select project type">{`Select project type`}</SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value='software solutions'>{`Software Solutions `}</SelectItem>
                                                        <SelectItem value='web development'>{`Web Development`}</SelectItem>
                                                        <SelectItem value='mobile development'>{`Mobile Development`}</SelectItem>
                                                        <SelectItem value='hosting & domains'>{`Hosting & Domains`}</SelectItem>
                                                        <SelectItem value='digital marketing'>{`Digital Marketing`}</SelectItem>
                                                        <SelectItem value='seo'>{`SEO (search engine optimization)`}</SelectItem>
                                                        <SelectItem value='graphic design'>{`Graphic Design`}</SelectItem>
                                                        <SelectItem value='ui/ux'>{`UI/UX`}</SelectItem>
                                                        <SelectItem value='graphic design'>{`Graphic Design`}</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='company'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription className="mb-2 text-sm font-medium text-gray-900">
                                                {`Company Name`}
                                            </FormDescription>
                                            <FormControl>
                                                <Input
                                                    type='text'
                                                    placeholder="Enter your company name"
                                                    {...field}
                                                    className="border-gray-300 rounded-md shadow-sm"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='country'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription className="mb-2 text-sm font-medium text-gray-900">
                                                {`Country`}
                                            </FormDescription>
                                            <FormControl>
                                                <Input
                                                    type='text'
                                                    placeholder="Enter your country"
                                                    {...field}
                                                    className="border-gray-300 rounded-md shadow-sm"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <div className="flex flex-col col-span-2">
                                    <FormField
                                        control={form.control}
                                        name='message'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormDescription className="mb-2 text-sm font-medium text-gray-900">
                                                    {` Message`}
                                                </FormDescription>
                                                <FormControl>
                                                    <Textarea {...field} placeholder="Type your message"
                                                    className="border-gray-300 rounded-md shadow-sm">
                                                        
                                                    </Textarea>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col col-span-2">
                                    <Button
                                        className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                        type="submit"
                                    >
                                        {`Request a quote`}
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </form>
                </div>
            </MaxWidthContainer>
        </div>
    )
}