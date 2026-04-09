import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const hashSlug = (str: string) => // simple hash function to create a slug from category name
	Array.from(str)
		.reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0)
		.toString(36)
		.replace('-', '');