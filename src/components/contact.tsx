'use client'

import { createContactMessage } from "@/lib/actions"
import { useActionState } from "react"

export type ContactFormState = {
    email: { value: string, errors?: string[] }
    subject: { value: string, errors?: string[] }
    description: { value: string, errors?: string[] }
    status?: { message: string, type: 'success' | 'error' | '' }
}

const Contact = () => {
    const [{ email: { value: emailValue, errors: emailErrors },
        subject: { value: subjectValue, errors: subjectErrors },
        description: { value: descriptionValue, errors: descriptionErrors },
        status },
        formAction,
        isPending] = useActionState<ContactFormState, FormData>(createContactMessage, {
            email: { value: '' },
            subject: { value: '' },
            description: { value: '' },
            status: { message: '', type: '' },
        })

    return (
        <section className="flex justify-center items-center md:p-8 bg-white">
            <div className="flex flex-col md:flex-row w-full rounded-xl bg-[#c7d2fe] p-8 md:space-x-24 space-y-8 md:space-y-0">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <h2 className="text-4xl  md:text-6xl xl:text-7xl text-center md:text-left font-bold font-NeuePowerTrial bold-text text-[#102030] mb-5 md:mt-10 selection:bg-saumon">
                        Ideas in your 🧠 ?
                    </h2>
                    <span className="text-4xl md:text-6xl xl:text-7xl text-center md:text-left font-bold font-NeuePowerTrial bold-text text-[#102030] lg:mb-16  selection:bg-saumon">Contact us !</span>
                </div>
                <div className="w-full md:w-1/3">
                    <form action={formAction} className="space-y-8">
                        {status?.message && (
                            <p className={`text-center text-sm font-medium mt-4 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                {status.message}
                            </p>
                        )}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                defaultValue={emailValue}
                                className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            />
                            {emailErrors && emailErrors.map((error, idx) => (
                                <p key={idx} className="text-red-500 text-sm">{error}</p>
                            ))}
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                defaultValue={subjectValue}
                                className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm"
                            />
                            {subjectErrors && subjectErrors.map((error, idx) => (
                                <p key={idx} className="text-red-500 text-sm">{error}</p>
                            ))}
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea
                                id="description"
                                name="description"
                                defaultValue={descriptionValue}
                                rows={6}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300"
                            />
                            {descriptionErrors && descriptionErrors.map((error, idx) => (
                                <p key={idx} className="text-red-500 text-sm">{error}</p>
                            ))}
                        </div>
                        <button
                            type="submit"
                            className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg filter drop-shadow-2xl custom-drop-shadow bg-indigo-600 w-full sm:w-auto hover:bg-primary-800 ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isPending}
                        >
                            {isPending ? 'Sending...' : 'Send message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
