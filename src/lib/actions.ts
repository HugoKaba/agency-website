'use server';

import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const contactSchema = z.object({
	email: z.string().email({ message: 'Please enter a valid email address' }),
	subject: z.string().min(10, { message: 'Subject must be at least 10 characters' }),
	description: z.string().min(20, { message: 'Message must be at least 20 characters' }),
});

export const createContactMessage = async (prevState: ContactFormState, formData: FormData) => {
	const email = formData.get('email');
	const subject = formData.get('subject');
	const description = formData.get('description');

	const parsed = contactSchema.safeParse({ email, subject, description });

	if (!parsed.success) {
		const errors = parsed.error.formErrors.fieldErrors;
		return {
			email: { value: email as string, errors: errors.email },
			subject: { value: subject as string, errors: errors.subject },
			description: { value: description as string, errors: errors.description },
			status: { message: 'Please correct the errors in the form.', type: 'error' },
		} satisfies ContactFormState;
	}

	await prisma.contact.create({
		data: {
			email: parsed.data.email,
			subject: parsed.data.subject,
			description: parsed.data.description,
		},
	});

  	return {
			...prevState,
			email: { value: '' },
			subject: { value: '' },
			description: { value: '' },
			status: { message: 'Your message has been sent successfully!', type: 'success' },
		} satisfies ContactFormState;
};

export type ContactFormState = {
	email: { value: string; errors?: string[] };
	status?: { message: string; type: 'success' | 'error' | '' };
	subject: { value: string; errors?: string[] };
	description: { value: string; errors?: string[] };
};
